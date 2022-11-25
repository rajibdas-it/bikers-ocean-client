import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  console.log(category);
  return (
    <>
      {/* <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{category?.categoryName}</h2>
          <p>{category.descriptions}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${category?._id}`}>
              <button className="btn">See All</button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure
          style={{
            backgroundColor: "rgba(0,0,0,0.9)",
            backgroundBlendMode: "overlay",
          }}
        >
          <img
            src={category?.image}
            className="w-full opacity-[0.5]"
            alt={category?.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary font-bold text-2xl">
            {category?.categoryName}
          </h2>
          <p className="text-white">{category.descriptions}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${category?._id}`}>
              <button className="btn btn-primary">See All</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
