import Navbar from "./Navbar";
import Profile from "./Profile";

const ProfilePage = () => {
    return ( 
        <div className="profilepage">
            <Navbar/>
            <div style={{margin: "3rem"}}></div>
            <Profile/>
        </div>
     );
}
 
export default ProfilePage;