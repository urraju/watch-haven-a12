import { useForm } from "react-hook-form";
import HeadingContent from "../shared/HeadingContent";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageCoupn = () => {
    const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const couponInfo = {
      coupon_code: data.couponCode,
      expire_date: data.expireDate,
      code_description: data.codeDes,
      discount_amount: data.amount,
      owner_email: user?.email,
      owner_name: user?.displayName,
      owner_img: user?.photoURL,
    };

     axiosSecure.post("/coupon", couponInfo).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
            Swal.fire({
              position: "Successfully Added",
              icon: "success",
              title: ` item has been Added`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
     })
    
    }

  return (
    <div className="w-full">
      <HeadingContent heading={"Coupon"} subHeading={"Manage Coupon"} />

      <div className="flex w-full md:px-20 mt-10 items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex  gap-5">
            <label className="font-kdam text-gray-500">
              Coupon Code <br />
              <input
                className="w-full placeholder:font-roboto  backdrop-blur bg-white/10 border font-roboto outline-none border-white lg:w-80 rounded px-3 mt-2 py-2"
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
          <div className=" md:flex  gap-5">
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ManageCoupn;
