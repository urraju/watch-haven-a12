import { useEffect, useState } from "react";
import useAllData from "../../hooks/useAllData";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const FeaturesCard = ({data}) => {
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
        fetch(`http://localhost:2000/watch/update?id=${_id}`, {
          method: "PATCH",

          credentials: "include",
        }).then((res) => {
          setVoter(voter + 1);
        });
    }
    return(
        <div>
             <div className="bg-gradient-to-br border rounded-xl from-yellow-300 justify-between p-4 h-80">
                    <img className="w-44 flex-1 object-fill mx-auto" src={product_image} alt="" />
                   <div className=" ">
                   <p className="text-lg font-semibold mb-2">{product_name}</p>
                    <div className="">
                        {tags.map(tag => <button className="bg-gray-600 text-white rounded-full font-mono  mr-3 px-2 mt-1  bg-gradient-to-br  text-sm ">{tag}</button>)}
                    </div>
                   </div>
                   <button onClick={handleVote} className="bg-yellow-400 font-bold px-3 rounded mt-2">Vote-{voter}</button>
             </div>
        </div>
    )}
export default FeaturesCard;