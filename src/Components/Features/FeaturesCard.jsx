import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaArrowRight, FaVoteYea, } from "react-icons/fa";
import { HiOutlinePlusSm, } from "react-icons/hi";
import useAuth from "../../AuthContext/useAuth/useAuth";

const FeaturesCard = ({data,refetch}) => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {_id,product_name,product_image,vote,tags } = data
    const [voter ,setVoter] = useState(vote)
    const [votes, setVotes] = useState([]);
    
  useEffect(() => {
    const arr = new Array(voter);
    arr.fill(+1);
    setVotes(arr);
  }, [voter]);
    const handleVote = () => {
        
        axiosPublic.patch(`/watch/update?id=${_id}`)
        .then((res) => {
          if(res.data.modifiedCount > 0){
            setVoter(voter + 1);
            refetch()

          } 
          });
    }
    return(   
        <div>
             <div className="bg-gradient-to-bl border rounded-xl from-gray-200  to-yellow-50 justify-between p-4 h-[370px] ">
                    <img className="w-44 flex-1 object-fill mx-auto" src={product_image} alt="" />
                   <div className=" mt-5 ">
                   <Link to={`/details/${_id}`} className="text-lg   flex font-kdam items-center gap-2 text-black mb-2">{product_name}<FaArrowRight className="text-sm text-yellow-400"/></Link>
                    <div className="">
                        {tags.map(tag => <button className="  rounded-full font-mono  mr-3 px-2 mt-1 text-black bg-gradient-to-br  text-sm ">{tag}</button>)}
                    </div>
                   </div>
                  <div className="flex gap-5 mt-2 items-center">
                 
                 {user ? <button  onClick={handleVote} className="bg-white border border-yellow-400  text-black  px-2 flex items-center font-mono uppercase  rounded-lg "> vote <HiOutlinePlusSm className="text-md font-light text-yellow-500"/></button> : 

                 <button disabled onClick={handleVote} className="bg-white border border-yellow-400 disabled:text-gray-300 disabled:border-none text-black px-2 flex items-center font-mono uppercase  rounded-lg "> vote <HiOutlinePlusSm className="text-md font-light text-yellow-500"/></button>}
                   
                   <button className="flex  items-center gap-2 border px-3 bg-yellow-300 rounded-full text-black text-"><FaVoteYea/>{vote}</button>
                  </div>
             </div>
        </div>
    )}
export default FeaturesCard;