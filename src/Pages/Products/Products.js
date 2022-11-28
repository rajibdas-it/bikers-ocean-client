import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();

  // const navigation = useNavigation();
  // if (navigation.state === "loading") {
  //   return <Loader></Loader>;
  // }
  return (
    <div className="mt-10">
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
