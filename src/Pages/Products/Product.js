import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/UserContext";
import OrderModal from "./OrderModal";
import { FaHeart, FaUserSecret } from "react-icons/fa";
import moment from "moment/moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Product = ({ productDetails }) => {
  const { user } = useContext(AuthContext);
  const [sellerInfo, setSellerInfo] = useState("");
  const [bookingItem, setBookingItem] = useState(null);
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  const navigate = useNavigate("");
  const {
    _id,
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
    status,
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

  const handleAddWishList = (productDetails) => {
    const wishedItem = {
      date: currentDate,
      productName,
      productId: _id,
      userName: user?.displayName,
      userEmail: user?.email,
      sellerName,
      sellerEmail,
      price: sellingPrice,
    };

    fetch("http://localhost:5000/mywishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("bikersOcean-token")}`,
      },
      body: JSON.stringify(wishedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added in your wishlist page.");
          navigate("/mywishlist");
        }
      });
  };
  const handleReportToAdmin = (productDetails) => {
    const reportedItem = {
      date: currentDate,
      productId: productDetails._id,
      productName: productDetails.productName,
      userName: user?.displayName,
      userEmail: user?.email,
      sellerName: productDetails.sellerName,
      sellerEmail: productDetails.sellerEmail,
    };

    fetch("http://localhost:5000/reportedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("bikersOcean-token")}`,
      },
      body: JSON.stringify(reportedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reported to Admin.");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="card w-full h-[900px] bg-base-100 shadow-xl">
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
              Buying Price: ${buyingPrice}
            </div>
            <div className="badge badge-outline">
              Sale Price: ${sellingPrice}
            </div>
            <div className="badge badge-outline">
              Purchase Year: {purchaseYear}
            </div>
            <div className="badge badge-outline">Condition: {condition}</div>
            <div className="badge badge-outline">Location: {location}</div>
            <div className="badge badge-outline">Status: {status}</div>
          </div>
          <p>{descriptions}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddWishList(productDetails)}
              className="btn btn-secondary"
              title="Wishlist"
            >
              <FaHeart className="h-6 w-6 text-orange-400"></FaHeart>
            </button>
            <button
              onClick={() => handleReportToAdmin(productDetails)}
              className="btn btn-secondary"
              title="Report To Admin"
            >
              <FaUserSecret className="h-8 w-8"></FaUserSecret>
            </button>
            {status === "available" && (
              <label
                htmlFor="order-modal"
                className="btn btn-primary"
                onClick={() => setBookingItem(productDetails)}
              >
                Book Now
              </label>
            )}
          </div>
        </div>
      </div>
      {bookingItem && (
        <OrderModal
          bookingItem={bookingItem}
          setBookingItem={setBookingItem}
        ></OrderModal>
      )}
    </div>
  );
};

export default Product;
