import React from "react";
import { FaChartLine, FaGlobeAmericas, FaTrophy } from "react-icons/fa"; // Importing relevant icons

const DigitalPowerPyramid = () => {
  return (
    <div className="bg-gray-100 py-8 px-8 md:px-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-[#1D3557] mb-8">
          Digital Career Pathways
        </h2>

        {/* Career Path Breakdown */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Entry-Level Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaChartLine size={40} className="text-[#00B4D8] mr-4" />
              Entry Level
            </div>
            <div className="mt-6 text-xl font-semibold text-[#00B4D8]">
              Digital Marketing Executive, SEO Analyst, Social Media Coordinator
            </div>
            <div className="mt-4 text-lg text-gray-600">
              Starting your career in digital marketing, focusing on SEO, social
              media, and digital content.
            </div>
          </div>

          {/* Mid-Level Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaGlobeAmericas size={40} className="text-[#00B4D8] mr-4" />
              Mid-Level
            </div>
            <div className="mt-6 text-xl font-semibold text-[#00B4D8]">
              Performance Marketer, Content Strategist, Brand Manager
            </div>
            <div className="mt-4 text-lg text-gray-600">
              Managing and optimizing digital marketing campaigns, creating
              content strategies, and building brand presence.
            </div>
          </div>

          {/* Elite Tier Card */}
          <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="text-3xl font-semibold text-[#1D3557] flex items-center justify-center">
              <FaTrophy size={40} className="text-[#00B4D8] mr-4" />
              Elite Tier
            </div>
            <div className="mt-6 text-xl font-semibold text-[#00B4D8]">
              Chief Marketing Officer (CMO), Growth Hacker, Digital Director
            </div>
            <div className="mt-4 text-lg text-gray-600">
              Leading digital marketing efforts, driving growth, and directing
              the company's digital strategy.
            </div>
          </div>
        </div>

        {/* Salary Information */}
        <div className="mt-12 text-lg font-semibold text-[#00B4D8]">
          🔹 Dream Big? Digital Marketers at top firms like Google & Amazon earn
          ₹30+ LPA!
        </div>
      </div>
    </div>
  );
};

export default DigitalPowerPyramid;
