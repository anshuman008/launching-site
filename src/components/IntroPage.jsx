import React from "react";

const IntroPage = () => {
  return (
    <div className=" bg-[#fdfdfd] pt-4 overflow-hidden pb-10">
      <div className="flex md:hidden justify-between items-center px-10">
        <div className="rounded-full w-14 h-14 bg-[#7878781a]">
          <img src="logo2.png" />
        </div>

        <div className="bg-[#7878781a] w-14 h-14 rounded-xl flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center gap-y-5 w-full pt-4">
        <div className="flex justify-center items-start gap-x-3">
          {/* logo  */}
          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="flex justify-center items-center gap-x-5">
              <div className="rounded-full w-14 h-14 bg-[#7878781a]">
                <img src="logo2.png" />
              </div>
              <div className="flex gap-x-10 thinText  text-2xl  bg-[#7878781a] py-2 w-[500px] justify-between items-center rounded-xl px-10">
                <span>Why us?</span>
                <span>Contact</span>
                <span>Join</span>
              </div>
            </div>

            <div className=" bg-[#7878781a] p-2 rounded-xl flex justify-between items-center gap-x-5 px-10 ml-[70px]">
              <span className="regularText text-xl ">
                Buy & Try. 7 days free return.
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-center md:px-5 lg:px-12 pt-14 lg:pl-36">
        {/* text  */}
        <div className="flex flex-col gap-y-5 text-center justify-center items-center md:text-left md:justify-start md:items-start">
          <span className=" text-3xl md:text-5xl thinText">kinetic music</span>
          <span className=" text-3xl md:text-5xl">
            World’s 1<sup>st</sup> <br /> self-learning piano.
          </span>

          <div className="flex gap-x-3 text-lg md:text-2xl pt-2 md:pt-10">
            <span className=" py-2  cursor-pointer  thinText hidden">
              Explore
            </span>
            <span className="px-3 py-1 rounded-2xl cursor-pointer  border-2 border-[#e55726] thinText text-[#e55726]">
              Keys(1)
            </span>
            <span className="px-3 py-1 rounded-2xl cursor-pointer border-2 border-[#e55726] thinText text-[#e55726]">
              Buy & Try
            </span>
          </div>
        </div>

        {/* image  */}
        <div>
          <img
            className=" h-[400px] mt-20 md:mt-0 md:h-[500px] lg:h-[600px]"
            src="hero2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
