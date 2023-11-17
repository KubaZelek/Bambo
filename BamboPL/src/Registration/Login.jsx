import React, { useState } from 'react';
import axios from 'axios';
import '../css/login_and_registration.css';
import '../css/login_second.css';
import useFetch from '../ClientThings/useFetch';
import '../ClientThings/useFetch.css'
import {Link} from 'react-router-dom';
import logo from '../components/images/Logo_niebieskie_mniejsze.png';




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
      .post('http://localhost:5000/login', {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        console.log('Logged!');
        // Handle successful login, e.g., redirect to a new page
      })
      .catch((err) => {
        console.log(err);
        // Handle login error, e.g., show an error message
      });
  };

  const { isPending } = useFetch(''); // Empty string or any placeholder URL

  return (
    <div className="Login">
      {isPending && (
        <div className="loading-area">
          <div className="loading-spinner"></div>
         
        </div>
      )}

      {!isPending && (
        

        
        <div className='all-rest'>
          <div className="login">
            


            <h1><span class="underline">Logowanie</span> / <Link to="/signup"><span>Rejstracja</span></Link> </h1>

            <Link to="/home">

              <div className="minilogo">

                <img src={logo} alt={"Logo"} className='imgs'/>

              </div>

              </Link>
            
            <div className='down'>


            
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Nazwa użytkownika:</label><br />
              <input type="text" name="username" placeholder="Wpisz nazwę" onChange={handleChange} /><br /><br />

              <p className='break'> </p>

              <label htmlFor="password">Hasło:</label><br />
              <input type="password" name="password" placeholder="Wpisz hasło" onChange={handleChange} /><br />
              <button type="submit">Zaloguj</button>
            </form>

            </div>

          
          </div>
        </div>
      )}
    </div>

    // <div className="box">
    //   <div className="logowanie">
    //     <div className="overlap-group">
    //       <img className="rectangle" alt="Rectangle" src="rectangle-51.svg" />
    //       <div className="div" />
    //       <div className="rectangle-2" />
    //       <p className="logowanie-rejstracja">
    //         <span className="text-wrapper">Logowanie</span>
    //         <span className="span"> / Rejstracja</span>
    //       </p>
    //       <img className="line" alt="Line" src="line-11.svg" />
    //       <div className="text-wrapper-2">Email:</div>
    //       <div className="rectangle-3" />
    //       <div className="text-wrapper-3">Hasło:</div>
    //       <div className="rectangle-4" />
    //       <div className="text-wrapper-4">Zaloguj</div>
    //       <div className="rectangle-5" />
    //       <img className="logo-niebieskie" alt="Logo niebieskie" src="Bambo/BamboPL/src/css/Logo_niebieskie_mniejsze.png" />
    //     </div>
    //   </div>
    // </div>
    
  );
}

export default Login;
