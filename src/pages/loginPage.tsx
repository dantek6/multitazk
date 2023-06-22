import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Message } from "../components/ui";
//import './Login.scss';

type UserLog = {
    username: string;
    email: string;
    password: string;
  }

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLog>();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    const user: UserLog = {
        username: '',
        email: data.email,
        password: data.password
      };
      signin(user);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="login__container">
      {loginErrors.map((error:Error, i:number) => (
          <Message message={error} key={i} />
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
