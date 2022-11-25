import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1>This is product page of category </h1>
    </div>
  );
};

export default Products;
