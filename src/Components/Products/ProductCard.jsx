 

const ProductCard = ({data}) => {
 console.log(Object.keys(data).join(','));
 const {_id,product_name,product_image} = data
    return(
        <div>
             <div className="bg-gradient-to-tr from-orange-100  rounded-lg shadow-lg  flex flex-col items-center justify-center h-80">
                <div className="p-5 object-fill">
                <img className="w-44 object-fill  mx-auto" src={product_image} alt="" />
                </div>
                <p className="text-center text-lg font-mono uppercase font-semibold">{product_name}</p>
             </div>
        </div>
    )}
export default ProductCard;