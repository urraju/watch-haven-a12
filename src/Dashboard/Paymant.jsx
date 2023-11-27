import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT)
const Paymant = () => {
    return(
        <div>
             <Elements stripe={stripePromise} >
                    
                    <CheckOut>

                    </CheckOut>
                </Elements>
        </div>
    )}
export default Paymant;