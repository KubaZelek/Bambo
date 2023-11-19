import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useFetch from '../ClientThings/useFetch';
import '../css/login_and_registration.css';
import '../ClientThings/useFetch.css';
import logo from '../components/images/Logo_niebieskie_mniejsze.png';

function AccountSignup() {
  const [values, setValues] = useState({
    company_name: '',
    password: '',
    email: '',
    NIP: '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/account_signup', values)
      .then((res) => {
        console.log('Registered!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { isPending } = useFetch('');

  return (
    <div className="AccountSignup">
      {isPending && (
        <div className="loading-area">
          <div className="loading-spinner"></div>
        </div>
      )}

      {!isPending && (
        <div className="login">
          <h1>
               Rejstracja kont firmowych
          </h1>

          <Link to="/home">
            <div className="minilogo">
              <img src={logo} alt="Logo" className="imgs" />
            </div>
          </Link>

          <div className="down">
            <form onSubmit={handleSubmit}>

              <label htmlFor="account_name">Nazwa firmy<span className='nessesary'>*</span></label><br />
              <input type="text" name="account_name" placeholder="Wpisz nazwę firmy" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="password">Hasło<span className='nessesary'>*</span></label><br />
              <input type="password" name="password" placeholder="Wpisz hasło do konta firmowego" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="email">E-mail<span className='nessesary'>*</span></label><br />
              <input type="text" name="email" placeholder="Wpisz e-mail firmowy" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="account_name">NIP<span className='nessesary'>*</span></label><br />
              <input type="text" name="account_name" placeholder="Wpisz NIP swojej firmy" onChange={handleChange} /><br />

              <p className='break'> </p>

              <button type="submit">Przejdź dalej</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountSignup;
