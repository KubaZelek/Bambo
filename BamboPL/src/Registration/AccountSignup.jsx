import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useFetch from '../ClientThings/useFetch';
import '../css/login_and_registration.css';
import '../ClientThings/useFetch.css';
import logo from '../components/images/Logo_niebieskie_mniejsze.png';

function AccountSignup() {
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
      [name]: name === 'age' ? parseInt(value, 10) : value,
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
            <Link to="/login">
              <span>Logowanie</span>
            </Link>{' '}
            <span>/ </span>
            <Link to="/signup">
              <span className="underline">Rejestracja</span>
            </Link>{' '}
          </h1>

          <Link to="/home">
            <div className="minilogo">
              <img src={logo} alt="Logo" className="imgs" />
            </div>
          </Link>

          <div className="down">
            <form onSubmit={handleSubmit}>
              {/* ... (Pozostała część formularza) ... */}
              <button type="submit">Przejdź dalej</button>
              <Link to="/AnotherPage.jsx" className='company_acc'>
                <span>Chcesz założyć inne konto?</span>
              </Link>{' '}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountSignup;
