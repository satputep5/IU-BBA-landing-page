import React from "react";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/mm-study.png";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/green-circle.png";

function BankingAndFinancialServicesStudying() {
  return (
    <div className="flex flex-wrap min-h-screen px-4 md:px-16 py-4 md:py-8 mb-2 poppins-regular">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-white relative">
        {/* Main Image */}
        <img
          src={MyImage}
          alt="Finance Management"
          className="w-full h-full object-cover rounded-t-xl pr-0 md:pr-10"
        />

        {/* 3D Effect Image */}
        <img
          src={Image1}
          alt="3D Image"
          className="w-1/2 h-auto object-cover absolute bottom-10 right-2 md:-right-4 transform shadow-lg rounded-lg z-10"
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
      <div className="w-full md:w-1/2 pl-4 md:pl-8 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-semibold text-left my-2 text-[#000000]">
          Why Banking & Financial Services?
        </h1>

        <div className="text-left text-sm md:text-lg mb-1 text-[#000000]">
          <p className="text-sm md:text-lg text-[#000000] tracking-wide my-2">
            <span className="block text-left mb-1 font-semibold">
              The banking sector is at the heart of global finance.
            </span>
            Managing trillions of dollars in transactions every day, from
            investment banking to wealth management, this industry offers some
            of the most lucrative careers.
          </p>
          <p className="text-sm md:text-lg text-[#000000] tracking-wide my-2">
            ✅ Did you know? India’s banking sector is expected to grow 3x by
            2030, creating massive job opportunities!
          </p>
          <p className="text-sm md:text-lg text-[#000000] tracking-wide my-2">
            ✅ With a BBA in Banking and Financial Services, you gain expertise
            in investment strategies, risk management, digital banking, and
            corporate finance.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[#1D3557] mt-6 mb-4">
            What Will You Learn?
          </h2>

          {/* 3 Columns for Year 1, 2, and 3 */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {/* Year 1 */}
            <div className="text-left text-sm md:text-lg mb-1 text-[#000000] w-full md:w-1/3">
              <span className="font-semibold">Year 1:</span>
              <ul className="list-disc pl-5">
                <li>Financial Accounting</li>
                <li>Banking Operations</li>
                <li>Micro & Macro Economics</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l-2 border-gray-300 h-auto"></div>

            {/* Year 2 */}
            <div className="text-left text-sm md:text-lg mb-1 text-[#000000] w-full md:w-1/3">
              <span className="font-semibold">Year 2:</span>
              <ul className="list-disc pl-5">
                <li>Investment Banking</li>
                <li>Risk Assessment</li>
                <li>Wealth Management</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l-2 border-gray-300 h-auto"></div>

            {/* Year 3 */}
            <div className="text-left text-sm md:text-lg mb-1 text-[#000000] w-full md:w-1/3">
              <span className="font-semibold">Year 3:</span>
              <ul className="list-disc pl-5">
                <li>Digital Banking</li>
                <li>FinTech</li>
                <li>Mergers & Acquisitions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankingAndFinancialServicesStudying;
