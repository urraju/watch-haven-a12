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
    queryKey: ["watch"],
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
    }
    return(
       <div className="">
        <TilteContent heading={'All products'} img={img}/>
        <div>
         <form onSubmit={handleSearch}  action="">
            <input placeholder="search"  className="bg-gray-200 border border-red-500 mx-auto px-3 flex mt-20"   name="search" type="text" />
            <button type="submit">search</button>
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