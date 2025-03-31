import React from "react";

// Import only relevant icons for the additional content
import { FaCogs, FaRobot, FaBriefcase } from "react-icons/fa";

// Import images for the page
import MyImage from "../../assets/Images/iu-campus.png"; // Main campus image
import Image1 from "../../assets/Images/lscm-std.jpg"; // 3D-style image
import CircleImage from "../../assets/Images/green-circle.png"; // Floating larger circle
import SmallCircleImage from "../../assets/Images/green-circle.png"; // Floating smaller circle

function MarketingManagementStudying() {
  return (
    <div className="flex flex-wrap  px-4 md:px-16 py-4 md:py-8 mb-2 ">
      {/* Left Section: Image and Floating Elements */}
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
        <img
          src={CircleImage}
          alt="Floating Circle"
          className="absolute top-[30%] right-[25%] w-16 h-16 animate-float z-20"
        />

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
          What You Will Learn: From Warehouses to Whiteboards
        </h1>
        <h2 className="text-2xl font-light text-left text-[#f07a1d] mb-6">
          Logistics & Supply Chain Management Program
        </h2>

        {/* Container for Year Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Year 1 */}
          <div className="flex flex-col items-start space-y-4">
            <div className="text-md text-[#1f2937]">
              <strong>Year 1:</strong>
              <ul className="list-disc pl-2">
                <li>Logistics Fundamentals</li>
                <li>Inventory Management</li>
                <li>Procurement Basics</li>
              </ul>
            </div>
          </div>

          {/* Year 2 */}
          <div className="flex flex-col items-start space-y-4">
            <div className="text-md text-[#1f2937]">
              <strong>Year 2:</strong>
              <ul className="list-disc pl-2">
                <li>Transportation Networks</li>
                <li>Warehouse Optimization</li>
                <li>Demand Forecasting</li>
              </ul>
            </div>
          </div>

          {/* Year 3 */}
          <div className="flex flex-col items-start space-y-4">
            <div className="text-md text-[#1f2937]">
              <strong>Year 3:</strong>
              <ul className="list-disc pl-2">
                <li>Global Supply Chains</li>
                <li>AI & Automation in Logistics</li>
                <li>Risk Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="space-y-4">
          {/* Amazon-style Logistics Simulations */}
          <div className="flex items-center text-lg text-[#1f2937]">
            <FaCogs size={36} className="mr-3 text-[#f07a1d]" />
            <span>
              <strong>Amazon-style Logistics Simulations</strong> – Learn the secrets behind their efficiency!
            </span>
          </div>

          {/* AI in Supply Chain */}
          <div className="flex items-center text-lg text-[#1f2937]">
            <FaRobot size={36} className="mr-3 text-[#f07a1d]" />
            <span>
              <strong>AI in Supply Chain</strong> – Discover how companies like DHL & Flipkart use AI for cost reduction.
            </span>
          </div>

          {/* Live Industry Case Studies */}
          <div className="flex items-center text-lg text-[#1f2937]">
            <FaBriefcase size={36} className="mr-3 text-[#f07a1d]" />
            <span>
              <strong>Live Industry Case Studies</strong> – Work on real supply chain disruptions & solutions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementStudying;
