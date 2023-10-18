import React from "react";
import hero from "../assets/images/hero.png";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className="relative w-full text-white">
        <img src={hero} alt="" className="absolute z-0 top-0 w-full" />
        <div className="z-10 absolute w-full">
          <Header />
        </div>
      </div>
    </>
  );
};

export default Hero;
