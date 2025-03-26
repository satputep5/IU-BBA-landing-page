import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dummyuserImage from "../assets/Images/dum-plac.png";
import accentureLogo from "../assets/Images/acc.png";  // Import company logos
import airtelLogo from "../assets/Images/air.png";
import amazonLogo from "../assets/Images/amz.png";

// Sample student data (3 students)
const students = [
  {
    name: "Aman Nishikant Sawarkar",
    department: "BBA",
    lpa: "4.5 LPA",
    companyLogo: accentureLogo, // Use the company logo image instead of name
    image: dummyuserImage, 
  },
  {
    name: "Akash Raghunath Malpure",
    department: " BBA",
    lpa: "5.3 LPA",
    companyLogo: airtelLogo, // Use the company logo image instead of name
    image: dummyuserImage, 
  },
  {
    name: "Harshada Navale",
    department: " BBA-IB",
    lpa: "4.5 LPA",
    companyLogo: amazonLogo, // Use the company logo image instead of name
    image: dummyuserImage, 
  },
];

function RightSideSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active student index

  const settings = {
    infinite: true, // Enable infinite loop
    slidesToShow: 1, // Show 1 student at a time
    slidesToScroll: 1, // Scroll 1 student at a time
    dots: false, // Remove navigation dots
    arrows: false, // Remove navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides
    centerMode: true, // Enable centering of the slide
    centerPadding: "0", // Remove any padding around the centered slide
    focusOnSelect: true, // Focus on selecting the active slide
    beforeChange: (current, next) => {
      setActiveIndex(next); // Update the active index on slide change
    },
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center w-1/2 min-h-screen relative overflow-hidden">
      {/* Inline Style for Floating Effect */}
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

      {/* Circular LPA Container with floating effect */}
      <div
        className="absolute z-20 w-32 h-32 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-semibold animate-float"
        style={{
          top: "20px",
          left: "20px",
          flexDirection: "column", // Stack text and LPA vertically
        }}
      >
        <span className="text-md">CTC</span> {/* Add CTC as a label */}
        <span className="text-xl">{students[activeIndex].lpa}</span> {/* Display the LPA value */}
      </div>

      {/* Student Profiles Slider */}
      <div className="absolute z-30 w-full h-full flex justify-center items-center mb-28">
        <Slider {...settings} className="w-full">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full h-full "
              style={{ padding: "20px" }} // Ensuring the container is well-spaced
            >
              {/* Center the profile image container */}
              <div className="flex justify-center items-center w-full h-full  overflow-hidden mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Information */}
              <h3 className="text-xl font-semibold text-center">{student.name}</h3>
              <p className="text-md text-gray-900 text-center">{student.department}</p>
              {/* Company Logo Instead of Name */}
              <div className="flex justify-center items-center rounded-2xl">
                <img
                  src={student.companyLogo}
                  alt={student.companyLogo}
                  className="w-42 h-42 object-contain rounded-2xl"
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
