import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();
  // console.log(products);
  return (
    <div>
      <h1>This is product page of category </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((productDetails) => (
          <Product
            key={productDetails._id}
            productDetails={productDetails}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
