import { serve } from "./data";
import "./homepage.scss";
const Services = () => {
  return (
    <div className="servicecontainer">
      <div className="sc ml-4 mt-4 flex  text-darkslategray-200 font-poppins">
        <div className="w-[874px] hidehs overflow-x-auto flex flex-row items-center justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start text-gray-200">
            <div className="subm font-semibold">Our Services</div>
            <img
              className="subm w-[115.75px] h-[0.75px]"
              alt=""
              src="/line-122.svg"
            />
          </div>
          <div className="subm cursor-pointer">Curated Custom Service</div>
          <div className="subm cursor-pointer">How Car Service Works?</div>
          <div className="subm cursor-pointer">{`Rating & Reviews`}</div>
          <div className="subm">Price List</div>
          <div className="subm ">Frequently Asked Question</div>
        </div>
      </div>

      <div className="ml-4 mt-[40px] flex flex-col items-start justify-start gap-[20px] text-xl text-gray-200 font-poppins">
        <b className="tracking-[0.18px] flex items-center w-[398px] h-9 shrink-0">
          Car Services Available In Hyderabad
        </b>
        <div className="text-base tracking-[0.15px] font-inter text-darkslategray-100 flex items-center w-[813px] h-16 shrink-0">
          Get hassle-free and professional car service, car repair, wheel care
          services, cashless insurance claim and much more in Hyderabad.
        </div>
      </div>

      <div className="ct2 ml-4 mb-16 mt-4 p-6 flex gap-16">
      {serve.map((ele,i)=>{
        return (
          <div key={i} className="w-[146px] h-[93.22px] cursor-pointer">
            <img
              className="w-[99.82px] h-[51.22px]"
              alt=""
              src="/group-7403.svg"
            />
            <div className=" tracking-[0.22px] font-semibold">
              Periodic Service
            </div>
          </div>
        );
      })}
        
      </div>

      <div className="ml-4 flex flex-row items-start justify-start gap-[17px] text-center text-khaki font-poppins">
        <div className="relative rounded-xl w-48 h-[187px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(180deg,_#ffe6cf,_#cbdaff)] w-48 h-[187px]" />
          <img
            className="absolute top-[119.37px] left-[142.5px] w-[61px] h-[85px]"
            alt=""
            src="/vector-28.svg"
          />
          <img
            className="absolute top-[140.5px] left-[0px] w-[38.5px] h-[43.71px]"
            alt=""
            src="/vector-29.svg"
          />
          <img
            className="absolute top-[143.5px] left-[0px] w-[34.5px] h-[43.5px]"
            alt=""
            src="/vector-30.svg"
          />
          <img
            className="absolute top-[146.5px] left-[0px] w-[30.5px] h-[40.5px]"
            alt=""
            src="/vector-31.svg"
          />
          <img
            className="absolute top-[149.5px] left-[0px] w-[26.5px] h-[37.5px]"
            alt=""
            src="/vector-32.svg"
          />
          <img
            className="absolute top-[152.5px] left-[0px] w-[22.5px] h-[34.5px]"
            alt=""
            src="/vector-33.svg"
          />
          <img
            className="absolute top-[91px] left-[22px] w-[170px] h-24 object-cover"
            alt=""
            src="/25003387-na-feb-34-1@2x.png"
          />
          <img
            className="absolute top-[1.23px] left-[103.75px] w-[86.91px] h-[78.9px]"
            alt=""
            src="/vector-34.svg"
          />
          <img
            className="absolute top-[0px] left-[170.5px] w-[86.25px] h-[78.63px]"
            alt=""
            src="/vector-35.svg"
          />
          <div className="absolute top-[20px] left-[15px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.22px] font-semibold">
              Miles
            </div>
            <div className="relative text-base tracking-[0.22px] font-light font-inter text-black text-left">
              <p className="m-0">Free Road Side</p>
              <p className="m-0">Assistance</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl w-48 h-[187px] overflow-hidden shrink-0 text-mediumorchid">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(180deg,_#fbcbf3_43.27%,_#4bc5d2)] w-48 h-[187px]" />
          <img
            className="absolute top-[73.88px] left-[2.51px] w-[189.27px] h-[110.24px]"
            alt=""
            src="/vector-38.svg"
          />
          <img
            className="absolute top-[82.5px] left-[10.51px] w-[180.77px] h-[105px]"
            alt=""
            src="/vector-39.svg"
          />
          <img
            className="absolute top-[154.51px] left-[161.19px] w-[30.81px] h-[32.49px]"
            alt=""
            src="/vector-36.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[38.02px] h-[33.52px]"
            alt=""
            src="/group-7413.svg"
          />
          <img
            className="absolute top-[80px] left-[36px] w-[167px] h-[111px] object-cover"
            alt=""
            src="/10782856-19199272-1@2x.png"
          />
          <div className="absolute top-[17px] left-[12px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.22px] font-semibold">
              Warranty
            </div>
            <div className="relative tracking-[0.22px] font-light font-inter text-black text-left">
              <p className="m-0">Save 5000 INR</p>
              <p className="m-0">Annually</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl [background:linear-gradient(180deg,_#fc7aa9,_rgba(117,_108,_225,_0))] w-48 h-[187px] overflow-hidden shrink-0 text-white">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(180deg,_#6766db_29.23%,_rgba(253,_123,_169,_0.68)_70.42%)] w-48 h-[187px]" />
          <img
            className="absolute top-[0px] left-[17.53px] w-[186.5px] h-[72.22px]"
            alt=""
            src="/vector-40.svg"
          />
          <img
            className="absolute top-[0px] left-[11.53px] w-[186.5px] h-[72.22px]"
            alt=""
            src="/vector-41.svg"
          />
          <img
            className="absolute top-[0px] left-[5.53px] w-[186.5px] h-[72.22px]"
            alt=""
            src="/vector-42.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[196px] h-[76px]"
            alt=""
            src="/vector-43.svg"
          />
          <img
            className="absolute top-[54px] left-[87px] w-[161px] h-[161px] object-cover"
            alt=""
            src="/12144961-wavy-bus42-single03-1@2x.png"
          />
          <img
            className="absolute top-[80.67px] left-[0px] w-[106.1px] h-[118.68px]"
            alt=""
            src="/vector-44.svg"
          />
          <div className="absolute top-[17px] left-[13px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.22px] font-semibold">
              Accessories
            </div>
            <div className="relative tracking-[0.22px] font-light font-inter">
              Check them Out
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-[1703px] left-[24px] w-[860px] h-[613px] text-center"
        data-scroll-to="frameContainer1"
      >
        <b className="absolute top-[0px] left-[0px] text-xl tracking-[0.18px] flex font-poppins text-gray-200 text-left items-center w-[278px] h-[49px]">
          Curated Custom Services
        </b>
        <div className="absolute top-[87px] left-[0px] flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/image-3@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Batteries
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative rounded-[7.88px] w-[100px] h-[100px] object-cover"
              alt=""
              src="/xxhdpipng@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Lights
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/image-10@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Steering
            </div>
          </div>
        </div>
        <div className="absolute top-[88px] left-[353px] h-[546px] flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[98px] object-cover"
              alt=""
              src="/image-5@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Brakes
            </div>
          </div>
          <div className="h-44 flex flex-col items-center justify-center gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/-25003388@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Car Detailing
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative w-[142px] h-[71px] object-cover"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Body Parts
            </div>
          </div>
        </div>
        <div className="absolute top-[87px] left-[181px] flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative rounded-[7.88px] w-[100px] h-[100px] object-cover"
              alt=""
              src="/xxhdpipng1@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              AC Parts
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/image-8@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Glasses
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/xxhdpi-1@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Suspension
            </div>
          </div>
        </div>
        <div className="absolute top-[88.62px] left-[544px] flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[96.77px] object-cover"
              alt=""
              src="/image-6@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Clutch
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[20px] cursor-pointer">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/image-9@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Tyres
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[50px] cursor-pointer">
            <img
              className="relative w-[100px] h-[68.47px] object-cover"
              alt=""
              src="/image-11@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Side Mirror
            </div>
          </div>
        </div>
        <div className="absolute top-[87px] left-[724px] flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px] cursor-pointer">
            <img
              className="relative rounded-[62.5px] w-[100px] h-[100px] object-cover"
              alt=""
              src="/obdpng@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Go connect 2.0
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[20px] cursor-pointer">
            <img
              className="relative rounded-[7.88px] w-[100px] h-[100px] object-cover"
              alt=""
              src="/xxhdpipng2@2x.png"
            />
            <div className="relative tracking-[0.22px] font-semibold">
              Car Spa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
