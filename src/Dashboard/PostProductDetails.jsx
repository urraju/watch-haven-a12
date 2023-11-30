import { useLoaderData } from "react-router-dom";
import HeadingContent from "../shared/HeadingContent";

const PostProductDetails = () => {
    const data = useLoaderData()
    const  {_id,product_name,product_image,tags,external_links,vote,description,owner_email,owner_name,owner_img,status} = data
    return(
        <div className="w-full p-2 lg:px-10">
            <HeadingContent heading={'Details'} subHeading={'Post Product Details'}/>
             <div className="bg-black px-8 flex justify-between flex-col lg:flex-row py-5 rounded-lg border-l-4 border-orange-600">
                <img className=" w-full lg:w-80" src={product_image} alt="" />
                <div className="text-white  font-sans">
                    <p className="text-gray-400"><span className="text-teal-500 font-semibold">Name : </span>{product_name}</p>
                    <p className="text-gray-400"><span className="text-teal-500 font-semibold">Description : </span>{description}</p>
                    <p className="text-gray-400"><span className="text-teal-500 font-semibold">Vote : </span>{vote}</p>
                     <p className="flex gap-2 text-blue-700"><span className="text-blue-500 font-semibold">Tags : </span>{tags.map(tag => <li>{tag}</li>)}</p>
                    <p className="flex gap-3  text-blue-600"> <span className="  text-blue-500 font-semibold">Link : </span>{external_links.map((link,I) => <a className="underline" href={link}>Link{I+1}</a>)}</p>
                    <div className="mt-3 mb-3">
                     <img className="w-24  border p-2 border-violet-500 rounded-lg border-opacity-80" src={owner_img} alt="" />
                    <p className="text-gray-300"><span className="text-cyan-500 font-semibold">Owner Name : </span>{owner_name}</p>
                    <p className="text-gray-300"><span className="text-cyan-500 font-semibold">Owner Email : </span>{owner_email}</p>
                    </div>
                    <p className="text-green-500"><span className="text-orange-500">Status : </span>{status}</p>
                </div>
             </div>
        </div>
    )}
export default PostProductDetails;