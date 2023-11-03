import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";
import { User, ErrorData } from "../components/types/types";

interface AuthContextType {
  signup: (user: User) => Promise<void>;
  signin: (user: User) => Promise<void>;
  loading: boolean;
  user: User | null;
  isAuthenticated: boolean;
  errorsAuth: ErrorData[];
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorsAuth, setErrorsAuth] = useState<ErrorData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);

      setUser(res.data);
      setIsAuthenticated(true);

    } catch (error: any) {
      setErrorsAuth(error.response.data);
    }
  };

  const signin = async (user: User) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      // console.log(error);
      setErrorsAuth(error.response.data);
    }
  };

  // clear errors after 5 seconds
  useEffect(() => {
    if (errorsAuth.length > 0) {
      const timer = setTimeout(() => {
        setErrorsAuth([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorsAuth]);

  // Verificación de tokens y atuenticación de usuarios
  useEffect(() => {
    async function fetchData() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }

    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        errorsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
