import ProductCard from "../Components/Products/ProductCard";
import useAllData from "../hooks/useAllData";
import TilteContent from "../shared/titleContent";
import img from '../assets/titleImg/headimg.webp'
 

 const Products = () => {
    const [watch] = useAllData()
    return(
       <div className="">
        <TilteContent heading={'All products'} img={img}/>
         <div className="max-w-screen-2xl mx-auto ">
            <div className="grid p-5 mt-20 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {watch.map(item => <ProductCard key={item._id} data={item}/>)}
            </div>
        </div>
       </div>
    )}
 export default Products;