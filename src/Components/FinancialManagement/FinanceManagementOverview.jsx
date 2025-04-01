import React, { useEffect, useState } from "react";
import Image1 from "../../assets/Images/isbs-1.avif";
import Image2 from "../../assets/Images/isbs-std.avif";
import Image3 from "../../assets/Images/isbs-class.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function FinanceManagementOverview() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-start space-y-8 md:space-y-0 gap-x-8 px-4 md:px-16 py-6 bg-[#f9fafb]">
      {/* Left Part: Program Overview */}
      <div className="flex-1" data-aos="fade-left">
        <p className="text-lg text-[#1D3557] mb-2">Program Overview</p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Finance Management
        </h2>

        <p className="text-xl text-gray-600 tracking-wide mb-4">
          Learn Finance. Drive Growth. Shape the Future.
        </p>

        <p className="text-lg text-gray-600 tracking-wide mb-4">
          In a world driven by investments, banking, and global markets, finance
          is the backbone of every successful business. At Indira University
          School of Business, we teach more than just finance—we prepare future
          financial leaders.
        </p>

        <p className="text-lg text-[#1D3557] tracking-wide my-4">
          Finance is about crunching numbers & making decisions that shape the
          world.
        </p>

        <div className="space-y-4">
          {[
            "The 2008 Financial Crisis started with one bad mortgage decision but impacted the entire world!",
            "India’s Stock Market reached a record high in 2024—creating thousands of new millionaires.",
            "Want to be the brains behind billion-dollar moves? Finance is your gateway!",
          ].map((text, index) => (
            <div key={index} className="flex items-center">
              <div className="w-6 h-6 flex justify-center items-center bg-transparent text-green-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 transform rotate-270"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <p className="text-lg text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Part: Images */}
      <div className="flex-1 bg-white flex flex-col gap-4 md:flex-row md:gap-6">
        {/* Image 1 (Always Visible) */}
        <div className="w-full h-60 md:h-auto relative">
          <img
            src={Image1}
            alt="Image 1"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Images 2 & 3 (Hidden on Small Screens) */}
        <div className="hidden md:flex flex-col gap-4">
          <div className="relative w-full h-40 md:h-60">
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>

          <div className="w-full h-40 md:h-60">
            <img
              src={Image3}
              alt="Image 3"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceManagementOverview;
