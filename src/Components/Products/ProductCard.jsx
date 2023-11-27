const ProductCard = ({ data }) => {
  console.log(Object.keys(data).join(","));
  const { _id, product_name, product_image, tags, vote } = data;
  return (
    <div>
      <div className="bg-gradient-to-tr from-orange-50 to-orange-200  rounded-lg shadow-lg  flex flex-col items-center justify-center h-96">
        <div className="p-5 object-fill">
          <img
            className="w-44 object-fill  mx-auto"
            src={product_image}
            alt=""
          />
        </div>
        <div className="text-black">
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
    </div>
  );
};
export default ProductCard;
