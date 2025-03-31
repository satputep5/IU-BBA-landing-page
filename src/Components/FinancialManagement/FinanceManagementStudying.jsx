import React from "react";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/mm-study.png";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/green-circle.png";
import Image2 from "../../assets/Images/goldman-sachs1.webp";

function FinanceManagementStudying() {
  return (
    <div className="flex flex-wrap px-4 md:px-8 lg:px-16 py-2 md:py-6 mb-4 ">
      {/* Left Side */}
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
      <div className="w-full md:w-1/2 pl-0 md:pl-8 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#000000] my-4 text-left">
          Studying Finance Management at Indira University
        </h1>

        <h2 className="text-2xl md:text-3xl font-extralight text-[#1D3557] mb-4 md:mb-6 text-left">
          Finance Management Program
        </h2>

        {/* Year-wise Curriculum */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {[
            {
              year: "Year 1",
              subjects: [
                "Accounting",
                "Financial Mathematics",
                "Investment Basics",
              ],
            },
            {
              year: "Year 2",
              subjects: [
                "Stock Markets",
                "Financial Modeling",
                "Risk Management",
              ],
            },
            {
              year: "Year 3",
              subjects: [
                "Wealth Management",
                "Mergers & Acquisitions",
                "Corporate Finance",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 text-center text-sm md:text-lg text-[#000000]"
            >
              <h3 className="text-xl font-semibold text-[#00B4D8] mb-2">
                {item.year}
              </h3>
              <ul className="list-disc ml-4">
                {item.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 my-4">
          <p className="text-xl md:text-2xl text-[#1D3557] tracking-wide">
            Investment Bankers at firms like Goldman Sachs earn ₹50+ LPA!
          </p>
          <img
            src={Image2}
            alt="Goldman Sachs Logo"
            className="w-1/3 h-auto object-cover rounded-lg"
          />
        </div>

        <p className="text-md md:text-lg text-[#000000] tracking-wide my-2">
          💰 BBA in Finance Salary in India – Freshers earn ₹6-8 LPA, while
          experienced professionals go beyond ₹30+ LPA in top firms like Goldman
          Sachs, JP Morgan, and Deloitte.
        </p>
      </div>
    </div>
  );
}

export default FinanceManagementStudying;
