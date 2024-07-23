import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Features from "./components/Features";

gsap.registerPlugin(ScrollTrigger);

const details = [
  {
    id: 0,
    title: "Play any song, right now",
    subtitle: "Choose from 100s of preloaded songs",
    textColor: "#fe696e",
  },
  {
    id: 1,
    title: "Practice at your own pace",
    subtitle: "the basics of music theory",
    textColor: "#38b6ff",
  },
  {
    id: 2,
    title: "Keep track, like a champion",
    subtitle: "Customisable dashboard to help you grow",
    textColor: "#ff914d",
  },
];

const HeroComp = () => {
  const [current, setCurrent] = useState(0);
  const images = ["39.png", "40.png", "41.png"];
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Adjust the end value to create enough scroll space for the transitions
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const newIndex = Math.min(
            images.length - 1,
            Math.max(0, Math.floor(self.progress * images.length))
          );
          setCurrent(newIndex);
        },
      },
    });

    sectionsRef.current.forEach((section, index) => {
      tl.fromTo(
        section,
        { opacity: 1 },
        { opacity: 1, duration: 1, onStart: () => setCurrent(index) },
        index * 0.5
      );
    });

    return () => {
      if (tl) tl.kill();
    };
  }, [images.length]);

  return (
    <div className="relative h-screen bg-[#f3f5f9]" ref={containerRef}>
      {/* Options */}
      <div className="flex justify-center items-center gap-x-10 z-30 fixed top-10 md:top-4 left-0 right-0">
        {["Play", "Learn", "Track"].map((label, index) => (
          <span
            key={index}
            className={`test m-2 px-4 py-1 w-24 text-center text-xl rounded-2xl cursor-pointer flex justify-center items-center ${
              current === index ? `font-bold text-white` : ""
            }`}
            style={{
              backgroundColor:
                current === index ? details[current].textColor : "",
            }}
            onClick={() => {
              setCurrent(index);
              window.scrollTo({
                top: window.innerHeight * index,
                behavior: "smooth",
              });
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center relative h-screen pt-[450px]">
        <div className="flex flex-col z-40 justify-center items-center gap-y-4 absolute top-32">
          <span className="text-5xl md:text-6xl lg:text-8xl text-black pl-3">
            {details[current].title.toUpperCase()}
          </span>
          <span className="text-black text-3xl md:text-4xl w-full text-left pl-3">
            {details[current].subtitle}
          </span>
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute  h-96 left-16 hidden lg:flex justify-center items-center  "
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <img
              src={image}
              className={`w-full h-full object-cover ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
              alt={`Slide ${index + 1}`}
              style={{
                opacity: current === index ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            />
          </div>
        ))}

        {images.map((image, index) => (
          <div
            key={index}
            className="absolute h-96 right-16 bottom-9 hidden lg:flex  justify-center items-center"
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <img
              src={image}
              className={`w-full h-full object-cover ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
              alt={`Slide ${index + 1}`}
              style={{
                opacity: current === index ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            />
          </div>
        ))}
        <img
          src={
            current === 0
              ? "test.png"
              : current === 1
              ? "test2.png"
              : "test.png"
          }
          className="tilt transform skew-y-12 w-[661px] h-[340px] absolute bottom-[150px] z-50"
        />
        <img src="mixed.png" alt="piano" className="h-[300px] md:h-[700px] z-10" />
      </div>

      {/* Next Section */}
    </div>
  );
};

export default HeroComp;
