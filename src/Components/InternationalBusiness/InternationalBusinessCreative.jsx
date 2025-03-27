import React from "react";
import { FaChartLine, FaGlobeAmericas, FaTrophy } from "react-icons/fa"; // Importing relevant icons

const InternationalBusinessCreative = () => {
  return (
    <div className="bg-gray-100 py-8 px-8 md:px-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-semibold text-[#1D3557] mb-16">
          Career Path: Your Gateway to Global Success
        </h2>

        {/* Career Path Breakdown */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Entry-Level Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaChartLine size={40} className="text-[#6c5ce7] mr-4" />
              Entry-Level
            </div>
            <div className="mt-6 text-xl font-semibold text-[#6c5ce7]">Trade Analyst, International Sales Coordinator, Global Marketing Associate</div>
            <div className="mt-4 text-lg text-gray-600">Starting to explore global markets and international trade.</div>
          </div>

          {/* Mid-Level Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaGlobeAmericas size={40} className="text-[#6c5ce7] mr-4" />
              Mid-Level
            </div>
            <div className="mt-6 text-xl font-semibold text-[#6c5ce7]">Export-Import Manager, Foreign Market Strategist, Country Manager</div>
            <div className="mt-4 text-lg text-gray-600">Managing international trade and developing market strategies.</div>
          </div>

          {/* Leadership Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaTrophy size={40} className="text-[#6c5ce7] mr-4" />
              Leadership
            </div>
            <div className="mt-6 text-xl font-semibold text-[#6c5ce7]">Global Business Director, Chief International Officer, CEO</div>
            <div className="mt-4 text-lg text-gray-600">Leading the global business strategy and overseeing international operations.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalBusinessCreative;
