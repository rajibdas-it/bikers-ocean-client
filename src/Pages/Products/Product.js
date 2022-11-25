import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/UserContext";
import OrderModal from "./OrderModal";

const Product = ({ productDetails }) => {
  const { user } = useContext(AuthContext);
  const [sellerInfo, setSellerInfo] = useState("");
  const [bookingItem, setBookingItem] = useState(null);
  const {
    categoryId,
    buyingPrice,
    condition,
    date,
    descriptions,
    image,
    location,
    productName,
    purchaseYear,
    sellerName,
    sellerEmail,
    sellerPhone,
    sellingPrice,
  } = productDetails;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/verifyseller/${sellerEmail}`)
      .then((res) => {
        setSellerInfo(res.data);
      });
  }, [sellerEmail]);
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data) {
  //       setSellerInfo(data);
  //     }
  //   });

  //   console.log(sellerInfo);

  //   const handleBookingBike = () => {
  //     console.log("modal Button Clicked");
  //   };

  //   console.log(bookingItem);

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-[400px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>
            <small>{date}</small>
          </p>
          <h2 className="card-title">
            {sellerName}
            <div className="badge badge-secondary">{sellerInfo.status}</div>
            {/* <div className="badge badge-secondary">Cell: {sellerPhone}</div> */}
          </h2>
          <div className="grid grid-cols-1 gap-2 justify-start">
            <div className="badge badge-outline">Cell: {sellerPhone}</div>
            <div className="badge badge-outline">
              Buying Price ${buyingPrice}
            </div>
            <div className="badge badge-outline">
              Sale Price ${sellingPrice}
            </div>
            <div className="badge badge-outline">Year-{purchaseYear}</div>
            <div className="badge badge-outline">Condition-{condition}</div>
            <div className="badge badge-outline">Location: {location}</div>
          </div>
          <p>{descriptions}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Order Now</button> */}
            <label
              htmlFor="order-modal"
              className="btn btn-primary"
              onClick={() => setBookingItem(productDetails)}
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
      {bookingItem && <OrderModal bookingItem={bookingItem}></OrderModal>}
    </div>
  );
};

export default Product;
