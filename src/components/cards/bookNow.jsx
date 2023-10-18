import React from 'react'
import star from "../../assets/images/Star 1.png"

const BookNow = () => {
  return (
    <div className="w-[308px] bg-white flex flex-col justify-between bg-gray rounded-2xl fixed top-[120px] right-4 border p-4  shadow">
      <h3 className="text-black text-3xl font-[600]">
        Book your Car Service Now !
      </h3>
      <p className="text-gray-700 mb-0 font-bold text-lg mt-2">
        Get instant quotes for <br /> your car service
      </p>
      <div className="text-[#FBBC04] font-bold text-md mt-4 mb-2 flex gap-4">
        Rating
        <img src={star} width={20} alt="star" />
        4.7 / 5
      </div>
      <div>
        <input
          type="text"
          className=" border border-blue-800 text-black rounded-xl w-full mt-2 h-[30px] p-1 text-sm"
          placeholder="Select Your Car"
        />
        <input
          type="text"
          className=" border border-blue-800 text-black rounded-xl w-full mt-2 h-[30px] p-1 text-sm"
          placeholder="Enter Your Mobile Number"
        />
        <button className=" border bg-[#001B39] text-white rounded-xl py-2 w-full mt-2 h-[34px] mb-6 p-1 text-sm">
          Check Prices For Free
        </button>
      </div>
    </div>
  );
}

export default BookNow