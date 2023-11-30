import { useEffect, useState } from "react";
import useAllData from "../../hooks/useAllData";
import TrendingCard from "./TrendingCard";
import TilteContent from "../../shared/titleContent";
import img from '../../assets/titleImg/headimg.webp'
import { Link } from "react-router-dom";
import { BsArrow90DegRight } from "react-icons/bs";

const TrendingProduct = () => {
    const [watch] = useAllData()
    const [data, setData ] = useState([])
    const [sort, setSort] = useState(data)
    useEffect(() => { 
        const filterData = watch.filter(item => item.vote >= 2 )
        setData(filterData)
    },[watch])

    const handleSort = () => {
        const sorting = data.sort((a,b) => b.vote - a.vote)
        setSort(sorting)
         
    }
 
     
    return(
        <div className=" p-1 mt-14 md:p-5">
            <TilteContent img={img} heading={'Trending Product'}/>
            <div className=" mt-8 bg-yellow-400 px-4 w-max mx-auto text-gray-700 py-1 rounded font-montserrat flex items-center justify-center">
                <button onClick={handleSort}>Sort vote</button>
            </div>
             <div className="max-w-screen-2xl mx-auto grid grid-cols-1 mt-10 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {data.map(trend => <TrendingCard key={trend._id} data={trend}/>) }
             </div>
             <div className="flex justify-center items-center mx-auto mt-8">
                <Link to='/products'><button className=" px-4 py-1 bg-gradient-to-bl from-yellow-50 to-rose-200 rounded flex items-center gap-1">See All Product<BsArrow90DegRight/></button></Link>
             </div>
        </div>
    )}
export default TrendingProduct;