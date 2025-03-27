import React from "react";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/mm-study.png";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/red-circle.png";

function InnovationAndEntrepreneurshipStudying() {
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
        <h1 className="text-3xl font-semibold text-left mb-4 text-[#000000]">
          Why Innovation & Entrepreneurship? (Real-World Impact & Oppurtunities )
        </h1>

        <p className="text-lg text-[#000000] tracking-wide my-1 mb-2">
          The world’s biggest companies—Apple, Tesla, Zomato—started as ideas. With a BBA in Entrepreneurship, you’ll learn to launch, scale, and sustain your business in competitive markets.
        </p>

        {/* Advertisement Section */}
        <div className="my-2 text-left">
          <p className="text-lg text-[#000000] font-medium mb-2">
            <span className="font-semibold">✅ India’s startup ecosystem is booming </span> —with over 100+ unicorns and new opportunities every day!
          </p>
          <p className="text-lg text-[#000000]  mb-2">
            <span className="font-semibold">✅ Want to be your own boss? </span> A BBA Entrepreneurship degree helps you build and fund your dream startup!
          </p>
          <p className="text-lg text-[#000000]  mb-2">
            <span className="font-semibold"> ✅ Learn from success stories </span> of entrepreneurs who started with just an idea and built billion-dollar businesses.
          </p>
        </div>

        <div className="text-left text-lg mb-1 text-[#000000]">
          <h1 className="text-3xl font-semibold text-left mb-4 text-[#000000]">
            What Will You Learn?
          </h1>

          {/* Year Columns with One Divider Between Columns */}
          <div className="flex gap-6 mb-6">
            {/* Year 1 */}
            <div className="flex-1 pr-2">
              <h2 className="font-semibold text-lg mb-2">Year 1</h2>
              <ul className="list-disc ml-5 text-sm text-[#000000]">
                <li>Fundamentals of Entrepreneurship</li>
                <li>Business Models</li>
                <li>Market Research</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-gray-300"></div>

            {/* Year 2 */}
            <div className="flex-1 pr-2">
              <h2 className="font-semibold text-lg mb-2">Year 2</h2>
              <ul className="list-disc ml-5 text-sm text-[#000000]">
                <li>Digital Business</li>
                <li>Lean Startups</li>
                <li>Growth Hacking & Innovation Strategies</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-gray-300"></div>

            {/* Year 3 */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg mb-2">Year 3</h2>
              <ul className="list-disc ml-5 text-sm text-[#000000]">
                <li>Venture Capital</li>
                <li>Mergers & Acquisitions</li>
                <li>Scaling a Business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovationAndEntrepreneurshipStudying;
