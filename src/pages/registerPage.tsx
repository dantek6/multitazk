import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Message } from "../components/ui/message";
import { User } from "../components/types/types";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { signup, errorsAuth, isAuthenticated } = useAuth();

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
      {errorsAuth.map((error, index) => (
        <p style={{backgroundColor: "red", color: "#fff"}} key={index}>{typeof error === 'string' ? error : error.error}</p>
      ))}
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && (
          <p style={{ color: "red" }}>Nombre de usuario es requerido</p>
        )}
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p style={{ color: "red" }}>Correo electrónico es requerido</p>}
        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && (
          <p style={{ color: "red" }}>Contraseña es requerida</p>
        )}
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}

export default Register;
