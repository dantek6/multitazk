import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Message } from "../components/ui/message";
import { User } from "../components/types/types";

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values: User) => {
    await signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="login__container ">
      <h1>Register</h1>
      {registerErrors.map((error, i) => (
        <Message message={error} key={i} />
      ))}
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && (
          <p style={{ color: "red" }}>Username is required</p>
        )}
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p style={{ color: "red" }}>email is required</p>}
        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && (
          <p style={{ color: "red" }}>password is required</p>
        )}
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}

export default Register;
