import React from "react";

function Banner() {
  return (
    <div>
      <div className=" rounded-lg mb-5 w-[100%] bg-[#92B5F9] lg:h-[300px] justify-center items-center lg:justify-around  mx-auto flex flex-col md:flex-row lg:flex-row">
        <div className=" my-5 ">
          <h1 className="text-[#0B0754]  font-bold my-1 text-3xl">
            Build your library
          </h1>
          <p className="text-white text-xl my-1">
            Buy two selected books and get <br /> one for free
          </p>
          <button className="bg-[#FA7167] py-1 px-3 cursor-pointer my-1">
            View all
          </button>
        </div>
        <div className="justify-center flex w-[100%]  lg:w-[50%] md:w-[50%] h-[100%] ">
          <img className=" " src="/Banner-Hero2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
