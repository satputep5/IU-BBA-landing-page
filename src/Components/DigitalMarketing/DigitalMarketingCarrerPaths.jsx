import React from "react";
import { FaChartLine, FaGlobeAmericas, FaTrophy } from "react-icons/fa";

const DigitalPowerPyramid = () => {
  return (
    <div className="bg-gray-100 py-4 md:py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1D3557] mb-2 md:mb-6 leading-snug">
          Digital Career Pathways
        </h2>

        {/* Career Path Breakdown */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Entry-Level Card */}
          <div className="bg-white border border-[#E0E0E0] shadow-md hover:shadow-xl transition-shadow duration-300 p-4 md:p-8">
            <div className="text-2xl md:text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaChartLine size={30} className="text-[#00B4D8] mr-3 md:mr-4" />
              Entry Level
            </div>
            <div className="mt-4 text-lg md:text-xl font-semibold text-[#00B4D8]">
              Digital Marketing Executive, SEO Analyst, Social Media Coordinator
            </div>
            <div className="mt-2 text-sm md:text-base text-gray-600">
              Starting your career in digital marketing, focusing on SEO, social
              media, and digital content.
            </div>
          </div>

          {/* Mid-Level Card */}
          <div className="bg-white border border-[#E0E0E0] shadow-md hover:shadow-xl transition-shadow duration-300 p-4 md:p-8">
            <div className="text-2xl md:text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaGlobeAmericas size={30} className="text-[#00B4D8] mr-3 md:mr-4" />
              Mid-Level
            </div>
            <div className="mt-4 text-lg md:text-xl font-semibold text-[#00B4D8]">
              Performance Marketer, Content Strategist, Brand Manager
            </div>
            <div className="mt-2 text-sm md:text-base text-gray-600">
              Managing and optimizing digital marketing campaigns, creating
              content strategies, and building brand presence.
            </div>
          </div>

          {/* Elite Tier Card */}
          <div className="bg-white border border-[#E0E0E0] shadow-md hover:shadow-xl transition-shadow duration-300 p-4 md:p-8">
            <div className="text-2xl md:text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaTrophy size={30} className="text-[#00B4D8] mr-3 md:mr-4" />
              Elite Tier
            </div>
            <div className="mt-4 text-lg md:text-xl font-semibold text-[#00B4D8]">
              Chief Marketing Officer (CMO), Growth Hacker, Digital Director
            </div>
            <div className="mt-2 text-sm md:text-base text-gray-600">
              Leading digital marketing efforts, driving growth, and directing
              the company's digital strategy.
            </div>
          </div>
        </div>

        {/* Salary Information */}
        <div className="mt-8 text-sm md:text-lg font-semibold text-[#00B4D8]">
          🔹 Dream Big? Digital Marketers at top firms like Google & Amazon earn
          ₹30+ LPA!
        </div>
      </div>
    </div>
  );
};

export default DigitalPowerPyramid;
