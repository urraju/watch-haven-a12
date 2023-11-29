import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { MdCreate, MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import HeadingContent from "../shared/HeadingContent";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const ManageCoupn = () => {
  const axiosSecure = useAxiosSecure();
  const { data: coupon = [], refetch } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupon");
      return res.data;
    },
  });

  // create copon 
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const couponInfo = {
      coupon_code: data.couponCode,
      expire_date: data.expireDate,
      code_description: data.codeDes,
      discount_amount: data.amount,
    };

    axiosSecure.post("/coupon", couponInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "Successfully Added",
          icon: "success",
          title: ` item has been Added`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
        reset();
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/coupon/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  }

  const handleCopun = () => {
    document.getElementById("my_modal_3").showModal()
  }

  return(
    <div className="w-full">
       <HeadingContent heading={'coupon'} subHeading={'manage coupon'}/>
       <div className="w-full p-10">
        <div className="flex justify-between bg-black mb-2 rounded bg-opacity-10 px-4 py-3">
          <h1 className="font-kdam">All Coupon : {coupon.length}</h1>
          <Link><button onClick={handleCopun} className="px-3 py-1 flex gap-1 items-center  uppercase font-mono text-sm bg-blue-500 text-white rounded  ">Create Coupon <MdCreate/> </button></Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-yellow-400  ">
              <tr className="font-kdam ">
                <th className="rounded-tl-lg">No</th>
                <th >Coupon Code</th>
                <th>Expire Date</th>
                <th>Description</th>
                <th>Discount</th>
                <th>Status</th>
                <th>Edit</th>
                <th className="rounded-tr-lg">Delete</th>
                 
              </tr>
            </thead>
            <tbody>
              {coupon.map((com, index) => (
                <tr key={com.id}>
                  <td className="text-gray-700 font-bold">{index + 1}</td>
                 <td className="uppercase font-mono font-semibold text-gray-600">{com.coupon_code}</td> 
                 <td className="uppercase font-mono font-semibold text-gray-600">{com.expire_date}</td> 
                 <td className="uppercase font-mono font-semibold text-gray-600">{com.code_description}</td> 
                 <td className="uppercase font-mono font-semibold text-gray-600">{com.discount_amount}</td> 
                 <td className="uppercase font-mono font-semibold text-green-600">Active</td> 
                 <td className="uppercase font-mono font-semibold text-blue-600 cursor-pointer"><Link to={`/Dashboard/createCoupon/${com._id}`}><FaEdit/></Link></td> 
                 <td onClick={() => handleDelete(com._id)} className="uppercase font-mono font-semibold text-red-500 text-lg cursor-pointer"><MdDelete/></td> 
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>

       {/* modal  */}

       <dialog id="my_modal_3" className="modal ">
        <div className="modal-box justify-center bg-gradient-to-tr  from-rose-300 to-rose-400 ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex w-full md:px-20 mt-10 items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <label className="font-kdam text-gray-500">
                  Coupon Code <br />
                  <input
                    className="w-full placeholder:font-roboto  backdrop-blur bg-white/30 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2 py-2"
                    type="text"
                    {...register("couponCode", { required: true })}
                  />
                </label>
                <label className="font-kdam text-gray-500">
                  Expire Date <br />
                  <input
                    className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2  py-2"
                    type="date"
                    {...register("expireDate")}
                  />
                </label>
              </div>
              <div className=" ">
                <label className="font-kdam text-gray-500 mt-2">
                  Code Description <br />
                  <input
                    className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2  py-2"
                    type="text"
                    {...register("codeDes", { required: true })}
                  />
                </label>

                <label className="font-kdam text-gray-500 mt-2">
                  Discount Amount
                  <br />
                  <input
                    className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2  py-2"
                    type="number"
                    {...register("amount")}
                  />
                </label>
              </div>

              {/* description  */}

              <div className="w-full flex items-center justify-center">
                <button
                  className=" w-full mt-10 border border-rose-200 rounded lg:w-80  bg-rose-400 uppercase px-3 py-2"
                  type="submit"
                >
                   Create Coupon 
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )}
export default ManageCoupn;