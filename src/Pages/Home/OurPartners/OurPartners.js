import React from "react";
import hero from "../../../assets/partner_img/hero.png";
import honda from "../../../assets/partner_img/honda.png";
import aprilia from "../../../assets/partner_img/aprila.png";
import suzuki from "../../../assets/partner_img/suzuki.png";
import tvs from "../../../assets/partner_img/tvs.png";

const OurPartners = () => {
  return (
    <div className="my-10 lg:my-32">
      <h1 className="text-center text-4xl font-bold">Our Partner</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 justify-center items-center">
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <img src={honda} alt="" className="w-40 w-40" />
          </div>
        </div>
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <img src={hero} alt="" className="w-40 w-40" />
          </div>
        </div>
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <img src={suzuki} alt="" className="w-40 w-40" />
          </div>
        </div>
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <img src={tvs} alt="" className="w-40 w-40" />
          </div>
        </div>
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <img src={aprilia} alt="" className="w-40 w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
