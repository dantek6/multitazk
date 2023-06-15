import { createContext, ReactNode, useState, useContext } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import { set } from "date-fns";

interface User {
  username: string;
  email: string;
  password: string;
}

interface ErrorData {
  message: string;
}

interface AuthContextType {
  signup: (user: User) => Promise<void>;
  signin: (user: User) => Promise<void>;
  user: User | null;
  isAuthenticated: boolean;
  error: ErrorData  | null;
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
  const [error, setError] = useState<ErrorData | null>(null);

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      // console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      setError(error.response?.data);
      console.log(error.response?.data)
    }
  };

  const signin = async (user: User) => {
    try {
      const res = await loginRequest(user);
      // console.log(res.data);
      setUser(res.data);
      // setIsAuthenticated(true);
    } catch (error) {
      // setError(error.response?.data);
      console.log(error)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
