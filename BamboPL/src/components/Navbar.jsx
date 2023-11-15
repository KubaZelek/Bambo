import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import login from '../Registration/Login';
import account from './images/account.svg'
import addIcon from './images/add.svg'
import logo from './images/logo.png';
import axios from 'axios';

import '../css/navbar.css';
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    axios.get(`http://localhost:3000/search?searchTerm=${searchTerm}`)
      .then((response) => {
        console.log('Search results:', response.data);
        // Handle the received search results in your frontend
      })
      .catch((error) => {
        console.error('Error searching:', error);
      });
  };

    return ( 
        <div class="navbar">
       <img src={logo} alt="logo"/>
        <div class="search-container">
        <input placeholder="Wyszukaj swoich ulubionych produktów!" type="text" className="search-bar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className="search-button" onClick={handleSearch}>Szukaj</button>
        </div>
        <div className="links">
        <Link className="hp" to="/login">
      <img className="image" src={account} alt="account" />

        <span className='s'>Zaloguj się</span></Link>
        <Link className="do" to="/create_auction" >
        <img className="image1" src={addIcon} alt="addIcon" />
          <span className='s2'>Dodaj ogłoszenie</span></Link>
      </div>

    </div>
  );
};

export default Navbar;