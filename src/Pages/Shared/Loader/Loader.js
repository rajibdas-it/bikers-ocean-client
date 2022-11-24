import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-28 h-28 border-8 border-primary border-dotted rounded-full animate-spin"></div>
      <p className="text-2xl font-bold text-black">Loading ...</p>
    </div>
  );
};

export default Loader;
