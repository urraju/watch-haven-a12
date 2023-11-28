import { useState } from "react";
import paymant from "../assets/user/paymant.png";
import { Link } from "react-router-dom";
import {
  MdArrowDownward,
  MdOutlinePayment,
} from "react-icons/md";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import FormChackOut from "../Dashboard/FormChackOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT)

const Subscription = () => {
  const [paymant1, setPaymant1] = useState(500);
  const [paymant2, setPaymant2] = useState(1000);
  const [paymant3, setPaymant3] = useState(1500);

  const handlePaymant1 = () => {
    document.getElementById("my_modal_3").showModal()
  };
  const handlePaymant2 = () => {
    document.getElementById("my_modal_3").showModal()
  };
  const handlePaymant3 = () => {
    document.getElementById("my_modal_3").showModal()
  };
  return (
    <div className="w-full">
        
      <div>
        <img className="  mx-auto" src={paymant} alt="" />
        <div className="mt-3 flex flex-col justify-center items-center">
          <p className="text-lg uppercase text-center font-kdam mb-4">
            If You Post your more product you can do
          </p>
          <Link
            className=" px-5 py-2 flex bg-gradient-to-br to-yellow-500 text-white  items-center gap-2 from-yellow-900 uppercase rounded border border-yellow-300"
            href=""
          >
            Subscription Now <MdArrowDownward />{" "}
          </Link>

          <div className="flex justify-center items-center mt-5 gap-3">
            <Link>
              <button
                onClick={handlePaymant1}
                className="flex items-center justify-center gap-2 bg-gradient-to-tl to-rose-400 from-rose-200 px-4 py-2 rounded border-rose-100 border text-lg "
              >
                {paymant1} 1Month <MdOutlinePayment />
              </button>
            </Link>
            <Link>
              <button
                onClick={handlePaymant2}
                className="flex items-center justify-center gap-2 bg-gradient-to-tl to-rose-500 from-rose-200 px-4 py-2 rounded border-rose-300 border text-lg "
              >
                {paymant2} 3Month <MdOutlinePayment />
              </button>
            </Link>
            <Link>
              <button
                onClick={handlePaymant3}
                className="flex items-center justify-center gap-2 bg-gradient-to-tl to-rose-600 from-rose-200 px-4 py-2 rounded text-gray-800 border-rose-400 border text-lg "
              >
                {paymant3} 5Month <MdOutlinePayment />
              </button>
            </Link>
          </div>
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
             <Elements stripe={stripePromise} >
                    <FormChackOut paymant1={paymant1} paymant2={paymant2} paymant3={paymant3}/>
                </Elements>
        </div>
        </div>
      </dialog>
    </div>
  );
};
export default Subscription;
