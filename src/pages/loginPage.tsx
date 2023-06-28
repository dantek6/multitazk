import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { Message } from "../components/ui/message";
import { User } from "../components/types/types";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const { signin, errorsAuth, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    const user: User = {
      username: "",
      email: data.email,
      password: data.password,
    };
    signin(user);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="login__container">
      {errorsAuth.map((error, index) => (
        <p style={{backgroundColor: "red"}} key={index}>{typeof error === 'string' ? error : error.error}</p>
      ))}
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />

        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />

        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
}

export default Login;
