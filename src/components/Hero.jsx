import React from "react";
import hero from "../assets/images/hero.png";
import star from "../assets/images/Mask group.png"
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className="relative w-full text-white">
        <img src={hero} alt="" className="absolute z-0 top-0 w-full" />
        <div className="z-10  absolute w-full">
          <Header />
          <div className="w-[70%] p-4 mt-10">
            <p className="text-3xl font-[600]">
              Experience The Best Car Services In Hyedrabad
            </p>
            <div className="my-2 mb-10 text-md">
              We provide Our Services in over 100+ Major Cities also.
            </div>
            <p className="mb-6 text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              egestas ligula. Nulla facilisi. Phasellus faucibus ligula id
              mauris varius, eget faucibus lorem fringilla. Vivamus ut felis
              porta, luctus libero eget, feugiat velit. Sed aliquet leo et ex
              sodales,
            </p>
            <div className="w-[70%] flex">
              <div className="w-1/2 text-2xl font-bold flex flex-col gap-3">
                <div className="flex gap-4 ">
                  <img src={star} width={30} alt="" />
                </div>
                <div>
                  4.7
                <p className="text-sm">Based on 100000+ Reviews</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
