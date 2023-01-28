import React from "react";
import TopMenu from "./TopMenu";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* <div className=" h-20 flex items-center justify-center bg-slate-300">Header</div> */}
      <TopMenu />
    </div>
  );
};

export default Header;
