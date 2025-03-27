import React from "react";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/mm-study.png";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/green-circle.png";

function DigitalMarketingStudying() {
  return (
    <div className="flex px-8 md:px-16 py-8 mb-2 poppins-regular">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-white relative overflow-hidden">
        {/* Main Image */}
        <img
          src={MyImage}
          alt="Finance Management"
          className="w-full h-full object-cover absolute top-0 right-20 rounded-t-xl"
        />

        {/* 3D Effect Image */}
        <img
          src={Image1}
          alt="3D Image"
          className="w-1/2 h-auto object-cover absolute bottom-10 right-0 transform shadow-lg rounded-lg z-10"
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
      <div className="w-full md:w-[50%] pl-8 flex flex-col">

        <h1 className="text-4xl font-bold text-left mb-4 text-[#00B4D8]"> {/* Darker shade for main heading */}
          Why Digital Marketing?
        </h1>

        <h1 className="text-2xl font-semilight text-left mb-4 text-[#000000]">
          Marketing today is all about clicks, trends & conversions—businesses no longer rely just on traditional methods.
        </h1>
        <h1 className="text-xl font-extralight text-left text-[#1D3557] mb-4">
          • Amazon generates ₹100+ Crores daily from digital marketing-driven sales!
        </h1>
        <h1 className="text-xl font-extralight text-left text-[#1D3557] mb-4">
          • India’s e-commerce market is projected to reach $200 billion by 2026, creating massive digital jobs.
        </h1>

        <div className="text-left text-lg mb-1 text-[#000000]">
          <div className="flex gap-8 mb-8">
            {/* Year 1 */}
            <div className="flex-1">
              <div className="flex items-center  mb-4">
                <span className="font-semibold text-[#00B4D8]">Year 1:</span> {/* Year 1 color changed */}
              </div>
              <ul className="list-disc ml-2 text-sm">
                <li>Fundamentals of Digital Marketing</li>
                <li>SEO (Search Engine Optimization)</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
            {/* Year 2 */}
            <div className="flex-1">
              <div className="flex items-center  mb-4">
                <span className="font-semibold text-[#00B4D8]">Year 2:</span> {/* Year 2 color changed */}
              </div>
              <ul className="list-disc ml-2 text-sm">
                <li>Google Ads</li>
                <li>Analytics</li>
                <li>Performance Marketing</li>
                <li>Email Marketing</li>
              </ul>
            </div>
            {/* Year 3 */}
            <div className="flex-1">
              <div className="flex items-center  mb-4">
                <span className="font-semibold text-[#00B4D8]">Year 3:</span> {/* Year 3 color changed */}
              </div>
              <ul className="list-disc ml-2 text-sm">
                <li>Growth Hacking</li>
                <li>Influencer Marketing</li>
                <li>AI in Digital Strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-2xl text-[#1D3557] tracking-wide my-2">
          <span className="block text-left mb-1">✅ Want to dominate the digital world and drive brand success? This is your gateway!</span>
        </p>

      </div>
    </div>
  );
}

export default DigitalMarketingStudying;
