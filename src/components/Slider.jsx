import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings}>
      <div className=" flex flex-col justify-center items-center w-full p-2 pl-5">
        <div className=" overflow-hidden rounded-3xl">
          <img
            className="object-cover h-full w-full "
            src=" https://images.ctfassets.net/rbzqg6pelgqa/2UF2zgHQaHkHUWoVNcZwDC/c801232cb6f5208a2e6fb879935ba6a7/1-world-class-tech-alt2__1_.webp"
          />
        </div>

        <div className="text-white mt-5">
          <h1 className="mb-4 regularText text-2xl md:text-3xl">World-class wearable tech</h1>
          <div className="thinText text-lg md:text-2xl">
            Get the state-of-the-art WHOOP sensor, an ultra-durable,
            ultra-comfortable Onyx SuperKnit band, and a waterproof, wireless
            battery pack—all included with purchase. WHOOP is IP68 dust-proof
            and water-resistant at depths up to 10 meters (roughly 32 feet) for
            up to 2 hours and{" "}
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full p-2 pl-5">
      <div className="overflow-hidden rounded-3xl">
            <img className="object-cover h-full w-full " src="https://images.ctfassets.net/rbzqg6pelgqa/6HI3utrRDaUi4CKMhYuVIX/87955835dd54c35d53c9979a81557f23/2-app-alt.webp"/>
          </div>

          <div className="text-white mt-5">
          <h1 className="mb-4 regularText text-2xl">World-class wearable tech</h1>
          <div className="thinText text-lg">
            Get the state-of-the-art WHOOP sensor, an ultra-durable,
            ultra-comfortable Onyx SuperKnit band, and a waterproof, wireless
            battery pack—all included with purchase. WHOOP is IP68 dust-proof
            and water-resistant at depths up to 10 meters (roughly 32 feet) for
            up to 2 hours and{" "}
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full p-2 pl-5">
      <div className="overflow-hidden rounded-3xl ">
            <img className="object-cover h-full w-full " src=" https://images.ctfassets.net/rbzqg6pelgqa/68EtH8AW7uhGCffGyA7PhC/67d5af905309749fa14775c62bb06e3c/3-research-alt__1___1_.webp"/>
          </div>

          <div className="text-white mt-5">
          <h1 className="mb-4 regularText text-2xl">World-class wearable tech</h1>
          <div className="thinText text-lg">
            Get the state-of-the-art WHOOP sensor, an ultra-durable,
            ultra-comfortable Onyx SuperKnit band, and a waterproof, wireless
            battery pack—all included with purchase. WHOOP is IP68 dust-proof
            and water-resistant at depths up to 10 meters (roughly 32 feet) for
            up to 2 hours and{" "}
          </div>
        </div>
      </div>
  
    </Slider>
  );
}
