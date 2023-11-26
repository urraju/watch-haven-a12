import ProductCard from "../Components/Products/ProductCard";
import useAllData from "../hooks/useAllData";
import TilteContent from "../shared/titleContent";
import img from '../assets/titleImg/headimg.webp'
import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
 

 const Products = () => {
   //  const [watch] = useAllData()
   const [search, setSearch] = useState()

   const axiosPublic = useAxiosPublic();
  const {
    data: watch = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["watcher", search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/watch?search=${search}`);

      return res.data;
    },
  });
    const handleSearch = (e) => {
      e.preventDefault()
         const val = e.target.search.value
         setSearch(val)
         console.log(val);
         refetch()
    }
    return(
       <div className="">
        <TilteContent heading={'All products'} img={img}/>
        <div className="flex items-center border-l-2 border-yellow-500  rounded-r mt-10 h-max w-max mx-auto bg-gray-200 justify-center">
         <h1></h1>
         <form onSubmit={handleSearch}  action="">
            <input placeholder="Search Tags"  className="bg-gray-200 border py-2 outline-none px-3 "   name="search" type="text" />
            <input className="bg-yellow-400 text-gray-600  uppercase rounded-r px-3 py-2" type="submit" value="Search" />
         </form>
        </div>
         <div className="max-w-screen-2xl mx-auto ">
            <div className="grid p-5 mt-20 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {watch.map(item => <ProductCard key={item._id} data={item}/>)}
            </div>
        </div>
       </div>
    )}
 export default Products;