import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  //   console.log(booking);
  //   console.log(process.env.REACT_APP_STRIPE_PK);

  //   const {}

  return (
    <div>
      <h1>Payment for {booking?.productName}</h1>
      <p>
        Please pay <strong>Tk. {booking?.price}</strong>
      </p>
      <div className="w-96 h-60 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
