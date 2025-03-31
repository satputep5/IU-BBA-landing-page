import React from "react";

const FinanceCareerPaths = () => {
  return (
    <div className="bg-white py-2 md:py-4 px-4 md:px-8">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1D3557] mb-4 sm:mb-12">
          Career Paths – The Finance Power Pyramid
        </h2>

        {/* Salary Growth Graph */}
        <div className="relative space-y-8 sm:space-y-12">
          {/* Entry Level */}
          <div className="mb-6 sm:mb-16">
            <div className="text-xl sm:text-2xl font-semibold text-[#1D3557]">Entry Level</div>
            <div className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-bold text-[#1D3557]">₹6-8 LPA</div>
            <div className="text-sm sm:text-lg text-gray-500 mt-1 sm:mt-2">Financial Analyst, Investment Research Associate</div>
            <div className="h-1 bg-[#1D3557] my-4 sm:my-6 mx-auto w-1/4 md:w-1/4"></div> {/* Smaller divider */}
          </div>

          {/* Mid-Level */}
          <div className="mb-6 sm:mb-16">
            <div className="text-2xl sm:text-3xl font-semibold text-[#1D3557]">Mid-Level</div>
            <div className="mt-2 sm:mt-4 text-3xl sm:text-4xl font-bold text-[#1D3557]">₹15-30 LPA</div>
            <div className="text-sm sm:text-lg text-gray-500 mt-1 sm:mt-2">Portfolio Manager, Risk Analyst, Corporate Banker</div>
            <div className="h-1.5 bg-[#1D3557] my-4 sm:my-6 mx-auto w-1/3 md:w-1/3"></div> {/* Medium divider */}
          </div>

          {/* Elite Tier */}
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#1D3557]">Elite Tier</div>
            <div className="mt-2 sm:mt-4 text-4xl sm:text-5xl font-bold text-[#1D3557]">₹50+ LPA</div>
            <div className="text-md sm:text-xl text-gray-500 mt-1 sm:mt-2">CFO, Hedge Fund Manager, Investment Banker</div>
            <div className="h-2 bg-[#1D3557] my-4 sm:my-6 mx-auto w-1/2 md:w-1/2"></div> {/* Larger divider */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCareerPaths;
