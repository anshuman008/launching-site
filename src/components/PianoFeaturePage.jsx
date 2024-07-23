import React from "react";

const PianoFeaturePage = () => {
  return (
    <div className="bg-[#efefef] px-3 md:!px-0 overflow-hidden">
      <div className="flex flex-col gap-y-5 justify-center items-center pt-10">
        <span className="text-3xl md:text-4xl thinText pt-5">Introducing</span>
        <div className="flex flex-col gap-y-3 justify-center items-center boldText text-center">
          <h1 className="text-5xl md:text-6xl pt-5 regularText">
            Kinetic Keys(1)
          </h1>
          <h2 className="text-4xl md:text-5xl text-[#e55726] pt-5">
            Play. Learn. Grow.{" "}
          </h2>
          <h2 className="text-4xl md:text-5xl text-[#e55726]">
            Everything you need in a piano and more.
          </h2>
        </div>

        <span className="px-5 py-1 rounded-2xl cursor-pointer border-2 border-[#e55726] text-2xl regularText text-[#e55726]">
          Buy & Try
        </span>
      </div>

      {/* image  */}
      <div className="flex justify-center items-center pb-15">
        <img src="desktopwebsite.png" className="h-[200px] md:h-[400px] " />
      </div>
    </div>
  );
};

export default PianoFeaturePage;
