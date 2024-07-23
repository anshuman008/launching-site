// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../keyboardImages/blue&blackKeys.png";
import img2 from "../keyboardImages/orange&blackKeys.png";
import img3 from "../keyboardImages/orangeKeys.png";
import img4 from "../keyboardImages/red&blackKeys.png";
import img5 from "../keyboardImages/silverKeys.png";
import img6 from "../keyboardImages/white&blackKeys.png";

import circle1 from "..//keyboardColors/blue&black.png";
import circle2 from "..//keyboardColors/orange.png";
import circle3 from "..//keyboardColors/orange&black.png";
import circle4 from "..//keyboardColors/red&black.png";
import circle5 from "..//keyboardColors/silver.png";
import circle6 from "..//keyboardColors/white&black.png";



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="py-12 flex flex-col justify-center items-center bg-[#fdfdfd]">
        <div className="flex justify-center items-center flex-col pb-6">
          <h1 className="text-3xl thinText">July-only discount: 20% off</h1>
          <h1 className="text-4xl md:text-6xl regularText">Your keys, your way</h1>
        </div>
        <span className="px-5 py-1 rounded-2xl cursor-pointer border-2 border-[#e55726] text-2xl regularText text-[#e55726] mb-4 ">
          Buy & Try
        </span>
        <div className="w-[100%] md:w-[70%] lg:w-[40%] h-[600px] lg:h-[70vh] ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide-content flex-col justify-center items-center">
                <img src={img1} className="swiper-image" />
                <div className="w-8 h-8 rounded-full mx-2 ">
                  <img className="object-cover rounded-full" src={circle1} />
                </div>
                <sapn className="text-black boldText">OLYMPIC</sapn>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content flex-col justify-center items-center ">
                <img src={img2} className="swiper-image" />
                <div className="w-8 h-8 rounded-full mx-2 ">
                  <img className="object-cover rounded-full" src={circle3} />
                </div>

                <sapn className="text-black boldText">BAUHAUS</sapn>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content flex-col justify-center items-center ">
                <img src={img3} className="swiper-image" />
                <div className="w-8 h-8 rounded-full mx-2 ">
                  <img className="object-cover rounded-full" src={circle2} />
                </div>
                <sapn className="text-black boldText ">SALAMANDER</sapn>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content flex-col justify-center items-center ">
                <img src={img4} className="swiper-image" />
                <div className="w-8 h-8 rounded-full mx-2 ">
                  <img className="object-cover rounded-full" src={circle4} />
                </div>

                <sapn className="text-black boldText ">CRIMSON</sapn>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide-content flex-col justify-center items-center ">
                <img src={img5} className="swiper-image" />
                <div className="w-8 h-8 rounded-full mx-2 ">
                  <img className="object-cover rounded-full" src={circle5} />
                </div>

                <sapn className="text-black boldText">METALLIC</sapn>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content flex-col justify-center items-center ">
                <img src={img6} className="swiper-image" />
                <div className="w-8 h-8 rounded-full mx-2 ">
                  <img className="object-cover rounded-full" src={circle6} />
                </div>
                <sapn className="text-black boldText">CLASSIC</sapn>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

   
      </div>
    </>
  );
}
