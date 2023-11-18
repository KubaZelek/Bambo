import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import RecentlyAdded from "./components/RecentlyAdded";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Link to="/profile">testowy link do profilu</Link>
            <Promotion/>
            <RecentlyAdded/>
            {/* <Footer/> */}

        </div>
     );
}
 
export default Home;
