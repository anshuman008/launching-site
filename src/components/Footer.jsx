import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white md:p-8 flex flex-col md:flex-row justify-between  md:items-end pt-5 md:pt-28 px-2  ">

      <div className='flex flex-col gap-y-3 md:w-[40%] justify-center items-start overflow-hidden'>
      <div className="text-left mb-8 flex flex-col gap-y-6">
        <h1 className=" text-2xl md:text-4xl regularText text-[#e55726] mb-4">
          Look out for more opportunities for the future superstar!
        </h1>
        <input
          type="email"
          placeholder="your@email"
          className="bg-black border-b-2 border-gray-500 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 w-[90%] pt-4 text-xl"
        />
      </div>


      <div className="flex justify-center space-x-20 mb-8 regularText pt-10 pb-32">
        <a href="#" className="text-[#e55726] md:text-3xl text-xl">
          Support
        </a>
        <a href="#" className="text-[#e55726] md:text-3xl text-xl">
          Partner
        </a>
        <a href="#" className="text-[#e55726] md:text-3xl text-xl">
          Socials
        </a>
      </div>

      </div>



      <div className="text-right pr-4 pb-10">
        <h2 className="text-3xl md:text-5xl regularText">kinetic music</h2>
        <p className="text-gray-500 regularText text-xl md:text-3xl">World’s 1st self-learning piano</p>
      </div>
    </div>
  );
}

export default Footer;
