import React from "react";

// Import images for the page
import MyImage from "../../assets/Images/iu-campus.png"; // Main campus image
import Image1 from "../../assets/Images/std-hr.jpg"; // 3D-style image
import CircleImage from "../../assets/Images/green-circle.png"; // Floating larger circle
import SmallCircleImage from "../../assets/Images/green-circle.png"; // Floating smaller circle

function MarketingManagementStudying() {
  return (
    <div className="flex px-6 md:px-16 py-16 bg-[#f9fafb]">
      {/* Left Section: Image and Floating Elements */}
      <div className="w-full md:w-[40%] bg-white rounded-lg relative overflow-hidden">
        {/* Main Campus Image */}
        <img
          src={MyImage}
          alt="Marketing Management Campus"
          className="w-auto h-full object-cover absolute top-0 right-24 rounded-t-lg"
        />

        {/* 3D Image at the bottom-right */}
        <img
          src={Image1}
          alt="3D Study Image"
          className="w-60 h-48 object-contain absolute bottom-8 right-8 transform shadow-lg rounded-lg"
        />

        {/* Floating Large Circle */}
        <img
          src={CircleImage}
          alt="Floating Large Circle"
          className="absolute top-[25%] right-[20%] w-16 h-16 animation-float"
        />

        {/* Floating Small Circle */}
        <img
          src={SmallCircleImage}
          alt="Floating Small Circle"
          className="absolute bottom-[10%] left-[5%] w-12 h-12 animation-float-slow"
        />
      </div>

      {/* Right Side (Text Content Section with Dynamic Height) */}
      <div className="w-[60%] pl-8 flex flex-col">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#000000]">
          Studying Human Resource Management at Indira University
        </h1>
        <h1 className="text-4xl font-extralight text-left text-[#2A9D64] mb-6">
          Human Resource Management Program
        </h1>

        <h2 className="text-2xl font-bold text-left mb-4 text-[#000000]">
          What Will You Learn? (A People-First Approach)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-6 text-[#000000]">
          {/* Year 1 */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-[#2A9D64] mb-4">
              Year 1: Fundamentals of HR
            </h3>
            <ul className="list-disc pl-5 text-md">
              <li>Organizational Behavior</li>
              <li>Workplace Psychology</li>
              <li>Introduction to HR Management</li>
              <li>HR Ethics and Legal Issues</li>
            </ul>
          </div>

          {/* Year 2 */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-[#2A9D64] mb-4">
              Year 2: Talent Management
            </h3>
            <ul className="list-disc pl-5 text-md">
              <li>Talent Acquisition</li>
              <li>Performance Management</li>
              <li>HR Analytics</li>
              <li>Employee Engagement</li>
            </ul>
          </div>

          {/* Year 3 */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-[#2A9D64] mb-4">
              Year 3: Leadership & Strategy
            </h3>
            <ul className="list-disc pl-5 text-md">
              <li>Leadership Development</li>
              <li>Global HR Strategies</li>
              <li>HR Tech and Innovation</li>
              <li>Strategic HR Planning</li>
            </ul>
          </div>
        </div>

        <div className="text-left text-md mb-6 text-[#000000]">
          <p className="flex items-center">
            <strong>AI & HR Tech</strong> – Learn how AI is reshaping talent management.
          </p>
          <p className="flex items-center">
            <strong>Emotional Intelligence Training</strong> – Understand the psychology behind leadership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementStudying;
