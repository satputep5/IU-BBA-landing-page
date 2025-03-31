import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import std1 from "../assets/Images/placstd1.png";
import std2 from "../assets/Images/placstd2.png";
import std3 from "../assets/Images/placstd3.png";
import std4 from "../assets/Images/placstd4.png";
import std5 from "../assets/Images/placstd2.png";

const students = [
  {
    name: "Aman Nishikant Sawarkar",
    image: std1,
  },
  {
    name: "Akash Raghunath Malpure",
    image: std2,
  },
  {
    name: "Harshada Navale",
    image: std3,
  },
  {
    name: "Harsh Navale",
    image: std4,
  },
  {
    name: "Pratim Navale",
    image: std5,
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
    <div className="flex justify-center items-center w-full lg:w-1/2 min-h-[50vh] md:min-h-[70vh] relative my-4 overflow-hidden">

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
              <div className="flex justify-center items-center w-full h-full  mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full md:w-full h-full md:h-[70vh] object-contain "
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
