import React from "react";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/mm-study.png";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/red-circle.png";

function FinanceManagementStudying() {
  return (
    <div className="flex px-8 md:px-16 py-8 mb-2 poppins-regular">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-white relative overflow-hidden">
        {/* Main Image */}
        <img
          src={MyImage}
          alt="Finance Management"
          className="w-full h-full object-cover absolute top-0 right-20 rounded-t-xl"
        />

        {/* 3D Effect Image */}
        <img
          src={Image1}
          alt="3D Image"
          className="w-1/2 h-auto object-cover absolute bottom-10 right-0 transform shadow-lg rounded-lg z-10"
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

      {/* Right Side */}
      <div className="w-full md:w-[50%] pl-8 flex flex-col">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#000000]">
          Studying Finance Management at Indira University
        </h1>
        <h1 className="text-4xl font-extralight text-left text-[#1D3557] mb-4">
          Finance Management Program
        </h1>

        <div className="text-left text-lg mb-1 text-[#000000]">
          <div className="flex items-center gap-4 mb-4">
            <FaChartLine className="text-[#1D3557]" size={24} />
            <span className="font-semibold">Year 1:</span>
            <span>Accounting, Financial Mathematics, Investment Basics</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaBullhorn className="text-[#388A86]" size={24} />
            <span className="font-semibold">Year 2:</span>
            <span>Stock Markets, Financial Modeling, Risk Management</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaHandshake className="text-[#09955D]" size={24} />
            <span className="font-semibold">Year 3:</span>
            <span>Wealth Management, Mergers & Acquisitions, Corporate Finance</span>
          </div>
        </div>

        <p className="text-2xl text-[#1D3557] tracking-wide my-2">
          <span className="block text-left mb-1">Dream Big?</span> 
          Investment Bankers at firms like Goldman Sachs earn ₹50+ LPA!
        </p>

        <p className="text-lg text-[#000000] tracking-wide my-1">
          💰 BBA in Finance Salary in India – Freshers earn ₹6-8 LPA, while experienced professionals go beyond ₹30+ LPA in top firms like Goldman Sachs, JP Morgan, and Deloitte.
        </p>
      </div>
    </div>
  );
}

export default FinanceManagementStudying;
