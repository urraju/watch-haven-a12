import Banner from "../Components/Banner/Banner";
import Features from "../Components/Features/Features";
import TrendingProduct from "../Components/TrendingProduct/TrendingProduct";
import DisplayCoupon from "../Dashboard/DisplayCoupon";
import HelmetUse from "../shared/HelmetUse";


const Home = () => {
    return(
        <div>
            <HelmetUse helmet={'Home'}/>
             <Banner/>
             <Features/>
             <TrendingProduct/>
             <DisplayCoupon/>
        </div>
    )}
export default Home;