import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/login', values)
      .then((res) => {
        console.log("Logged!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Login">
      <h1>Logowanie</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nazwa użytkownika</label>
        <input type="text" name="username" placeholder="Wpisz nazwę" onChange={handleChange} />
        <label htmlFor="password">Hasło</label>
        <input type="password" name="password" placeholder="Wpisz hasło" onChange={handleChange} />
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
}

export default Login;
