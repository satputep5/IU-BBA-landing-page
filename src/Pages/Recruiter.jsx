import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/Images/bba-logo/Wireframe - 1.png";
import logo2 from "../assets/Images/bba-logo/Wireframe - 2.png";
import logo3 from "../assets/Images/bba-logo/Wireframe - 3.png";
import logo4 from "../assets/Images/bba-logo/Wireframe - 4.png";
import logo5 from "../assets/Images/bba-logo/Wireframe - 5.png";
import logo6 from "../assets/Images/bba-logo/Wireframe - 6.png";
import logo7 from "../assets/Images/bba-logo/Wireframe - 7.png";
import logo8 from "../assets/Images/bba-logo/Wireframe - 8.png";
import logo9 from "../assets/Images/bba-logo/Wireframe - 9.png";
import logo10 from "../assets/Images/bba-logo/Wireframe - 10.png";
import logo11 from "../assets/Images/bba-logo/Wireframe - 11.png";
import logo12 from "../assets/Images/bba-logo/Wireframe - 12.png";
import logo13 from "../assets/Images/bba-logo/Wireframe - 13.png";
import logo14 from "../assets/Images/bba-logo/Wireframe - 14.png";
import logo15 from "../assets/Images/bba-logo/Wireframe - 15.png";
import logo16 from "../assets/Images/bba-logo/Wireframe - 16.png";
import logo17 from "../assets/Images/bba-logo/Wireframe - 17.png";
import logo18 from "../assets/Images/bba-logo/Wireframe - 18.png";
import logo19 from "../assets/Images/bba-logo/Wireframe - 19.png";
import logo20 from "../assets/Images/bba-logo/Wireframe - 20.png";
import logo21 from "../assets/Images/bba-logo/Wireframe - 21.png";
import logo22 from "../assets/Images/bba-logo/Wireframe - 22.png";
import logo23 from "../assets/Images/bba-logo/Wireframe - 23.png";
import logo24 from "../assets/Images/bba-logo/Wireframe - 24.png";
import logo25 from "../assets/Images/bba-logo/Wireframe - 25.png";
import logo26 from "../assets/Images/bba-logo/Wireframe - 26.png";
import logo27 from "../assets/Images/bba-logo/Wireframe - 27.png";
import logo28 from "../assets/Images/bba-logo/Wireframe - 28.png";
import logo29 from "../assets/Images/bba-logo/Wireframe - 29.png";
import logo30 from "../assets/Images/bba-logo/Wireframe - 30.png";
import logo31 from "../assets/Images/bba-logo/Wireframe - 31.png";
import logo32 from "../assets/Images/bba-logo/Wireframe - 32.png";


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
    <div className="flex poppins-regular flex-col justify-center items-center py-6 md:py-12 bg-white px-0 md:px-16 font-poppins">
      {/* Heading above the slider */}
      <div className="text-xl md:text-3xl font-semibold text-gray-800 mb-6">
        Our Recruiters
      </div>

      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-center w-full px-4">
              <div
                className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center w-full px-6"
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
