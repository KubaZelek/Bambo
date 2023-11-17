import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import RecentlyAdded from "./components/RecentlyAdded";
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Link to="/profile">testowy link do profilu</Link>
            <Promotion/>
            <RecentlyAdded/>
        </div>
     );
}
 
export default Home;
