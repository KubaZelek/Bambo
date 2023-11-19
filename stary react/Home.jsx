import Navbar from "./components/Navbar";
import OffersHomePage from "./components/OffersHomePage";
import Promotion from "./components/Promotion";
import RecentlyAdded from "./components/RecentlyAdded";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';
import useFetch from '../src/ClientThings/useFetch';

const Home = () => {
    const { isPending } = useFetch('');
    return ( 
        <div className="home">
            {isPending && (
        <div className="loading-area">
          <div className="loading-spinner"></div>
         
        </div>
      )}

      {!isPending && (
        <div className="rest">
            <Navbar/>
            <Promotion/>
            <RecentlyAdded/>
            <OffersHomePage/>
            <Footer/>

        </div>
      )}
      </div>
     );
}
 
export default Home;
