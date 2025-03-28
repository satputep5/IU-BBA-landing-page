import React, { useEffect, useState } from "react";
// Import the images
import Image1 from "../../assets/Images/isbs-1.jpg"; // Add your first image
import Image2 from "../../assets/Images/isbs-std.jpg"; // Add your second image
import Image3 from "../../assets/Images/isbs-class.jpg"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function FinanceManagementOverview() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);

    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the inline styles for responsive behavior
  const firstImageStyle = {
    width: screenWidth >= 800 ? "65%" : "100%",
    height: "100%", // Ensure it stretches to match the height of the right section
  };

  const secondPartStyle = {
    width: screenWidth >= 800 ? "30%" : "100%",
    height: "100%", // Keep the height consistent with the left part
  };

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
          In a world driven by investments, banking, and global markets, finance
          is the backbone of every successful business. At Indira University
          School of Business, we teach more than just finance—we prepare future
          financial leaders.
        </p>

        <p className="text-2xl text-[#1D3557] tracking-wide my-2">
          Finance is about crunching numbers & making decisions that shape the
          world.
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
            <p className="text-lg text-gray-700">
              The 2008 Financial Crisis started with one bad mortgage decision
              but impacted the entire world!
            </p>
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
            <p className="text-lg text-gray-700">
              India’s Stock Market reached a record high in 2024—creating
              thousands of new millionaires.
            </p>
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
            <p className="text-lg text-gray-700">
              Want to be the brains behind billion-dollar moves? Finance is your
              gateway!
            </p>
          </div>
        </div>
      </div>

      {/* Right Part: First and Second Images */}
      <div className="flex-1 bg-white flex flex-col md:flex-row gap-4 md:gap-0">
        {/* First Image - Takes 100% width on small screens, 65% on large screens */}
        <div className="h-full flex-grow" style={firstImageStyle}>
          <div className="w-full h-auto">
            <img
              src={Image1}
              alt="Image 1"
              className="w-full h-full md:h-[50vh] object-cover" // Ensures image fills the container
            />
          </div>
        </div>

        {/* Gap - 5% */}
        <div className="w-[2%] hidden md:block"></div>

        {/* Second Part - Two Vertical Images in 100% width on small and medium screens, 30% on large screens */}
        <div className="flex flex-col gap-4 h-full" style={secondPartStyle}>
          {/* First Image with full overlay text and black overlay */}
          <div className="relative w-full h-full">
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-full object-cover rounded-md" // Ensures image fills the container
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Black overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-10 text-white text-lg font-semibold p-4 text-center">
              <div>
                <span className="text-4xl md:text-6xl">10k+</span> <br />
                <span className="text-base md:text-xl">Students Impacted</span>
              </div>
            </div>
          </div>

          {/* Second Image below with padding */}
          <div className="w-full h-full">
            <img
              src={Image3}
              alt="Image 3"
              className="w-full h-full object-cover rounded-md" // Ensures image fills the container
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceManagementOverview;
