import React from "react";

const FinanceCareerPaths = () => {
  return (
    <div className="bg-white py-4 px-8">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl font-semibold text-[#264653] mb-4">
          Career Paths – Your Banking Ladder to Success
        </h2>

        <h3 className="text-xl text-[#264653] mb-8">
        The financial world offers a structured path leading to high-paying roles.
        </h3>

        {/* Career Paths */}
        <div className="relative">
          {/* Entry-Level */}
          <div className="mb-12">
            <div className="text-2xl font-semibold text-[#264653]">Entry-Level</div>
            <div className="mt-4 text-3xl font-bold text-[#264653]">₹6-8 LPA</div>
            <div className="text-sm text-gray-500 mt-2">Financial Analyst, Credit Manager, Investment Associate</div>
            <div className="h-1 bg-[#264653] my-6 mx-auto w-1/3"></div> {/* Small divider for Entry Level */}
          </div>

          {/* Mid-Level */}
          <div className="mb-12">
            <div className="text-3xl font-semibold text-[#264653]">Mid-Level</div>
            <div className="mt-4 text-4xl font-bold text-[#264653]">₹15-30 LPA</div>
            <div className="text-lg text-gray-500 mt-2">Risk Analyst, Portfolio Manager, Corporate Banker</div>
            <div className="h-2 bg-[#264653] my-6 mx-auto w-2/3"></div> {/* Medium divider for Mid-Level */}
          </div>

          {/* Elite Tier */}
          <div>
            <div className="text-4xl font-semibold text-[#264653]">Elite Tier</div>
            <div className="mt-4 text-5xl font-bold text-[#264653]">₹50+ LPA</div>
            <div className="text-xl text-gray-500 mt-2">CFO, Investment Banker, Hedge Fund Manager</div>
            <div className="h-3 bg-[#264653] my-6 mx-auto w-3/4"></div> {/* Large divider for Elite Tier */}
          </div>
        </div>

        {/* Salary after BBA in Banking and Financial Services */}
        <div className="mt-12">
          <p className="text-xl text-[#264653]">
            🔹 Salary after BBA in Banking and Financial Services: Top banking professionals earn ₹25+ LPA in investment firms!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinanceCareerPaths;
