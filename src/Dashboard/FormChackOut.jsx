import Swal from "sweetalert2";
import {
  CardCvcElement,
  CardElement,
  CartElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../AuthContext/useAuth/useAuth";
import { useEffect } from "react";
import moment from "moment/moment";
const FormChackOut = ({paymant1, paymant2, paymant3}) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  

  useEffect(() => {
     if(paymant1 > 0){
      axiosSecure.post('/create-payment-intent',{price : paymant1})
      .then(res => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret)
      })
     }
  },[axiosSecure,paymant1])

  const handleCheckOut = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("paymants error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
            name: user?.displayName || "anonymouse",
          },
        },
      });
    if (paymentIntent.status === "succeeded") {
      console.log("taransaction id", paymentIntent.id);
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user.email,
        price: paymant1,
        data: dateTime,
        transactionId: paymentIntent.id,
        status: "pending",
      };
      axiosSecure.post("/paymants", payment).then((res) => {
        console.log(res.data);
        
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks For paymants",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/addProduct");
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleCheckOut}>
        <CardElement
          className="border px-3 py-2 mb-4"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="px-4 py-1 bg-orange-500   uppercase w-full text-white rounded"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && (
          <p className="text-violet-500">
            Your transaction id : {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};
export default FormChackOut;
