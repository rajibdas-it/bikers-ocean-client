import React from "react";
import bg1 from "../../../assets/banner_one.webp";
import bg2 from "../../../assets/banner_two.webp";
import bg3 from "../../../assets/banner_three.webp";
import { FaEnvelope, FaNewspaper, FaPhoneAlt, IconName } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="grid grid-cols-1 my-10 mx-2">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white mt-2">
          <div className="card w-full  border-y md:border-x border-white shadow-sm rounded-none">
            <figure className="px-10 pt-10">
              <FaPhoneAlt className="h-10 w-10 text-primary"></FaPhoneAlt>
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title">NEED HELP?</h2>
              <p>Our dedicated team are here to help.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Chat Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full border-y md:border-x border-white  shadow-sm rounded-none">
            <figure className="px-10 pt-10">
              <FaEnvelope className="h-10 w-10 text-primary"></FaEnvelope>
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title">CALL US</h2>
              <p>Talk to our team 24/7 about your needs.</p>
              <div className="card-actions">
                <button className="btn btn-primary">666 - 880 - 33388</button>
              </div>
            </div>
          </div>
        </div>
        {/* Subscribe section */}
        <div className="mb-2">
          <div className="card w-full border border-white shadow-sm rounded-none">
            <figure className="px-10 pt-10">
              <FaNewspaper className="h-12 w-12 text-primary"></FaNewspaper>
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title">SUBSCRIBE US</h2>
              <p>And get the scoop on sales & new gear!</p>
              <div>
                <div className="form-control w-80">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered w-full pr-16"
                    />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
