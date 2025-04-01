import React from "react";
import { FaChartLine, FaGlobeAmericas, FaTrophy } from "react-icons/fa";

const InternationalBusinessCreative = () => {
  return (
    <div className="bg-gray-100 py-4 md:py-6 px-4 sm:px-8 md:px-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D3557] mb-4 md:mb-6">
          Career Path: Your Gateway to Global Success
        </h2>

        {/* Career Path Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
          {/* Entry-Level Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8">
            <div className="text-2xl sm:text-3xl font-semibold text-[#1D3557] flex items-center justify-center space-x-4">
              <FaChartLine size={30} className="text-[#6c5ce7]" />
              <span>Entry-Level</span>
            </div>
            <div className="mt-4 text-lg sm:text-xl font-semibold text-[#6c5ce7]">
              Trade Analyst, International Sales Coordinator, Global Marketing Associate
            </div>
            <div className="mt-2 text-sm sm:text-md text-gray-600">
              Starting to explore global markets and international trade.
            </div>
          </div>

          {/* Mid-Level Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8">
            <div className="text-2xl sm:text-3xl font-semibold text-[#1D3557] flex items-center justify-center space-x-4">
              <FaGlobeAmericas size={30} className="text-[#6c5ce7]" />
              <span>Mid-Level</span>
            </div>
            <div className="mt-4 text-lg sm:text-xl font-semibold text-[#6c5ce7]">
              Export-Import Manager, Foreign Market Strategist, Country Manager
            </div>
            <div className="mt-2 text-sm sm:text-md text-gray-600">
              Managing international trade and developing market strategies.
            </div>
          </div>

          {/* Leadership Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8">
            <div className="text-2xl sm:text-3xl font-semibold text-[#1D3557] flex items-center justify-center space-x-4">
              <FaTrophy size={30} className="text-[#6c5ce7]" />
              <span>Leadership</span>
            </div>
            <div className="mt-4 text-lg sm:text-xl font-semibold text-[#6c5ce7]">
              Global Business Director, Chief International Officer, CEO
            </div>
            <div className="mt-2 text-sm sm:text-md text-gray-600">
              Leading the global business strategy and overseeing international operations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalBusinessCreative;
