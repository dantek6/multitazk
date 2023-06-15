import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
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
  } = useForm();

  const { signin } = useAuth();

  const onSubmit = handleSubmit((data) => {
    const user: UserLog = {
        username: '',
        email: data.email,
        password: data.password
      };
      signin(user);
  });

  return (
    <div className="login__container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p style={{ color: "red" }}>email is required</p>}
        <label htmlFor="password">Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && (
          <p style={{ color: "red" }}>password is required</p>
        )}
        <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
}

export default Login;
