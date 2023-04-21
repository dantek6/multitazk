import React from 'react';
//import './Login.scss';

function Login() {
  return (
    <div className="login__container">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
}

export default Login;