import React from "react";

const Product = ({ productDetails }) => {
  console.log(productDetails);
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
    sellerPhone,
    sellingPrice,
  } = productDetails;
  return (
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
          <div className="badge badge-secondary">varified</div>
        </h2>
        <p>{descriptions}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
