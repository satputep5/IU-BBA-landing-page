import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import std1 from "../assets/Images/std1.avif";
import std2 from "../assets/Images/std2.avif";
import std3 from "../assets/Images/std3.avif";
import std4 from "../assets/Images/std4.avif";
import std5 from "../assets/Images/std5.avif";
import std6 from "../assets/Images/std6.avif";
import std7 from "../assets/Images/std7.avif";
import std8 from "../assets/Images/std8.avif";
import std9 from "../assets/Images/std9.avif";
import std10 from "../assets/Images/std10.avif";

const students = [
  { name: "Aman Nishikant Sawarkar", image: std1 },
  { name: "Akash Raghunath Malpure", image: std2 },
  { name: "Harshada Navale", image: std3 },
  { name: "Harsh Navale", image: std4 },
  { name: "Rajesh Kumar", image: std6 },
  { name: "Sneha Patel", image: std7 },
  { name: "Pratim Navale", image: std5 },
  { name: "Vishal Deshmukh", image: std8 },
  { name: "Anjali Sharma", image: std9 },
  { name: "Rohan Gupta", image: std10 },
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
    autoplaySpeed: 1300,
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
    <div className="flex justify-center items-center w-full lg:w-1/2 min-h-[70vh] md:min-h-[80vh] relative my-4 overflow-hidden">
      {/* Slider Container */}
      <div className="absolute z-30 w-full h-full flex justify-center items-center">
        <Slider {...settings} className="w-full">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full h-full"
              style={{ padding: "10px" }} // Adjusted padding for better responsiveness
            >
              {/* Profile Image Container */}
              <div className="flex justify-center items-center w-full h-full mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full md:w-full h-full md:h-[70vh] object-contain"
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
