import { useState } from "react";
import HeadingContent from "../shared/HeadingContent";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMG_HOSTING;
const imagebb_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProduct = () => {
  const dataFile = useLoaderData();
  const { _id, product_name, product_image, description, external_links, tags } =
    dataFile;
  const axiosPublic = useAxiosPublic();
  const [tagsArray, setTagsArray] = useState([]);
  const [linker, setLinker] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const arryLink = data.link.split(" ");
    setLinker(arryLink);
    const tagsArray = data.tags.split(" ");
    setTagsArray(tagsArray);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imagebb_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const updateInfo = {
        product_name: data.productName,
        product_image: res.data.data.display_url,
        tags: tagsArray,
        external_links: linker,
        description: data.productDes,
      };
      const product = await axiosSecure.put(
        `/postProduct/updateProduct/${_id}`,
        updateInfo
      );
      console.log(product.data);
      if (product.data.modifiedCount) {
        Swal.fire({
          position: "Successfully Added",
          icon: "success",
          title: ` item has been Added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/dashboard/myProducts");
      reset();
    }
  };

  return (
    <div className="w-full">
      <HeadingContent heading={"Product"} subHeading={"Update Product"} />

      <div className="flex w-full md:px-20 mt-10  items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex  gap-5">
            <label className="font-mono text-lg  uppercase text-gray-700">
              Product Name <br />
              <input
                className="w-full placeholder:font-roboto   border font-roboto outline-none border-gray-300 lg:w-80 rounded px-3 mt-2 py-2"
                type="text"
                defaultValue={product_name}
                {...register("productName", { required: true })}
              />
            </label>
            <label className="font-mono text-lg  uppercase text-gray-700">
              Product Image <br />
              <input
                className="w-full placeholder:font-roboto  border-gray-300  border font-roboto outline-none  lg:w-80 rounded px-3 mt-2  py-2"
                type="file"
                {...register("image", {required : true})}
              />
            </label>
          </div>
          <div className=" md:flex  gap-5">
            <label className="font-mono text-lg  uppercase text-gray-700 mt-2">
              tags <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-gray-300 lg:w-80 rounded px-3 mt-2  py-2"
                type="text"
                defaultValue={tags}
                {...register("tags", { required: true })}
              />
            </label>

            <label className="font-mono text-lg  uppercase text-gray-700 mt-2">
              Extranal Link
              <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-gray-300 lg:w-80 rounded px-3 mt-2  py-2"
                type="url"
                defaultValue={external_links}
                {...register("link", {required : true})}
              />
            </label>
          </div>

          {/* description  */}
          <div className="w-full md:flex items-center justify-center gap-5">
            <label className="font-mono text-lg  uppercase text-gray-700 mt-2">
              Product Description
              <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-gray-300 lg:w-80 rounded px-3 mt-2  py-2"
                type="text"
                defaultValue={description}
                {...register("productDes", {required : true})}
              />
            </label>

            <button
              className=" w-full mt-10 border border-green-200 text-white rounded lg:w-80  bg-green-400 uppercase px-3 py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateProduct;
