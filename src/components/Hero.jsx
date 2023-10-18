import hero from "../assets/images/hero.png";
import star from "../assets/images/Mask group.png";
import Header from "./Header";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="w-full relative text-white">
        <img src={hero} alt="" className=" top-0 w-full" />
        <div className="z-10 absolute top-0 w-full">
          <Header />
          <div className="w-[70%] p-4 mt-10">
            <p className="experince ">
              Experience The Best Car Services In Hyedrabad
            </p>
            <div className="sub-ex mt-[16px]   w-[661px] ">
              We provide Our Services in over 100+ Major Cities also.
            </div>
            <p className="herop w-[776px] mt-[79px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              egestas ligula. Nulla facilisi. Phasellus faucibus ligula id
              mauris varius, eget faucibus lorem fringilla. Vivamus ut felis
              porta, luctus libero eget, feugiat velit. Sed aliquet leo et ex
              sodales,
            </p>
            <div className="w-[70%] flex mt-4">
              <div className="w-1/2 text-2xl border-r-2  font-bold flex gap-3 items-start">
                <div style={{ width: "67px", height: "67px", flexShrink: 0 }}>
                  <img src={star} alt="" />
                </div>
                <div>
                  <p className="rat">4.7</p>
                  <p className="ratp">Based on 100000+ Reviews</p>
                </div>
              </div>
              <div className="w-1/2 text-2xl border-l pl-2 font-bold flex gap-3 items-start">
                <div style={{ width: "67px", height: "67px", flexShrink: 0 }}>
                  <img src="/mask-group2@2x.png" alt="" />
                </div>
                <div>
                  <p className="rat">2,50,000</p>
                  <p className="ratp">Happy Customers</p>
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
