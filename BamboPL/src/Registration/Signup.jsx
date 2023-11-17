
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useFetch from '../ClientThings/useFetch'; // Import the useFetch hook
import '../css/login_and_registration.css';
import '../ClientThings/useFetch.css';
import logo from '../components/images/Logo_niebieskie_mniejsze.png';

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
        console.log('Registered!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { isPending } = useFetch(''); // Empty string or any placeholder URL

  return (
    <div className="Signup">
      {isPending && (
        <div className="loading-area">
          <div className="loading-spinner"></div>
        </div>
      )}

      {!isPending && (
        <div className='login'>
          <h1>
            <Link to="/login">
              <span>Logowanie</span>
            </Link>{' '}
            <span>/ </span>
            <Link to="/signup">
              <span className="underline">Rejstracja</span>
            </Link>{' '}
          </h1>
          <Link to="/home">

            <div className="minilogo">

              <img src={logo} alt={"Logo"} className='imgs'/>

            </div>

          </Link>
          
          <form onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nazwa użytkownika</label><br />
        <input type="text" name="username" placeholder="Wpisz nazwę" onChange={handleChange} /><br />
        <label htmlFor="password">Hasło</label><br />
        <input type="password" name="password" placeholder="Wpisz hasło" onChange={handleChange} /><br />
        <label htmlFor="email">E-mail</label><br />
        <input type="text" name="email" placeholder="Wpisz e-mail" onChange={handleChange} /><br />
        <label htmlFor="age">Wiek użytkownika</label><br />
        <input type="number" placeholder="18" name="age" min="13" max="100" step="1" onChange={handleChange}/><br />
        <button type="submit">Zarejestruj</button>
      </form>
            <button type="submit">Zarejestruj</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Signup;