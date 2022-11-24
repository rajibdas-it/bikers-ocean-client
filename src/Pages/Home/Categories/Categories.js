import React from "react";
import Category from "../Category/Category";

const Categories = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold mb-10">Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Category></Category>
      </div>
    </div>
  );
};

export default Categories;
