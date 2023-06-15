import axios from "axios";

interface User {
  username: string;
  email: string;
  password: string;
}

const API = "http://localhost:8080/api";

export const registerRequest = (user: User) =>
  axios.post(`${API}/register`, user);

export const loginRequest = (user: User) => axios.post(`${API}/login`, user);
