import React from "react";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaPenAlt,
  FaUsers,
} from "react-icons/fa";
import MyImage from "../../assets/Images/iu-campus.png"; // Import your image
import Image1 from "../../assets/Images/mm-study.png"; // Import your 3D-style image
import CircleImage from "../../assets/Images/green-circle.png"; // Import your tiny circle PNG image
import SmallCircleImage from "../../assets/Images/red-circle.png"; // Import your smaller circle PNG image

function BankingAndFinancialServicesStudying() {
  return (
    <div className="flex px-8 md:px-16 py-12 mb-12 poppins-regular h-screen">
      {/* Left Side (Vertical Navy Container with Full Height, Image on Top, and Rounded Top Corners) */}
      <div className="w-1/2 bg-white h-full relative overflow-hidden">
        {/* Image with object-cover property and rounded top corners */}
        <img
          src={MyImage}
          alt="Banking and Financial Services"
          className="w-7/10 h-full object-cover absolute top-0 left-0 rounded-t-full"
        />

        {/* 3D Image on the right corner */}
        <img
          src={Image1} // You can replace with a different 3D-style image if needed
          alt="3D Image"
          className="w-1/2 h-56 object-cover absolute bottom-10 right-0 transform shadow-lg rounded-lg"
        />

        {/* Floating Tiny Circle PNG (Larger Circle) */}
        <img
          src={CircleImage} // Tiny circle PNG image
          alt="Floating Circle"
          style={{
            position: "absolute",
            top: "30%",
            right: "25%",
            width: "70px", // Adjust size as needed
            height: "70px", // Adjust size as needed
            animation: "float 2s ease-in-out infinite",
          }}
        />

        {/* Floating Tiny Circle PNG (Smaller Circle at Bottom Left) */}
        <img
          src={SmallCircleImage} // Smaller circle PNG image
          alt="Floating Small Circle"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "1%",
            width: "50px", // Smaller size
            height: "50px", // Smaller size
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Right Side (Text Content Section with Dynamic Height) */}
      <div className="w-[50%] pl-8 flex flex-col">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#264653]">
          Studying Banking & Financial Services at Indira University
        </h1>
        <h1 className="text-4xl font-extralight text-left text-[#264653] mb-6">
          Banking & Financial Services Program
        </h1>
        <p className="text-left text-lg mb-6 text-[#264653]">
          Indira University offers an in-depth Banking & Financial Services
          program designed to provide students with a strong foundation in
          financial analysis, banking operations, investment strategies, and
          economic theory. The program equips students with the skills required
          to excel in the dynamic financial sector.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-6 flex-grow">
          {/* Card 1 */}
          <div className="bg-[#f1f7f6] p-4 shadow-lg shadow-[#264653]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaBullhorn className="text-[#264653] mr-4 text-4xl" />
              <span className="text-sm text-[#264653]">
                25+ YEARS OF FINANCIAL EXCELLENCE
              </span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#f1f7f6] p-4 shadow-lg shadow-[#264653]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaHandshake className="text-[#264653] mr-4 text-4xl" />
              <span className="text-sm text-[#264653]">
                500+ INDUSTRY PARTNERS
              </span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#f1f7f6] p-4 shadow-lg shadow-[#264653]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaChartLine className="text-[#264653] mr-4 text-4xl" />
              <span className="text-sm text-[#264653]">
                INNOVATIVE FINANCIAL STRATEGIES
              </span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#f1f7f6] p-4 shadow-lg shadow-[#264653]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaRegCalendarAlt className="text-[#264653] mr-4 text-4xl" />
              <span className="text-sm text-[#264653]">
                EXPOSURE TO GLOBAL FINANCIAL TRENDS
              </span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-[#f1f7f6] p-4 shadow-lg shadow-[#264653]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaPenAlt className="text-[#264653] mr-4 text-4xl" />
              <span className="text-sm text-[#264653]">
                HANDS-ON FINANCIAL ANALYSIS
              </span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-[#f1f7f6] p-4 shadow-lg shadow-[#264653]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaUsers className="text-[#264653] mr-4 text-4xl" />
              <span className="text-sm text-[#264653]">
                EXCEPTIONAL TEAM-BUILDING SKILLS
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankingAndFinancialServicesStudying;
