import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import HeadingContent from "../shared/HeadingContent";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const CreateCoupon = () => {
  const couponData = useLoaderData();
  const navigate = useNavigate()
    console.log(couponData);
  const {_id, coupon_code, expire_date, code_description, discount_amount } =
    couponData;
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const editInfo = {
      coupon_code: data.couponCode,
      expire_date: data.expireDate,
      code_description: data.codeDes,
      discount_amount: data.amount,
    };

    axiosSecure.patch(`/coupon/${_id}`, editInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "Successfully Added",
          icon: "success",
          title: `${coupon_code} has been Added`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate('/dashboard/manageCoupon')
      }
    });
  };

  return (
    <div className="w-full">
      <HeadingContent heading={"edit"} subHeading={"edit Coupon"} />
      {/* modal  */}

      <div className="flex w-full md:px-20 mt-10 items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex  gap-5">
            <label className="font-kdam text-gray-500">
              Coupon Code <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-gray-300  lg:w-80 rounded px-3 mt-2 py-2"
                type="text"
                defaultValue={coupon_code}
                {...register("couponCode", { required: true })}
              />
            </label>
            <label className="font-kdam text-gray-500">
              Expire Date <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-gray-300  lg:w-80 rounded px-3 mt-2  py-2"
                type="date"
                defaultValue={expire_date}
                {...register("expireDate")}
              />
            </label>
          </div>
          <div className=" md:flex  gap-5">
            <label className="font-kdam text-gray-500 mt-2">
              Code Description <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-gray-300  lg:w-80 rounded px-3 mt-2  py-2"
                type="text"
                defaultValue={code_description}
                {...register("codeDes", { required: true })}
              />
            </label>

            <label className="font-kdam text-gray-500 mt-2">
              Discount Amount
              <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-gray-300 lg:w-80 rounded px-3 mt-2  py-2"
                type="number"
                defaultValue={discount_amount}
                {...register("amount")}
              />
            </label>
          </div>

          {/* description  */}

          <div className="w-full flex items-center justify-center">
            <button
              className=" w-full mt-10 border text-white border-green-200 rounded lg:w-80  bg-green-400 uppercase px-3 py-2"
              type="submit"
            >
              Edit Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateCoupon;
