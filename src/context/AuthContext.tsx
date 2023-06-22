import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

interface User {
  username: string;
  email: string;
  password: string;
}

interface ErrorData {
  error: string | string[];
}

interface AuthContextType {
  signup: (user: User) => Promise<void>;
  signin: (user: User) => Promise<void>;
  loading: boolean;
  user: User | null;
  isAuthenticated: boolean;
  error: ErrorData[];
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
  const [errors, setErrors] = useState<ErrorData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error: any) {
      console.log(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  const signin = async (user: User) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      // setError(error.response?.data);
      console.log(error);
    }
  };

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
        console.log(res.data);
        if (!res.data){
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
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
