import React from "react";

const FinanceCareerPaths = () => {
  return (
    <div className="bg-white py-4 px-4 md:px-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#264653] mb-4 leading-tight">
          Career Paths – Your Banking Ladder to Success
        </h2>

        <h3 className="text-lg md:text-xl text-[#264653] mb-4 md:mb-8 leading-relaxed">
          The financial world offers a structured path leading to high-paying roles.
        </h3>

        {/* Career Paths */}
        <div className="flex flex-col gap-4 md:gap-12">
          {/* Entry-Level */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-[#264653]">Entry-Level</div>
            <div className="mt-2 text-3xl sm:text-4xl font-bold text-[#264653]">₹6-8 LPA</div>
            <div className="text-sm sm:text-base text-gray-500 mt-1">
              Financial Analyst, Credit Manager, Investment Associate
            </div>
            <div className="h-1 bg-[#264653] my-4 mx-auto w-1/4 sm:w-1/3"></div>
          </div>

          {/* Mid-Level */}
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-[#264653]">Mid-Level</div>
            <div className="mt-2 text-4xl sm:text-5xl font-bold text-[#264653]">₹15-30 LPA</div>
            <div className="text-base sm:text-lg text-gray-500 mt-1">
              Risk Analyst, Portfolio Manager, Corporate Banker
            </div>
            <div className="h-2 bg-[#264653] my-4 mx-auto w-1/3 sm:w-2/3"></div>
          </div>

          {/* Elite Tier */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-semibold text-[#264653]">Elite Tier</div>
            <div className="mt-2 text-5xl sm:text-6xl font-bold text-[#264653]">₹50+ LPA</div>
            <div className="text-xl text-gray-500 mt-1">
              CFO, Investment Banker, Hedge Fund Manager
            </div>
            <div className="h-3 bg-[#264653] my-4 mx-auto w-1/2 sm:w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCareerPaths;
