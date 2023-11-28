import ProductCard from "../Components/Products/ProductCard";
import useAllData from "../hooks/useAllData";
import TilteContent from "../shared/titleContent";
import img from '../assets/titleImg/headimg.webp'
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
 

 const Products = () => {
    const [watch] = useAllData()
    const [count, setcount] = useState(null);
    const [perPage, setPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(0);
   const [search, setSearch] = useState('')
   const [data , setData] = useState(watch)
   const axiosPublic = useAxiosPublic();

   
  const {
    data: countWatch = [],
    refetch : refether
     
  } = useQuery({
    queryKey: ["countWatch", count],
    queryFn: async () => {
      const res = await axiosPublic.get(`/watchCount`);
      setcount(res.data.count)
      return res.data;
    },
  });
  console.log(countWatch);
  
  const numberOfPage = (Math.ceil(count / perPage))
  const pages = [...Array(numberOfPage).keys()];

  const handlePage = (e) => {
    const valu = parseInt(e.target.value)
    console.log(valu);
    setPerPage(valu)
    setCurrentPage(0)
    refether()
  }

  const {
    data: watcher = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["watcher", search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/watch?search=${search}&page=${currentPage}&size=${perPage}`);
      setData(res.data)
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
            <input className="bg-yellow-400 cursor-pointer text-gray-600  uppercase rounded-r px-3 py-2" type="submit" value="Search" />
         </form>
        </div>
         <div className="max-w-screen-2xl mx-auto ">
            <div className="grid p-5 mt-20 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {data.map(item => <ProductCard key={item._id} data={item}/>)}
            </div>
        </div>
        <div className="flex items-center gap-2 mt-10 justify-center">
        {pages.map((page) => (
          <button onClick={() => setCurrentPage(page)} className={currentPage === page ? 'h-8 w-8 text-white bg-orange-500 border border-orange-500 rounded-full' : 'h-8 w-8  border-r border-info rounded-full'}>{page}</button>
        ))}
        <select onChange={handlePage} value={perPage} className="h-7 w-14 bg-orange-500  text-white px-2  border-l rounded-full  border-orange-500"  name="" id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
       </div>
    )}
 export default Products;