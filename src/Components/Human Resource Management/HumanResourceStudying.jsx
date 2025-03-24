import React from "react";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaUsers,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import MyImage from "../../assets/Images/iu-campus.png"; // Import your image
import Image1 from "../../assets/Images/mm-study.png"; // Import your 3D-style image
import CircleImage from "../../assets/Images/green-circle.png"; // Import your tiny circle PNG image
import SmallCircleImage from "../../assets/Images/green-circle.png"; // Import your smaller circle PNG image

function HumanResourceStudying() {
  return (
    <div className="flex px-8 md:px-16 py-2 mb-2 poppins-regular h-[60vh]">
      {/* Left Side (Vertical Green Container with Full Height, Image on Top, and Rounded Top Corners) */}
      <div className="w-1/2 bg-white h-full relative overflow-hidden">
        {/* Image with object-cover property and rounded top corners */}
        <img
          src={MyImage}
          alt="Human Resource Management"
          className="w-7/10 h-full object-cover absolute top-0 left-0 rounded-t-full"
        />

        {/* 3D Image on the right corner */}
        <img
          src={Image1}  // You can replace with a different 3D-style image if needed
          alt="3D Image"
          className="w-1/2 h-56 object-cover absolute bottom-10 right-0 transform shadow-lg rounded-lg"
        />

        {/* Floating Tiny Circle PNG (Larger Circle) */}
        <img
          src={CircleImage}  // Tiny circle PNG image
          alt="Floating Circle"
          style={{
            position: "absolute",
            top: "30%",
            right: "25%",
            width: "70px",  // Adjust size as needed
            height: "70px", // Adjust size as needed
            animation: "float 2s ease-in-out infinite",
          }}
        />

        {/* Floating Tiny Circle PNG (Smaller Circle at Bottom Left) */}
        <img
          src={SmallCircleImage}  // Smaller circle PNG image
          alt="Floating Small Circle"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "1%",
            width: "50px",  // Smaller size
            height: "50px", // Smaller size
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Right Side (Text Content Section with Dynamic Height) */}
      <div className="w-[50%] pl-8 flex flex-col">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#000000]">
          Studying Human Resource Management at Indira University
        </h1>
        <h1 className="text-4xl font-extralight text-left text-[#2A9D64] mb-6">
          Human Resource Management Program
        </h1>

        <h2 className="text-2xl font-bold text-left mb-4 text-[#000000]">
          What Will You Learn? (A People-First Approach)
        </h2>

        <div className="text-left text-lg mb-6 text-[#000000]">
          <p className="flex items-center">
            <FaRegCalendarAlt className="mr-2 text-[#2A9D64]" size={20} />
            <strong>Year 1:</strong> Fundamentals of HR, Organizational Behavior, Workplace Psychology
          </p>
          <p className="flex items-center">
            <FaUsers className="mr-2 text-[#2A9D64]" size={20} />
            <strong>Year 2:</strong> Talent Acquisition, Performance Management, HR Analytics
          </p>
          <p className="flex items-center">
            <FaChartLine className="mr-2 text-[#2A9D64]" size={20} />
            <strong>Year 3:</strong> Leadership Development, HR Tech, Global HR Strategies
          </p>
        </div>

        <h2 className="text-2xl font-bold text-left mb-4 text-[#000000]">
          Exclusive Add-ons:
        </h2>

        <div className="text-left text-lg mb-6 text-[#000000]">
          <p className="flex items-center">
            <FaRobot className="mr-2 text-[#2A9D64]" size={20} />
            <strong>AI & HR Tech</strong> – Learn how AI is reshaping talent management.
          </p>
          <p className="flex items-center">
            <FaBrain className="mr-2 text-[#2A9D64]" size={20} />
            <strong>Emotional Intelligence Training</strong> – Understand the psychology behind leadership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HumanResourceStudying;
