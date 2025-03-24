import React from "react";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaMapPin,
  FaArrowRight,
  FaClipboardList,
  FaTruck,
  FaGlobe,
  FaCogs,
  FaRobot,
  FaBriefcase
} from "react-icons/fa";

// Import images for the page
import MyImage from "../../assets/Images/iu-campus.png"; // Main campus image
import Image1 from "../../assets/Images/lscm-std.jpg"; // 3D-style image
import CircleImage from "../../assets/Images/green-circle.png"; // Floating larger circle
import SmallCircleImage from "../../assets/Images/green-circle.png"; // Floating smaller circle

function MarketingManagementStudying() {
  return (
    <div className="flex px-6 md:px-16 py-16 bg-[#ffffff]">
      {/* Left Section: Image and Floating Elements */}
      <div className="w-full md:w-1/2 bg-white rounded-lg relative overflow-hidden">
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
          className="w-60 h-48 object-cover absolute bottom-8 right-8 transform shadow-lg rounded-lg"
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

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 pl-8 flex flex-col justify-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-left text-[#1f2937] mb-4">
          What You Will Learn: From Warehouses to Whiteboards
        </h1>
        <h2 className="text-2xl font-light text-left text-[#f07a1d] mb-6">
          Logistics & Supply Chain Management Program
        </h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <FaClipboardList size={36} className="mr-3 text-[#f07a1d]" />
            <span className="text-lg text-[#1f2937]">
              <strong>Year 1:</strong> Logistics Fundamentals | Inventory Management | Procurement Basics
            </span>
          </div>
          <div className="flex items-center">
            <FaTruck size={36} className="mr-3 text-[#f07a1d]" />
            <span className="text-lg text-[#1f2937]">
              <strong>Year 2:</strong> Transportation Networks | Warehouse Optimization | Demand Forecasting
            </span>
          </div>
          <div className="flex items-center">
            <FaGlobe size={36} className="mr-3 text-[#f07a1d]" />
            <span className="text-lg text-[#1f2937]">
              <strong>Year 3:</strong> Global Supply Chains | AI & Automation in Logistics | Risk Management
            </span>
          </div>

          <div className="flex items-center">
            <FaCogs size={36} className="mr-3 text-[#f07a1d]" />
            <span className="text-lg text-[#1f2937]">
              <strong>Amazon-style Logistics Simulations</strong> – Learn the secrets behind their efficiency!
            </span>
          </div>

          <div className="flex items-center">
            <FaRobot size={36} className="mr-3 text-[#f07a1d]" />
            <span className="text-lg text-[#1f2937]">
              <strong>AI in Supply Chain</strong> – Discover how companies like DHL & Flipkart use AI for cost reduction.
            </span>
          </div>

          <div className="flex items-center">
            <FaBriefcase size={36} className="mr-3 text-[#f07a1d]" />
            <span className="text-lg text-[#1f2937]">
              <strong>Live Industry Case Studies</strong> – Work on real supply chain disruptions & solutions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementStudying;
