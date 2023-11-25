import TilteContent from "../shared/titleContent";
import img from "../assets/titleImg/headimg.webp";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const Details = () => {
  const {user} = useAuth()
  const data = useLoaderData();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  console.log(data);
  const {
    _id,
    product_name,
    product_image,
    vote,
    tags,
    owner_email,
    date,
    status,
    description,
    external_links,
    product_id,
    featured,
  } = data;



  const handlePost = () => {
    document.getElementById("my_modal_3").showModal();
  }
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const name = form.name.value;
    const comment = form.comment.value;
  
    const reviewValue = {
      photoURL: user?.photoURL,
      rating: rating,
      name : name,
      comment: comment,
      userName: user?.displayName,
    };
    axiosPublic.post('/review', reviewValue)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId){
        console.log('user added to database');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review Successfull",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/details')
        form.reset()
      }
    })
  }
  // report part 
  const handleReport = () => {
    
  }
  return (
    <div>
      <TilteContent heading={"Product Details"} img={img} />
      <div className="bg-gray-300 p-10 flex flex-col md:flex-row justify-around items-center">
        <img className="w-[400px]" src={product_image} alt="" />
        <div className="space-y-1">
          <p className="font-kdam font-semibold">
            <span className="font-kdam font-normal">Name : </span>
            {product_name}
          </p>
          <p className="font-roboto  ">
            <span className="font-kdam font-normal">Description : </span>
            {description}
          </p>
          <p className="font-kdam ">
            <span className="font-kdam font-normal">Date : </span>
            {date}
          </p>

          <p className="font-kdam">
            Tangs :{" "}
            <span>
              {tags.map((item) => (
                <a className="mr-2 font-josefin uppercase py-1 text-sm border px-2">
                  {item}
                </a>
              ))}
            </span>
          </p>
          <button className="font-josefin text-lg text-yellow-800 ">
            <span className="font-kdam">Vote : </span>
            {vote}
          </button>
          <div className="flex gap-2">
            <button onClick={handleReport} className="bg-red-700 px-3 text-white font-roboto font-light ">Report</button>
            <button onClick={handlePost} className="bg-success px-3 text-white font-roboto font-light ">Review</button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-xl text-teal-600 border-b-2 py-2 font-roboto flex justify-center gap-3 items-center">
            Add Review <AiOutlineStar />
          </h3>
          <div className="mt-3">
            <form onSubmit={handleReview}>
              <label className="block font-josefin font-semibold" htmlFor="">
                Rating
                <input
                  className="block font-light w-full mt-1 outline-none border border-teal-300 px-3 py-1 rounded"
                  type="number"
                  name="rating"
                  placeholder="Type Rating"
                  required
                />
              </label>
              <label className="block font-josefin font-semibold" htmlFor="">
                Name
                <input
                  className="block font-light w-full uppercase mt-1 outline-none border border-teal-300 px-3 py-1 rounded"
                  type="text"
                  name="name"
                  placeholder="Type Name"
                  required
                />
              </label>
              <label className="font-josefin " htmlFor="">
                 Description
                <textarea
                  className="w-full text-lg  font-roboto mt-1 border border-teal-300 px-2 rounded outline-none"
                  name="comment"
                  placeholder="Write Description"
                  id=""
                  cols="10"
                  rows=""
                ></textarea>
              </label>
              <button
                className="flex gap-2 text-white rounded mx-auto mt-4 justify-center w-72 py-1 items-center bg-yellow-400 "
                type="submit"
              >
                 Add Review<AiOutlineStar />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Details;