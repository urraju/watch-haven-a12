import TilteContent from "../../shared/titleContent";
import img from '../../assets/titleImg/headimg.webp'
import useAllData from "../../hooks/useAllData";
import FeaturesCard from "./FeaturesCard";
const Features = () => {
    const [watch] = useAllData()
    const featureData = watch.filter(item => item.featured === true )
    
    return(
        <div className="p-5">
            <TilteContent img={img} heading={'Features Pruducts'}/>
             <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                {featureData.slice(0,8).map(item => <FeaturesCard key={item._id} data={item}/>)}
             </div>
        </div>
    )}
export default Features;