import React from "react";
import MyImage from "../../assets/Images/iu-campus.png"; // Import your image
import Image1 from "../../assets/Images/int-bus.jpg"; // Import your 3D-style image
// import CircleImage from "../../assets/Images/green-circle.png"; // Import your tiny circle PNG image
import SmallCircleImage from "../../assets/Images/green-circle.png"; // Import your smaller circle PNG image

function MarketingManagementStudying() {
  return (
    <div className="flex flex-wrap   md:h-[50vh] px-4 md:px-16 py-4 md:py-8 mb-2 poppins-regular">
      {/* Left Section: Image and Floating Elements */}
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-white relative">
        {/* Main Image */}
        <img
          src={MyImage}
          alt="Finance Management"
          className="w-full h-full object-cover rounded-t-xl pr-0 md:pr-10"
        />

        {/* 3D Effect Image */}
        <img
          src={Image1}
          alt="3D Image"
          className="w-1/2 h-auto object-cover absolute bottom-10 right-2 md:-right-4 transform shadow-lg rounded-lg z-10"
        />

        {/* Floating Circle 1 */}
        {/* <img
          src={CircleImage}
          alt="Floating Circle"
          className="absolute top-[30%] right-[25%] w-16 h-16 animate-float z-20"
        /> */}

        {/* Floating Circle 2 */}
        <img
          src={SmallCircleImage}
          alt="Floating Small Circle"
          className="absolute bottom-[10%] left-[1%] w-12 h-12 animate-float-slow z-20"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 pl-8 flex flex-col justify-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-left text-[#1f2937] mb-4">
          Why International Business?
        </h1>
        <h2 className="text-2xl font-light text-left text-[#6C5CE7] mb-6">
          International Business Programme
        </h2>

        <p className="text-lg text-gray-600 tracking-wide">
          In today’s interconnected world, businesses no longer operate within a
          single country—they expand across global markets, navigate
          international trade policies, and engage in cross-border investments.
          If you dream of a career in global business management, this program
          equips you with export-import expertise, foreign exchange knowledge,
          and international marketing strategies to thrive in the global
          economy.
        </p>
      </div>
    </div>
  );
}

export default MarketingManagementStudying;
