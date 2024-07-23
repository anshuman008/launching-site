import React from "react";

const PriceComp1 = () => {
  return (
    <div className="bg-[#f3f5f9] px-3 lg:px-24  flex flex-col gap-y-24 py-10">
      <div className="text-5xl md:text-7xl lg:text-9xl">CHOOSE A PLAN THAT WORKS FOR YOU</div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="bg-white  h-[400px] rounded-3xl flex flex-col justify-center items-start gap-y-52 pl-14 cursor-pointer hover:border-2 border-[#00f19f] relative">
          <div className="flex flex-col">
            <span className="text-6xl font-bold">$339</span>
            <span className="text-2xl font-bold">Upfront</span>
          </div>

          <span className="text-2xl font-bold">24 Month Membership</span>

          <span className="p-2 bg-[#00f19f] absolute top-[-15px] rounded-lg">MOST POPULAR</span>
        </div>

        <div className="bg-white  h-[400px] rounded-3xl flex flex-col justify-center items-start gap-y-52 pl-14 cursor-pointer hover:border-2 border-[#00f19f] relative">
          <div className="flex flex-col">
            <span className="text-6xl font-bold">$339</span>
            <span className="text-2xl font-bold">Upfront</span>
          </div>

          <span className="text-2xl font-bold">24 Month Membership</span>

          <span className="p-2 bg-[#00f19f] absolute top-[-15px] rounded-lg">MOST POPULAR</span>

        </div>
      </div>
    </div>
  );
};

export default PriceComp1;
