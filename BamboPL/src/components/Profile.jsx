import '../css/profile.css';
const Profile = () => {
    return ( 
        <div className="profile">
            <main>
            <aside>
                <img src="zaba.png" alt="userImage" />
                <p>Nazwa użytkownika</p>
                <p>E-mail użytkownika</p>
                <p>Od kiedy konto</p>
                <a href="">Zaktualizuj swoje dane</a>
            </aside>
            <article>
                <span className="choice">
                <h2>Aktywne ogłoszenia</h2>
                <h2>Sprzedane</h2>
                </span>
            {/* no i tutaj lista ogłoszeń w zależności od tego czy są aktywne czy nie - trzeba to ogarnac potem */}
            </article>
            </main>
        </div>
     );
}
 
export default Profile;
<div className="profile"></div>