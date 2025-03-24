import React from "react";
import { FaChartLine, FaGlobeAmericas, FaTrophy } from "react-icons/fa"; // Importing relevant icons

const InternationalBusinessCreative = () => {
  return (
    <div className="bg-white py-2 px-8">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-semibold text-[#000000] mb-12 ">
          Career Path: Your Gateway to Global Success
        </h2>

        {/* Career Path Breakdown */}
        <div className="relative">
          {/* Entry-Level */}
          <div className="mb-16">
            <div className="text-2xl font-semibold text-[#1D3557]">
              <FaChartLine size={40} className="inline-block text-[#6c5ce7] mr-2" /> Entry-Level
            </div>
            <div className="mt-4 text-xl font-bold text-[#6c5ce7]">Trade Analyst, International Sales Coordinator, Global Marketing Associate</div>
            <div className="text-sm text-gray-500 mt-2">Starting to explore global markets and international trade.</div>
            <div className="h-1.5 bg-[#1D3557] my-6 mx-auto w-1/4"></div> {/* Smaller divider for Entry-Level */}
          </div>

          {/* Mid-Level */}
          <div className="mb-16">
            <div className="text-3xl font-semibold text-[#1D3557]">
              <FaGlobeAmericas size={40} className="inline-block text-[#6c5ce7] mr-2" /> Mid-Level
            </div>
            <div className="mt-4 text-2xl font-bold text-[#6c5ce7]">Export-Import Manager, Foreign Market Strategist, Country Manager</div>
            <div className="text-lg text-gray-500 mt-2">Managing international trade and developing market strategies.</div>
            <div className="h-2 bg-[#1D3557] my-6 mx-auto w-1/3"></div> {/* Medium divider for Mid-Level */}
          </div>

          {/* Leadership */}
          <div>
            <div className="text-4xl font-semibold text-[#1D3557]">
              <FaTrophy size={40} className="inline-block text-[#6c5ce7] mr-2" /> Leadership
            </div>
            <div className="mt-4 text-4xl font-bold text-[#6c5ce7]">Global Business Director, Chief International Officer, CEO</div>
            <div className="text-xl text-gray-500 mt-2">Leading the global business strategy and overseeing international operations.</div>
            <div className="h-3 bg-[#1D3557] my-6 mx-auto w-1/2"></div> {/* Larger divider below Leadership */}
          </div>
        </div>

        {/* Dream Big Section (optional) */}
        {/* <div className="mt-12">
          <h3 className="text-3xl font-semibold text-[#1D3557] mb-6">Dream Big?</h3>
          <p className="text-xl text-gray-700">
            Global Business Directors at top MNCs can earn exceptional salaries while shaping the global economy!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default InternationalBusinessCreative;
