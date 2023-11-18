import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useFetch from '../ClientThings/useFetch';
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
    <div className="Signup">
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
              <span className="underline">Rejstracja</span>
            </Link>{' '}
          </h1>

          <Link to="/home">
            <div className="minilogo">
              <img src={logo} alt="Logo" className="imgs" />
            </div>
          </Link>

          <div className="down">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Nazwa użytkownika<span className='nessesary'>*</span></label><br />
              <input type="text" name="username" placeholder="Wpisz nazwę" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="password">Hasło<span className='nessesary'>*</span></label><br />
              <input type="password" name="password" placeholder="Wpisz hasło" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="email">E-mail<span className='nessesary'>*</span></label><br />
              <input type="text" name="email" placeholder="Wpisz e-mail" onChange={handleChange} /><br />

              <p className='break'> </p>

              <label htmlFor="age">Wiek użytkownika<span className='nessesary'>*</span></label><br />
              <input type="number" placeholder="18" name="age" min="13" max="100" step="1" onChange={handleChange} /><br />

              <p className='break'> </p>

              {/* <table>
                <tr>
                  <td colSpan={4}><label htmlFor="company">Konto Firmowe</label></td>
                </tr>
                <tr>
                  <td><span className='YesNo'>Tak</span></td>
                  <td><input type="radio" name="company" id="company" onChange={handleChange} value={"Tak"}/></td>
                  <td><span className='YesNo'>Nie</span></td>
                  <td><input type="radio" name="company" id="company" onChange={handleChange} value={"Nie"}/></td>
                </tr>
                
              </table> */}
              
             
              

              <button type="submit">Przejdź dalej</button>
              <Link to="/singup2" className='company_acc'>Chesz założyć konto firmowe?</Link>{' '}

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
