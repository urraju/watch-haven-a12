import { useState } from "react";
import paymant from "../assets/user/paymant.png";
import { Link,  } from "react-router-dom";
import { MdArrowDownward, MdOutlinePayment } from "react-icons/md";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import FormChackOut from "../Dashboard/FormChackOut";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HelmetUse from "../shared/HelmetUse";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Subscription = () => {
  const [paymant1, setPaymant1] = useState(500);

  const [currentAmount, setCurrentAmount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  console.log(couponCode);
  const { data: data = [], refetch } = useQuery({
    queryKey: ["coupon", couponCode],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignmant-12-server.vercel.app/getcoupon?code=${couponCode}`
      );
      console.log(res.data);
      if (res?.data[0]?.discount_amount) {
        const parInt = parseInt(res?.data[0].discount_amount);
        setDiscount(parInt);
      }
      return res.data;
    },
  });

  const SubscriptionNow = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const useCoupon = (e) => {
    e.preventDefault();
     
    if (discount !== 0) {
       
      setCurrentAmount(paymant1 - discount);
      setPaymant1(paymant1 - discount);
      e.target.reset()
    }
  };
  console.log(paymant1);

  return (
    <div className="w-full">
      <HelmetUse helmet={'Subsciption || Page'}/>
      <div>
        <img className="  mx-auto" src={paymant} alt="" />
        <div className="mt-3 flex flex-col justify-center items-center">
          <p className="text-lg uppercase text-center font-kdam mb-4">
            If You Post your more product you can do
          </p>
          <Link
            onClick={SubscriptionNow}
            className=" px-5 py-2 flex bg-gradient-to-br to-yellow-500 text-white  items-center gap-2 from-yellow-900 uppercase rounded border border-yellow-300"
            href=""
          >
            Subscription Now <MdArrowDownward />{" "}
          </Link>

          <div className="flex justify-center items-center mt-5 gap-3">
            <Link>
              <button className="flex items-center justify-center gap-2 bg-gradient-to-tl to-rose-400 from-rose-200 px-4 py-2 rounded border-rose-100 border text-lg ">
                {paymant1} <MdOutlinePayment />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <p>{data.coupon_code}</p>
          <form onSubmit={useCoupon}>
            <label className="font-mono font-bold text-gray-600 uppercase">
              use discount Coupon Code
              <input
                className="block mt-2 border border-yellow-300 outline-none focus:border-green-500 rounded mb-2 bg-transparent px-2 py-1  font-normal"
                type="text"
                name="coupon"
                placeholder="Add Coupon"
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </label>
            <button
              className="bg-green-500 flex   mx-auto text-white  text-sm  uppercase px-3 py-1 rounded disabled:bg-yellow-200"
              type="submit"
            >
              Apply Coupon
            </button>
          </form>
        </div>
      </div>

      {/* modal  */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="px-5 py-8">
            <Elements stripe={stripePromise}>
              <FormChackOut paymant1={paymant1} />
            </Elements>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Subscription;
