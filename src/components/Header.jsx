import React from "react";
import logo from "../assets/images/logo.png";
import BookNow from "./cards/bookNow";
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center pt-4 px-4">
      <div className="flex items-center gap-4 md:gap-10 ">
        <img
          src={logo}
          className="w-[80px] h-[80px]"
          alt="logo"
          style={{ }}
        />
        <p className="font-[400] font-[italic] text-4xl text-gray almuni">
          CAR SERVICE
        </p>
      </div>
      <div className="flex gap-12">
        <p className="font-bold text-xl">Spares </p>
        <p className="font-bold text-xl">Blog </p>
        <p className="font-bold text-xl">More </p>
      </div>
    </div>
  );
};

export default Header;
