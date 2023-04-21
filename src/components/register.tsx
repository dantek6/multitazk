import React from 'react';
//import './Register.scss';

function Register() {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}

export default Register;