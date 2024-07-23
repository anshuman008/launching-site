import SimpleSlider from "./Slider";

const WhatToExpect = () => {
  return (
    <>
      <div className=" bg-[#0f1012] flex flex-col gap-y-10 lg:gap-y-20 px-2 md:px-11 lg:px-10 py-14 pt-10 md:pt-15   lg:pt-20 ">
        {/* title section  */}
        <div className="boldText text-4xl md:text-6xl  text-center text-white  w-full flex justify-center items-center">
          <span>What to expect when you purchase</span>
        </div>

        <div className="hidden lg:grid grid-cols-1  md:grid-cols-3  gap-9 gap-y-16 md:!gap-y-0 px-20">
          <div className="flex flex-col gap-y-10">
            <div className=" overflow-hidden rounded-3xl md:h-[300px] lg:h-[500px]">
              <img
                className="object-cover h-full w-full "
                src=" https://images.ctfassets.net/rbzqg6pelgqa/2UF2zgHQaHkHUWoVNcZwDC/c801232cb6f5208a2e6fb879935ba6a7/1-world-class-tech-alt2__1_.webp"
              />
            </div>

            <div className="text-white">
              <h1 className="regularText md:text-xl lg:text-3xl">
                Breathtaking Keys(1)
              </h1>
              <div className="thinText text-2xl pt-3">
                Elegant Bauhaus design, ultraportable and super fast 1.8GHz computer with powerful 4GB RAM!
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-10">
            <div className=" overflow-hidden rounded-3xl md:h-[300px] lg:h-[500px]">
              <img
                className="object-cover h-full w-full "
                src="https://images.ctfassets.net/rbzqg6pelgqa/6HI3utrRDaUi4CKMhYuVIX/87955835dd54c35d53c9979a81557f23/2-app-alt.webp"
              />
            </div>

            <div className="text-white">
              <h1 className="regularText md:text-xl lg:text-3xl">
                Personalised app
              </h1>
              <div className="thinText text-2xl pt-3">
                Keys(1) calibrates your dashboard with your milestones, goals, and scores.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-10">
            <div className=" overflow-hidden rounded-3xl md:h-[300px] lg:h-[500px]">
              <img
                className="object-cover h-full w-full "
                src=" https://images.ctfassets.net/rbzqg6pelgqa/68EtH8AW7uhGCffGyA7PhC/67d5af905309749fa14775c62bb06e3c/3-research-alt__1___1_.webp"
              />
            </div>

            <div className="text-white">
              <h1 className="regularText md:text-xl lg:text-3xl">
                Cutting edge tech
              </h1>
              <div className="thinText text-2xl pt-3">
                Notes, velocity, press force, accuracy - everything you need to improve your skills.  
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:hidden">
          <SimpleSlider />
        </div>
      </div>
    </>
  );
};

export default WhatToExpect;
