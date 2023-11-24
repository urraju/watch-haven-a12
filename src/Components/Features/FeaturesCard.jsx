import useAllData from "../../hooks/useAllData";

const FeaturesCard = ({data}) => {
    const {_id,product_name,product_image,tags,owner_email,date,status,description,external_links,product_id,featured} = data
    return(
        <div>
             <div className="bg-gradient-to-br border rounded-xl from-yellow-300 justify-between p-4 h-64">
                    <img className="w-44 flex-1 object-fill mx-auto" src={product_image} alt="" />
                   <div className=" ">
                   <p>{product_name}</p>
                    <div className="">
                        {tags.map(tag => <button>{tag}</button>)}
                    </div>
                   </div>
             </div>
        </div>
    )}
export default FeaturesCard;