import TilteContent from "../shared/titleContent";
import img from "../assets/titleImg/headimg.webp";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import useAuth from "../AuthContext/useAuth/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaArrowUp, FaStar, FaVoteYea } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import useQuerye from "../hooks/useQuerye";
import useAllData from "../hooks/useAllData";

const Details = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [refetch] = useAllData()
  console.log(data);
  const {
    _id,
    product_name,
    product_image,
    vote,
    tags,

    date,
    status,
    description,
    external_links,
  } = data;

  const reportValue = {
    product_id: _id,
    product_name: product_name,
  };

  const handlePost = () => {
    document.getElementById("my_modal_3").showModal();
  };
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const name = form.name.value;
    const comment = form.comment.value;

    const reviewValue = {
      product_id: _id,
      product_name: product_name,
      status: status,
      photoURL: user?.photoURL,
      rating: rating,
      name: name,
      comment: comment,
      userName: user?.displayName,
    };
    axiosPublic.post("/review", reviewValue).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        console.log("user added to database");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review Successfull",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
      }
    });
  };
  // report part
  const handleReport = () => {
    axiosSecure.post("/report", reportValue).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        console.log("user added to database");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Report Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const { data: review = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosSecure.get("/review");
      return res.data;
    },
  });

  const [voter ,setVoter] = useState(vote)
  const [votes, setVotes] = useState([]);  
  useEffect(() => {
    const arr = new Array(voter);
    arr.fill(+1);
    setVotes(arr);
  }, [voter]);
    const handleVote = () => {
        
        axiosPublic.put(`/watch/updateVote?id2=${_id}`)
        .then((res) => {
          if(res.data.modifiedCount > 0){
            setVoter(voter + 1);
            refetch()

          } 
          });
    }

  console.log(review);
  return (
    <div className=" p-2 md:p-5">
      <TilteContent heading={"Product Details"} img={img} />
      <div className=" bg-gradient-to-tl rounded  from-green-100 max-w-screen-2xl mx-auto p-10 flex flex-col md:flex-row justify-around items-center">
        <img className="w-[400px]" src={product_image} alt="" />
        <div className=" space-y-2 text-black">
          <p className="font-kdam font-semibold">
            <span className="font-kdam font-normal">Name : </span>
            {product_name}
          </p>
          <p className="font-roboto   ">
            <span className="font-kdam font-normal">Description : </span>
            {description}
          </p>
          <p className="font-kdam ">
            <span className="font-kdam font-normal">Date : </span>
            {date}
          </p>

          <p className="font-kdam">
            Tangs :{" "}
            <span className="">
              {tags.map((item) => (
                <a className="mr-2 font-sans  text-sm border px-2">
                  {item}
                </a>
              ))}
            </span>
          </p>
          
          {/* vote part  */}


          <div className="flex gap-5 mt-2 items-center">
                 
                 {user ? <button  onClick={handleVote} className="bg-white border border-yellow-400  text-black  px-2 flex items-center font-mono uppercase  rounded-lg p-1 "><FaArrowUp className="text-md font-light text-yellow-500"/></button> : 

                 <button disabled onClick={handleVote} className="bg-white border border-yellow-400 disabled:text-gray-300 disabled:border-none text-black px-2 flex items-center font-mono uppercase  rounded-lg "> vote <FaArrowUp className="text-md font-light text-yellow-500"/></button>}
                   
                   <button className="flex  items-center gap-2 border px-3 bg-yellow-300 rounded-full text-black text-"><FaVoteYea/>{vote}</button>
                  </div>





          <div className=" mb-3 ">
            <span className="font-kdam mr-2">Buy Product : </span>
            {external_links.map((link, index) => (
              <a
                className="  px-4 text-blue-500 bg-green-100 border hover:underline  rounded mr-2"
                href={link}
              >
                Visit {index + 1}
              </a>
            ))}
          </div>
          <div className="flex gap-2 ">
            <button
              onClick={handleReport}
              className="bg-red-700 px-3 flex items-center gap-2 text-white font-roboto font-light "
            >
              Report <MdReport/>
            </button>
            <button
              onClick={handlePost}
              className="bg-success px-3 flex gap-1 items-center    text-white font-roboto font-light "
            >
              Review <FaStar/>
            </button>
          </div>
        </div>
      </div>
      {/* modal review  */}
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
                Add Review
                <AiOutlineStar />
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {/* review card  */}
      <div className=" w-full lg:max-w-screen-xl mx-auto mt-20" >
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
         <div>
           {review.map((item) => (
          <div className="bg-rose-200 p-6 h-72">
              <SwiperSlide className=" ">
              <div className="border w-max p-2 rounded-xl">
              <img className="w-28 rounded-xl " src={item.photoURL} alt="" />
              </div>
              <div>
                <p className="font-kdam text-xl mt-1">{item.name}</p>
                <p className="text-sm text-gray-500">{item.comment}</p>
                <p>
                  <Rating  style={{ maxWidth: 100,  }} value={item.rating} readOnly />
                </p>
              </div>
            </SwiperSlide>
          </div>
          ))}
         </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Details;
