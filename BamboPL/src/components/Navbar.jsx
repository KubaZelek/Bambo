import {Link} from "wouter";
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
          <Link className="link" href="/">
            <a className="hp">
              <img className="image" src={account} alt="account" />
              <span> Zaloguj się</span>
            </a>
          </Link>
          <Link className="link" href="/">
            <a className="do">
              <img className="image1" src={addIcon} alt="addIcon" />
              <span> Dodaj ogłoszenie</span>
            </a>
          </Link>
        </div>
      </div>
      
     );
}
 
export default Navbar;