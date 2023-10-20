import axios from "./axios";

interface User {
  username: string;
  email: string;
  password: string;
}

export const registerRequest = (user: User) => axios.post(`auth/register`, user);

export const loginRequest = (user: User) => axios.post(`auth/login`, user);

export const verifyTokenRequest = (token: string) => axios.get(`auth/verifyToken`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

