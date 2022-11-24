import React from "react";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 border border-red-500 my-10">
      <div className="grid grid-cols-2">
        <div className="card w-full bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">NEED HELP?</h2>
            <p>Our dedicated team are here to help.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Chat Now</button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">CALL US</h2>
            <p>Talk to our team 24/7 about your needs.</p>
            <div className="card-actions">
              <button className="btn btn-primary">666 - 880 - 33388</button>
            </div>
          </div>
        </div>
      </div>
      {/* Subscribe section */}
      <div className="">
        <div className="card w-full">
          <figure className="px-10 pt-10">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
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
            {/* <div className="card-actions">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
