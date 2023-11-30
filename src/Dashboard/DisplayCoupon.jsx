import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TilteContent from "../shared/titleContent";
import img from "../assets/titleImg/headimg.webp";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const DisplayCoupon = () => {
  const axiosSecure = useAxiosSecure();
  const { data: coupon = [] } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupon");
      return res.data;
    },
  });
  return (
    <div className=" mt-10 mb-20 max-w-screen-2xl mx-auto">
      <TilteContent heading={"use coupon"} img={img} />
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
        <div className="p-2 grid grid-cols-1  md:p-5xcx ">
          {coupon.map((item) => (
            <SwiperSlide className="relative mb-10 mt-16">
              <Link to='/dashboard/subscription'>
                <div className=" bg-gradient-to-br border border-sky-300 rounded-2xl to-sky-300 from-sky-100 h-40 p-5">
                  <p className="text-lg uppercase text-center bg-rose-400 w-max mx-auto px-5 rounded text-white font-mono">
                    {item.coupon_code}
                  </p>
                  <div className="mt-2 border-l-2 border-rose-300 px-3 rounded">
                    <p className="text-gray-500 ">{item.expire_date}</p>
                    <p className="capitalize">{item.code_description}</p>
                    <p className="">
                      <span>Dicount Amount : </span>
                      {item.discount_amount} TK
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default DisplayCoupon;
