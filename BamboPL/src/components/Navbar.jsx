import {Link} from 'react-router-dom';
import login from '../Registration/Login';
import account from './images/account.svg'
import addIcon from './images/add.svg'
import logo from './images/logo.png';

import '../css/navbar.css';
const Navbar = () => {
    return ( 
        <div class="navbar">
       <img src={logo} alt="logo"/>
        <div class="search-container">
          <input placeholder="Wyszukaj swoich ulubionych produktów!" type="text" class='search-bar'/>
          <button class="search-button">Szukaj</button>
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