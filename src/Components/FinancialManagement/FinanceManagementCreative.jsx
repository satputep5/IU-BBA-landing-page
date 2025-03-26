import React from "react";

const FinanceCareerPaths = () => {
  return (
    <div className="bg-white py-4 px-8">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-semibold text-[#1D3557] mb-12">
          Career Paths – The Finance Power Pyramid
        </h2>

        {/* Salary Growth Graph */}
        <div className="relative">
          {/* Entry Level */}
          <div className="mb-16">
            <div className="text-2xl font-semibold text-[#1D3557]">Entry Level</div>
            <div className="mt-4 text-3xl font-bold text-[#1D3557]">₹6-8 LPA</div>
            <div className="text-lg text-gray-500 mt-2">Financial Analyst, Investment Research Associate</div>
            <div className="h-1.5 bg-[#1D3557] my-6 mx-auto w-1/4"></div> {/* Smaller divider for Entry Level */}
          </div>

          {/* Mid-Level */}
          <div className="mb-16">
            <div className="text-3xl font-semibold text-[#1D3557]">Mid-Level</div>
            <div className="mt-4 text-4xl font-bold text-[#1D3557]">₹15-30 LPA</div>
            <div className="text-lg text-gray-500 mt-2">Portfolio Manager, Risk Analyst, Corporate Banker</div>
            <div className="h-2 bg-[#1D3557] my-6 mx-auto w-1/3"></div> {/* Medium divider for Mid-Level */}
          </div>

          {/* Elite Tier */}
          <div>
            <div className="text-4xl font-semibold text-[#1D3557]">Elite Tier</div>
            <div className="mt-4 text-5xl font-bold text-[#1D3557]">₹50+ LPA</div>
            <div className="text-xl text-gray-500 mt-2">CFO, Hedge Fund Manager, Investment Banker</div>
            <div className="h-3 bg-[#1D3557] my-6 mx-auto w-1/2"></div> {/* Larger divider below Elite Tier */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCareerPaths;
