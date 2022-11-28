import React from "react";

const Banner = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-1/2 rounded-none">
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
