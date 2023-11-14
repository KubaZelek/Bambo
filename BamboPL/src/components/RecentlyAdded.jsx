import Text from "./Text";
import Auction from '../Auctions/Auction';

const RecentlyAdded = () => {
    return ( 
        <div className="ra">
            <Text text="Świeże bułeczki" />
            <Auction />
        </div>
     );
}
 
export default RecentlyAdded;