import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProductCard = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  
 
  const { _id, product_name, product_image, tags, vote } = data;
  return (
    <div data-aos="zoom-in-down" >
      <Link to={`/details/${_id}`}>
        <div className="bg-gradient-to-tr relative from-orange-50 to-orange-200  rounded-lg shadow-lg  flex flex-col items-center  h-96">
          <div className="p-5 object-fill ">
            <img
              className="w-44 object-fill  mx-auto"
              src={product_image}
              alt=""
            />
          </div>
          <div className="text-black absolute bottom-0 py-10">
            <p className="text-center text-lg font-mono uppercase font-semibold">
              {product_name}
            </p>
            <p className="font-kdam text-center mt-1">
              <span>Vote : </span>
              {vote}
            </p>
            <p>
              {tags.map((ta, i) => (
                <button
                  className="mr-2 bg-gradient-to-tl mt-2 border border-orange-200 px-1 rounded font-sans text-sm from-orange-100  "
                  key={i}
                >
                  {ta}
                </button>
              ))}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
