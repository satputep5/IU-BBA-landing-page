import React from "react";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/mm-study.png";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/red-circle.png";
import Image2 from "../../assets/Images/goldman-sachs1.webp";

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

        {/* Horizontal Year Sections */}
        <div className="flex justify-between mb-8">
          {/* Year 1 */}
          <div className="text-center">
            
            <h2 className="text-xl font-semibold mb-2">Year 1</h2>
            <ul className="list-disc ml-4 text-lg">
              <li>Accounting</li>
              <li>Financial Mathematics</li>
              <li>Investment Basics</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="border-l border-gray-300 h-auto"></div>

          {/* Year 2 */}
          <div className="text-center">
           
            <h2 className="text-xl font-semibold mb-2">Year 2</h2>
            <ul className="list-disc ml-4 text-lg">
              <li>Stock Markets</li>
              <li>Financial Modeling</li>
              <li>Risk Management</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="border-l border-gray-300 h-auto"></div>

          {/* Year 3 */}
          <div className="text-center">
           
            <h2 className="text-xl font-semibold mb-2">Year 3</h2>
            <ul className="list-disc ml-4 text-lg">
              <li>Wealth Management</li>
              <li>Mergers & Acquisitions</li>
              <li>Corporate Finance</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-1 my-1">
          <p className="text-4xl text-[#1D3557] tracking-wide">
            Investment Bankers at firms like Goldman Sachs earn ₹50+ LPA!
          </p>
          <img
            src={Image2}
            alt="Goldman Sachs Logo"
            className="w-1/2 h-3/4 object-cover"
          />
        </div>

        <p className="text-lg text-[#000000] tracking-wide my-1">
          💰 BBA in Finance Salary in India – Freshers earn ₹6-8 LPA, while experienced professionals go beyond ₹30+ LPA in top firms like Goldman Sachs, JP Morgan, and Deloitte.
        </p>
      </div>
    </div>
  );
}

export default FinanceManagementStudying;
