import '../css/offer.css';
import image from '../components/images/bluza-meska.jpg';

const OffersHomePage = () => {
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
