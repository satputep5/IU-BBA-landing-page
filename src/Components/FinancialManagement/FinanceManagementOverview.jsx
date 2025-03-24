import React, { useEffect } from "react";
// Import the images
import Image1 from "../../assets/Images/po-a.png"; // Add your first image
import Image2 from "../../assets/Images/po-d.png"; // Add your second image
import Image3 from "../../assets/Images/po-c.png"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function FinanceManagementOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular gap-x-8">
      {/* Left Part: Program Overview */}
      <div className="flex-1" data-aos="fade-left">
        {/* Small "Finance Management" Text above heading */}
        <p className="text-lg text-[#1D3557] mb-2">Program Overview</p>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Finance Management
        </h2>

        <p className="text-2xl text-gray-600 tracking-wide mb-2">
          Learn Finance. Drive Growth. Shape the Future.
        </p>

        <p className="text-2xl text-gray-600 tracking-wide">
          In a world driven by investments, banking, and global markets, finance is the backbone of every successful business. At Indira University School of Business, we teach more than just finance—we prepare future financial leaders.
        </p>

        <p className="text-2xl text-[#1D3557] tracking-wide my-2">
          Finance is about crunching numbers & making decisions that shape the world.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-center">
            {/* Right-pointing Bullet */}
            <div className="w-6 h-6 flex justify-center items-center bg-transparent text-green-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 transform rotate-270" // Rotate for right-pointing arrow
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <p className="text-lg text-gray-700">The 2008 Financial Crisis started with one bad mortgage decision but impacted the entire world!</p>
          </div>
          <div className="flex items-center">
            {/* Right-pointing Bullet */}
            <div className="w-6 h-6 flex justify-center items-center bg-transparent text-green-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 transform rotate-270" // Rotate for right-pointing arrow
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <p className="text-lg text-gray-700">India’s Stock Market reached a record high in 2024—creating thousands of new millionaires.</p>
          </div>
          <div className="flex items-center">
            {/* Right-pointing Bullet */}
            <div className="w-6 h-6 flex justify-center items-center bg-transparent text-green-600 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 transform rotate-270" // Rotate for right-pointing arrow
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <p className="text-lg text-gray-700">Want to be the brains behind billion-dollar moves? Finance is your gateway!</p>
          </div>
        </div>
      </div>

      {/* Right Part: First and Second Images */}
      <div className="flex-1 bg-white flex">
        {/* First Image - Takes 65% of the width */}
        <div className="w-[65%] h-full flex justify-center items-stretch"> {/* Ensure this takes full height */}
          <img
            src={Image1}
            alt="Image 1"
            className="w-full h-full object-cover" // Added object-cover to maintain aspect ratio and make image stretch to full height
          />
        </div>

        {/* Gap - 5% */}
        <div className="w-[5%]"></div>

        {/* Second Part - Two Vertical Images in 30% */}
        <div className="w-[30%] flex flex-col gap-4">
          {/* First Image with full overlay text */}
          <div className="relative w-full h-full"> {/* Ensure this image stretches to full height */}
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-10 text-white text-lg font-semibold p-4 text-center">
              <div>
                <span className="text-6xl">10k+</span> <br />{" "}
                <span className="text-xl">Students Active in Our Courses</span>
              </div>
            </div>
          </div>

          {/* Second Image below with padding */}
          <div className="w-full">
            <img
              src={Image3}
              alt="Image 3"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceManagementOverview;
