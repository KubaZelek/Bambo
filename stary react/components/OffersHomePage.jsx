import '../css/offer.css';
import image from '../components/images/bluza-meska.jpg';
import React, {useState, useEffect} from 'react';

const OffersHomePage = () => {
  const [auctions, setAuctions] = useState([]);
  
    useEffect(() => {
      const fetchAuctions = async () => {
        try {
          const response = await fetch('http://localhost:5000/home'); // Zastąp '/api/auctions' adresem URL Twojego API
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setAuctions(data);
        } catch (error) {
          console.error('Error fetching auctions:', error);
        }
      };
  
      fetchAuctions();
    }, []); // Pusta tablica oznacza, że useEffect wywoła się tylko raz po zamontowaniu komponentu
  
  return (
    <div className="offers-home-page">
      <a href="#" className="offer">
        <img className="ad-image" src={image} alt="przykladowe zdjecie oferty" />
        <div className="ad-details">
          <p className="offer-name">Bluza 2115 podpisana przez bediego</p>
          <p className="price">12zł</p>
        </div>
      </a>
      <a href="#" className="offer">
        <img className="ad-image" src={image} alt="przykladowe zdjecie oferty" />
        <div className="ad-details">
          <p className="offer-name">Bluza 2115 podpisana przez bediego</p>
          <p className="price">12zł</p>
        </div>
      </a>
      <a href="#" className="offer">
        <img className="ad-image" src={image} alt="przykladowe zdjecie oferty" />
        <div className="ad-details">
          <p className="offer-name">Bluza 2115 podpisana przez bediego i bialasa na jkoncercie w jalcie</p>
          <p className="price">12zł</p>
        </div>
      </a>
      <a href="#" className="offer">
        <img className="ad-image" src={image} alt="przykladowe zdjecie oferty" />
        <div className="ad-details">
          <p className="offer-name">Bluza 2115 podpisana przez bediego</p>
          <p className="price">12zł</p>
        </div>
      </a>
      <a href="#" className="offer">
        <img className="ad-image" src={image} alt="przykladowe zdjecie oferty" />
        <div className="ad-details">
          <p className="offer-name">Bluza 2115 podpisana przez bediego</p>
          <p className="price">12zł</p>
        </div>
      </a>
      <a href="#" className="offer">
        <img className="ad-image" src={image} alt="przykladowe zdjecie oferty" />
        <div className="ad-details">
          <p className="offer-name">Bluza 2115 podpisana przez bediego</p>
          <p className="price">12zł</p>
        </div>
      </a>
    </div>
  );
};

export default OffersHomePage;
