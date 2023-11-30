
const TrendingCard = ({data}) => {
     const {_id,product_name,product_image,tags,vote,owner_email,date,status,description,external_links,product_id,featured} = data
    return(
        <div className="p-4">
              <div className="bg-gradient-to-bl relative rounded-xl border border-rose-200   h-[300px] to-rose-50 from-rose-200 ">
                <img className="w-48 mx-auto" src={product_image} alt="" />
                <div className="mt-4 absolute bottom-0 py-4 px-6 text-black">
                    <p className="font-kdam text-lg">{product_name}</p>
                    <p className="font-kdam"><span>Vote : </span>{vote}</p>
                    <p>{tags.map((ta,i) => <button className="mr-2 bg-gradient-to-br mt-2 border border-gray-200 px-1 rounded font-sans text-sm to-yellow-50 from-rose-200 " key={i}>{ta}</button>)}</p>
                </div>
              </div>
        </div>
    )}
export default TrendingCard;