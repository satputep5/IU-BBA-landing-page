import React from "react";
import { FaBullhorn, FaHandshake, FaChartLine } from "react-icons/fa";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/mm-study.png";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/green-circle.png";

function DigitalMarketingStudying() {
  return (
    <div className="flex flex-wrap px-4 md:px-16 py-4 md:py-8 mb-2 overflow-hidden bg-[#f9fafb]">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-white relative">
        <img
          src={MyImage}
          alt="Finance Management"
          className="w-full h-full object-cover rounded-t-xl pr-0 md:pr-10"
        />

        <img
          src={Image1}
          alt="3D Image"
          className="w-1/2 h-auto object-cover absolute bottom-10 right-2 md:-right-4 transform shadow-lg rounded-lg z-10"
        />

        <img
          src={CircleImage}
          alt="Floating Circle"
          className="absolute top-[30%] right-[25%] w-16 h-16 animate-float z-20"
        />

        <img
          src={SmallCircleImage}
          alt="Floating Small Circle"
          className="absolute bottom-[10%] left-[1%] w-12 h-12 animate-float-slow z-20"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2  flex flex-col justify-center bg-white ">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-4 text-[#00B4D8] mt-2">
          Why Digital Marketing?
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-left mb-4 text-[#000000]">
          Marketing today is all about clicks, trends & conversions—businesses
          no longer rely just on traditional methods.
        </h2>

        <p className="text-sm md:text-lg text-[#1D3557] mb-2 md:mb-4">
          • Amazon generates ₹100+ Crores daily from digital marketing-driven
          sales!
        </p>
        <p className="text-sm md:text-lg text-[#1D3557] mb-2 md:mb-4">
          • India’s e-commerce market is projected to reach $200 billion by
          2026, creating massive digital jobs.
        </p>

        {/* Year-wise Content */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {[
            {
              year: "Year 1",
              subjects: [
                "Fundamentals of Digital Marketing",
                "SEO (Search Engine Optimization)",
                "Social Media Marketing",
              ],
            },
            {
              year: "Year 2",
              subjects: [
                "Google Ads",
                "Analytics",
                "Performance Marketing",
                "Email Marketing",
              ],
            },
            {
              year: "Year 3",
              subjects: [
                "Growth Hacking",
                "Influencer Marketing",
                "AI in Digital Strategies",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-[#f0f0f0] p-2 md:p-4 rounded-md shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2 text-[#00B4D8]">
                {item.year}
              </h3>
              <ul className="list-disc ml-5 text-sm text-[#000000]">
                {item.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-lg text-[#1D3557] tracking-wide mt-4 text-center">
          <span className="block text-left mb-1 font-semibold ">
            ✅ Want to dominate the digital world and drive brand success? This
            is your gateway!
          </span>
        </p>
      </div>
    </div>
  );
}

export default DigitalMarketingStudying;
