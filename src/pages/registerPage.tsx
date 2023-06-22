import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type User ={
  username: string;
  email: string;
  password: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { signup, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();
  
  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });
  
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="login__container ">
      <h1>Register</h1>
      {
        error && <p style={{color: "red"}}>{error.message}</p>
      }
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && <p style={{color: "red"}}>Username is required</p>}
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p style={{color: "red"}}>email is required</p>}
        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p style={{color: "red"}}>password is required</p>}
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}

export default Register;
