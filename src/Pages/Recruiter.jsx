import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/Images/bba-logo/Wireframe - 1.avif";
import logo2 from "../assets/Images/bba-logo/Wireframe - 2.avif";
import logo3 from "../assets/Images/bba-logo/Wireframe - 3.avif";
import logo4 from "../assets/Images/bba-logo/Wireframe - 4.avif";
import logo5 from "../assets/Images/bba-logo/Wireframe - 5.avif";
import logo6 from "../assets/Images/bba-logo/Wireframe - 6.avif";
import logo7 from "../assets/Images/bba-logo/Wireframe - 7.avif";
import logo8 from "../assets/Images/bba-logo/Wireframe - 8.avif";
import logo9 from "../assets/Images/bba-logo/Wireframe - 9.avif";
import logo10 from "../assets/Images/bba-logo/Wireframe - 10.avif";
import logo11 from "../assets/Images/bba-logo/Wireframe - 11.avif";
import logo12 from "../assets/Images/bba-logo/Wireframe - 12.avif";
import logo13 from "../assets/Images/bba-logo/Wireframe - 13.avif";
import logo14 from "../assets/Images/bba-logo/Wireframe - 14.avif";
import logo15 from "../assets/Images/bba-logo/Wireframe - 15.avif";
import logo16 from "../assets/Images/bba-logo/Wireframe - 16.avif";
import logo17 from "../assets/Images/bba-logo/Wireframe - 17.avif";
import logo18 from "../assets/Images/bba-logo/Wireframe - 18.avif";
import logo19 from "../assets/Images/bba-logo/Wireframe - 19.avif";
import logo20 from "../assets/Images/bba-logo/Wireframe - 20.avif";
import logo21 from "../assets/Images/bba-logo/Wireframe - 21.avif";
import logo22 from "../assets/Images/bba-logo/Wireframe - 22.avif";
import logo23 from "../assets/Images/bba-logo/Wireframe - 23.avif";
import logo24 from "../assets/Images/bba-logo/Wireframe - 24.avif";
import logo25 from "../assets/Images/bba-logo/Wireframe - 25.avif";
import logo26 from "../assets/Images/bba-logo/Wireframe - 26.avif";
import logo27 from "../assets/Images/bba-logo/Wireframe - 27.avif";
import logo28 from "../assets/Images/bba-logo/Wireframe - 28.avif";
import logo29 from "../assets/Images/bba-logo/Wireframe - 29.avif";
import logo30 from "../assets/Images/bba-logo/Wireframe - 30.avif";
import logo31 from "../assets/Images/bba-logo/Wireframe - 31.avif";
import logo32 from "../assets/Images/bba-logo/Wireframe - 32.avif";


const sponsorsData = [
  {
    title: "PARTICIPATING DELEGATES",
    logos: [
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8,
      logo9,
      logo10,
      logo11,
      logo12,
      logo13,
      logo14,
      logo15,
      logo16,
    ],
  },
  {
    title: "PARTICIPATING DELEGATES",
    logos: [
      logo17,
      logo18,
      logo19,
      logo20,
      logo21,
      logo22,
      logo23,
      logo24,
      logo25,
      logo26,
      logo27,
      logo28,
      logo29,
      logo30,
      logo31,
      logo32,
    ],
  },
];


const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex poppins-regular flex-col justify-center items-center py-6 md:py-12 bg-white px-0 md:px-16 font-poppins overflow-hidden">
      {/* Heading above the slider */}
      <div className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
        Our Recruiters
      </div>

      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-center w-full ">
              <div
                className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center w-full px-6 md:px-0"
                style={{ gridTemplateRows: "repeat(2, auto)" }} // Enforcing only two rows
              >
                {slide.logos.map((logo, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="rounded-none shadow-none w-auto h-auto object-contain" // Logos will scale dynamically without any background styling
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
