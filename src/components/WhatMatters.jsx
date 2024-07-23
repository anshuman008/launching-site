import React from "react";

const WhatMatters = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 py-8 bg-[#efefef] ">
      <h1 className="text-4xl md:text-6xl boldText pt-5">Asking what matters!</h1>

      <div className="flex flex-col gap-y-14 pt-5 pb-10">
        <div className="flex flex-col md:flex-row justify-evenly md:items-start px-10 gap-y-3 ">
          <div className="flex flex-col  md:w-[20%]">
            <span className="text-2xl thinText">01</span>
            <span className="text-3xl regularText">Why Kinetic?</span>
          </div>

          <div
            className=" md:p-3 text-[#e55726] md:w-[40%] text-2xl regularText pb-2 md:!pb-0"
            style={{ borderBottom: "1px solid black" }}
          >
            Unlike a normal piano, Keys(1) has an inbuilt computer which is like
            having your favourite teacher 24x7 to help you play songs, learn
            music and track your progress! Anytime. Anywhere.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly md:items-start px-10 gap-y-3 ">
          <div className="flex flex-col  md:w-[20%]">
            <span className="text-2xl thinText">02</span>
            <span className="text-3xl regularText">Who is it for?</span>
          </div>

          <div
            className="md:p-3 text-[#e55726] md:w-[40%] text-2xl regularText pb-2 md:!pb-0 "
            style={{ borderBottom: "1px solid black" }}
          >
            <span className="boldText font-bold text-3xl text-[#e55726]">Beginners</span>{" "}
            starting their music journey. <br />
            <sapn className="boldText font-bold text-3xl text-[#e55726]">Parents</sapn> building
            character and creativity in their children.
            <br /> <span className="boldText font-bold text-3xl text-[#e55726]">
              Adults
            </span>{" "}
            rekindling their passion.
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly md:items-start px-10 gap-y-3 ">
          <div className="flex flex-col  md:w-[20%]">
            <span className="text-2xl thinText ">03</span>
            <span className="text-3xl regularText">What is Buy & Try?</span>
          </div>

          <div
            className="md:p-3 text-[#e55726] md:w-[40%] text-2xl regularText pb-2 md:!pb-0"
            style={{ borderBottom: "1px solid black" }}
          >
            Buy now and try for yourself. If you don’t like our product, you can
            return it within 7 days of getting the shipment and get full refund.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMatters;
