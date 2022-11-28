import React from "react";
import bannerImg from "../../../assets/banner_img.webp";

const Banner = () => {
  return (
    <div
      className="hero w-full h-[400px]"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="hero-content text-center">
        <div className="text-white max-w-md">
          <h1 className="text-5xl font-bold text-primary">Bikers Ocean</h1>
          <p className="py-6">
            Best Online Bike Reseller Website in Bangladesh.
          </p>
          <p className="">A journey that never ends!</p>
          <p className="text-xl">
            Ride it! Love it! Live it! Ride steady and safe. Ride with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
