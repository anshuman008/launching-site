

function Intro() {

  return (
    <div className="test h-screen w-screen text-black bg-[#f3f5f9] ">
      {/* content section top */}
      <div className="flex justify-between items-center">
        {/* right section  */}
        <div className="lg:w-1/2 pb-20 bg-gradient-to-r from-orange-500  to-red-500 text-transparent bg-clip-text text-[100px] lg:text-[250px]">
          <span className="flex flex-col leading-[150px] md:leading-[300px]" >
             <span>Kinetic</span>
            <span className="text-[50px] leading-[6px] text-right md:hidden">Music</span>
          </span>
          {/* <span style={{fontSize:'150px'}}>Music</span> */}
        </div>

        {/* left section */}
       
       <div className="w-[60px] h-[60px] rounded-full bg-green-400 flex justify-center items-center pr-4 absolute top-2 right-4 md:hidden">
       {/* <i class="fa-solid fa-bars"></i> */}
       </div>

        <div className="hidden md:flex justify-center items-start flex-col gap-y-20 w-[40%]  pl-20">
          <div className="flex justify-center gap-x-11">
            <span className="cursor-pointer hover:underline">Solution</span>
            <span className="cursor-pointer hover:underline">About</span>
            <span className="cursor-pointer hover:underline">Contact</span>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-6xl font-bold">
              Musical Journey
            </span>
           
            <span className="text-6xl font-bold">
            like never before
            </span>
          </div>
        </div>
      </div>

      {/* content section  bottom */}

      <div className="flex justify-between items-center  absolute bottom-2 w-full  md:pl-5 flex-col gap-y-3">
        <div>
          <span className="text-2xl md:text-4xl font-bold">
           Kinetic Keys(1):Classic White
          </span>
        </div>

        <div className="flex justify-center items-start gap-6   right-[5px] md:right-[55px] md:absolute">
          <span className="p-3 md:px-8 rounded-3xl text-lg md:text-xl bg-gradient-to-r from-orange-500  to-red-500 text-white text-center font-bold cursor-pointer">
            Book an Aircraft
          </span>
          <span className="p-3 md:px-8 rounded-3xl text-lg md:text-xl bg-gradient-to-r from-orange-500  to-red-500 text-white text-center font-bold cursor-pointer">
            Shared Aircraft
          </span>
        </div>
      </div>

      <div>
        <img src="mixed.png" className="h-[500px] absolute bottom-10 left-14" />
      </div>
    </div>
  );
}

export default Intro;
