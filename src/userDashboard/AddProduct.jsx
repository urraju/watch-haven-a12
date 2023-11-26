import HeadingContent from "../shared/HeadingContent";
import { WithContext as ReactTags } from "react-tag-input";

const AddProduct = () => {
  return (
    <div className="w-full">
      <HeadingContent heading={"Product"} subHeading={"Add Product"} />
      <div>
        <ReactTags
          tags={['hello']}
           
        />
      </div>
      <div className="flex w-full   items-center justify-center">
        <form>
          <div className="flex  gap-5">
            <label className="font-kdam">
              Product Name <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2 py-2"
                type="text"
                placeholder="Product Name"
                name="productName"
              />
            </label>
            <label className="font-kdam">
              Product Image <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2  py-2"
                type="file"
                name="productimage"
              />
            </label>
          </div>
          <div className="flex  gap-5">
            <label className="font-kdam">
              Product Name <br />
              <textarea
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2  py-2"
                name="productdes"
                placeholder="Product Description"
                id=""
                cols="30"
                rows="2"
              ></textarea>
            </label>
            <label className="font-kdam">
              Product Image <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2  py-2"
                type="file"
                name="productimage"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
