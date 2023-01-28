import React from "react";
import Image from "next/image";

const Logo = (props) => {
  return (
    <div className="bg-gc-gray-light p-4 rounded-lg flex justify-center items-center">
      <img src={`./img/logo/${props.logoName}`} alt="logo" className=" h-12 w-24" />
    </div>
  );
};

export default Logo;
