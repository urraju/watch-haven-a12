import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TrendingCard = ({data}) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      });
     const {_id,product_name,product_image,tags,vote,} = data
    return(
        <div data-aos="zoom-in-up" className="p-4">
              <div className="bg-gradient-to-bl relative rounded-xl border border-rose-100   h-[300px] to- from-rose-100 ">
                <img className="w-48 mx-auto" src={product_image} alt="" />
                <div className="mt-4 absolute bottom-0 py-4 px-6 text-black">
                    <p className="font-kdam text-lg text-gray-600">{product_name}</p>
                    <p className="font-kdam text-gray-600"><span>Vote : </span>{vote}</p>
                    <p>{tags.map((ta,i) => <button className="mr-2 bg-gradient-to-br mt-2 border border-gray-200 px-1 text-gray-600 rounded font-sans text-sm to-yellow-50 from-rose-100 " key={i}>{ta}</button>)}</p>
                </div>
              </div>
        </div>
    )}
export default TrendingCard;