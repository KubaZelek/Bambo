import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import RecentlyAdded from "./components/RecentlyAdded";

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Promotion/>
            <RecentlyAdded/>
        </div>
     );
}
 
export default Home;
