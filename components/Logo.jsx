import React from "react";

const Logo = (props) => {
  return (
    <div className="flex justify-center items-center bg-gc-gray-light p-4 rounded-lg ">
      <img src={`/img/logo/${props.logoName}`} alt="logo" className=" h-12 w-24" />
    </div>
  );
};

export default Logo;
