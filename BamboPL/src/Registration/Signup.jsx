import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    age: null,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: name === 'age' ? parseInt(value, 10) : value, // Parse age as an integer
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/signup', values)
      .then((res) => {
        console.log("Registered!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Signup">
      <h1>Rejestracja</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nazwa użytkownika</label>
        <input type="text" name="username" placeholder="Wpisz nazwę" onChange={handleChange} />
        <label htmlFor="password">Hasło</label>
        <input type="password" name="password" placeholder="Wpisz hasło" onChange={handleChange} />
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" placeholder="Wpisz e-mail" onChange={handleChange} />
        <label htmlFor="age">Wiek użytkownika</label>
        <input type="number" name="age" min="13" max="100" step="1" onChange={handleChange}/>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
}

export default Signup;
