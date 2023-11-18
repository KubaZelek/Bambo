import '../css/profile.css';
import Navbar from './Navbar';
import zaba from './images/zaba.jpg'
const Profile = () => {
    return ( 
        
        <div className="profile">
            <div className="aside">
                <img className='profilepicture' src={zaba} alt="userImage" />
                <p>Nazwa użytkownika</p>
                <p>E-mail użytkownika</p>
                <p>Od kiedy konto</p>
                <a href="">Zaktualizuj swoje dane</a>
                </div>
                <main>
            <div className="article">
                
                <h2>Aktywne ogłoszenia</h2>
            
               
            {/* no i tutaj lista ogłoszeń w zależności od tego czy są aktywne czy nie - trzeba to ogarnac potem */}
            <h2>Sprzedane</h2>
            </div>
            </main>
    
        </div>
     );
}
 
export default Profile;
