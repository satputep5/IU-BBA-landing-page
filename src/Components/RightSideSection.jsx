import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dummyuserImage from "../assets/Images/dum-plac.png";
import accentureLogo from "../assets/Images/acc.png";
import airtelLogo from "../assets/Images/air.png";
import amazonLogo from "../assets/Images/amz.png";

const students = [
  {
    name: "Aman Nishikant Sawarkar",
    department: "BBA",
    lpa: "4.5 LPA",
    companyLogo: accentureLogo,
    image: dummyuserImage,
  },
  {
    name: "Akash Raghunath Malpure",
    department: " BBA",
    lpa: "5.3 LPA",
    companyLogo: airtelLogo,
    image: dummyuserImage,
  },
  {
    name: "Harshada Navale",
    department: " BBA-IB",
    lpa: "4.5 LPA",
    companyLogo: amazonLogo,
    image: dummyuserImage,
  },
];

function RightSideSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center w-full lg:w-1/2 min-h-[35vh] md:min-h-[80vh] relative overflow-hidden my-4">
      {/* Floating effect */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
          
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        `}
      </style>

      {/* Circular LPA Container */}
      <div
        className="absolute z-20 w-16  md:w-32 h-16  md:h-32 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs sm:text-sm md:text-xl font-semibold animate-float"
        style={{
          top: "20px",
          left: "20px",
          flexDirection: "column",
        }}
      >
        <span className="text-xs sm:text-sm md:text-md">CTC</span>
        <span className="text-sm sm:text-lg md:text-xl">
          {students[activeIndex].lpa}
        </span>
      </div>

      {/* Slider Container */}
      <div className="absolute z-30 w-full h-full flex justify-center items-center ">
        <Slider {...settings} className="w-full">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full h-full"
              style={{ padding: "10px" }} // Adjusted padding for better responsiveness
            >
              {/* Profile Image Container */}
              <div className="flex justify-center items-center w-full h-full overflow-hidden mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-28 md:w-full h-28 md:h-full object-cover rounded-full"
                />
              </div>
              {/* Text Information */}
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-center">
                {student.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-md text-gray-900 text-center">
                {student.department}
              </p>
              {/* Company Logo */}
              <div className="flex justify-center items-center rounded-2xl px-4">
                <img
                  src={student.companyLogo}
                  alt={student.companyLogo}
                  className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 object-contain rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RightSideSection;
