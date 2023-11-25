import { useEffect, useState } from "react";
import useAllData from "../../hooks/useAllData";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const FeaturesCard = ({data,refetch}) => {
    const axiosPublic = useAxiosPublic()
    const {_id,product_name,product_image,vote,tags,owner_email,date,status,description,external_links,product_id,featured} = data
    const [voter ,setVoter] = useState(vote)
    const [votes, setVotes] = useState([]);
    
  useEffect(() => {
    const arr = new Array(voter);
    arr.fill(+1);
    setVotes(arr);
  }, [voter]);
    const handleVote = () => {
        // fetch(`http://localhost:2000/watch/update?id=${_id}`, {
        //   method: "PATCH",

        //   credentials: "include",
        // }).then((res) => {
        //   setVoter(voter + 1);
        // });
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
             <div className="bg-gradient-to-bl border rounded-xl from-info  to-yellow-50 justify-between p-4 h-80">
                    <img className="w-44 flex-1 object-fill mx-auto" src={product_image} alt="" />
                   <div className=" ">
                   <Link to={`/details/${_id}`} className="text-lg font-semibold flex items-center gap-2 mb-2">{product_name}<FaArrowRight className="text-sm text-yellow-400"/></Link>
                    <div className="">
                        {tags.map(tag => <button className="  rounded-full font-mono  mr-3 px-2 mt-1  bg-gradient-to-br  text-sm ">{tag}</button>)}
                    </div>
                   </div>
                   <button onClick={handleVote} className="bg-yellow-100 border px-3 flex items-center gap-1 rounded mt-2">Vote <FaPlus className="text-sm font-light text-yellow-500"/></button>
             </div>
        </div>
    )}
export default FeaturesCard;