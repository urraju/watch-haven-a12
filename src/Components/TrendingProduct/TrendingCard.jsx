
const TrendingCard = ({data}) => {
     const {_id,product_name,product_image,tags,vote,owner_email,date,status,description,external_links,product_id,featured} = data
    return(
        <div>
              <div className="bg-gradient-to-bl rounded-xl border border-yellow-400 flex flex-col items-center justify-center h-80 to-yellow-50 from-rose-200 ">
                <img className="w-48 mx-auto" src={product_image} alt="" />
                <div className="mt-4">
                    <p className="font-kdam text-lg">{product_name}</p>
                    <p className="font-kdam"><span>Vote : </span>{vote}</p>
                </div>
              </div>
        </div>
    )}
export default TrendingCard;