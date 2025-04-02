import React from "react";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/std-inno.jpg";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/green-circle.png";

function InnovationAndEntrepreneurshipStudying() {
  return (
    <div className="flex flex-wrap min-h-screen px-4 md:px-16 py-4 md:py-8 mb-2 poppins-regular bg-[#f9fafb]">

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
          Why Innovation & Entrepreneurship? (Real-World Impact & Opportunities)
        </h1>

        <p className="text-sm md:text-lg text-[#000000] tracking-wide my-2">
          The world’s biggest companies—Apple, Tesla, Zomato—started as ideas. With a BBA in Entrepreneurship, you’ll learn to launch, scale, and sustain your business in competitive markets.
        </p>

        {/* Advertisement Section */}
        <div className="my-4 text-left">
          {[
            "India’s startup ecosystem is booming — with over 100+ unicorns and new opportunities every day!",
            "Want to be your own boss? A BBA Entrepreneurship degree helps you build and fund your dream startup!",
            "Learn from success stories of entrepreneurs who started with just an idea and built billion-dollar businesses.",
          ].map((text, index) => (
            <p key={index} className="text-sm md:text-lg text-[#000000] font-medium mb-2 flex items-center">
              <span className="font-semibold">✅ {text}</span>
            </p>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#1D3557] mt-6 mb-4">
          What Will You Learn?
        </h2>

        {/* 3 Columns for Year 1, 2, and 3 */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {[
            { year: "Year 1", subjects: ["Fundamentals of Entrepreneurship", "Business Models", "Market Research"] },
            { year: "Year 2", subjects: ["Digital Business", "Lean Startups", "Growth Hacking & Innovation Strategies"] },
            { year: "Year 3", subjects: ["Venture Capital", "Mergers & Acquisitions", "Scaling a Business"] },
          ].map((item, index) => (
            <div key={index} className="text-left text-sm md:text-lg mb-1 text-[#000000] w-full md:w-1/3">
              <span className="font-semibold">{item.year}:</span>
              <ul className="list-disc pl-5">
                {item.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InnovationAndEntrepreneurshipStudying;
