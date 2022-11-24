import React from "react";

const Category = () => {
  return (
    <>
      {/* <div className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
        <figure className="rounded-none">
          <img
            src="https://placeimg.com/400/225/arch"
            className="w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show All</button>
          </div>
        </div>
      </div> */}

      <div className="card w-full bg-base-100 shadow-xl image-full rounded-none">
        <figure>
          <img
            src="https://placeimg.com/400/225/arch"
            className="w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sports Bike!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See All</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl image-full rounded-none">
        <figure>
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sports Bike!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See All</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl image-full rounded-none">
        <figure>
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sports Bike!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
