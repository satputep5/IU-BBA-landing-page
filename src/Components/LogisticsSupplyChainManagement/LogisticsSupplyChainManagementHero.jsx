import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection"; // Import the new child component
function LogisticsManagementHero() {
  useEffect(() => {
    // GSAP animation for floating effect on the stats rectangles
    gsap.to(".stat-box", {
      y: "-10px", // Move up by 10px
      repeat: -1, // Repeat forever
      yoyo: true, // Alternate up and down
      duration: 1, // Duration of 1 second for each cycle
      ease: "power1.inOut", // Smooth easing
    });
  }, []);

  return (
    <div
      className="px-8 md:px-16 relative bg-cover bg-[#F4A261] bg-right md:bg-center bg-no-repeat text-white flex items-center min-h-screen"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1 className="text-[36px] text-[#070b1a] font-bold leading-tight mb-6">
          Bachelors of Business Administration in Logistics & Supply Chain
          Management with Indira School of Business at Indira University
        </h1>

        <h1 className="text-3xl text-[#070b1a] font-medium leading-tight mb-6">
          From Factory Floors to Front Doors – Be the Mastermind Behind Global{" "}
          <span className="text-[#ed6f0c] font-bold">Supply Chains.</span>{" "}
        </h1>
        <p className="mt-4 text-2xl text-black">
          The best BBA college in Pune!
        </p>

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(241, 121, 23, 0.3)", // Semi-transparent color
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div class="mt-4">
              <input
                type="text"
                id="pincode"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                placeholder="Enter your pincode"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#ed6f0c] text-white rounded-lg hover:bg-orange-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Small text below the form */}
        <p className="text-gray-700 text-sm mt-4 text-center ml-6">
          You’re guaranteed to find something that’s right for you.
        </p>
      </div>

      {/* Right side content now handled by the RightSideSection component */}
      <RightSideSection />
    </div>
  );
}

export default LogisticsManagementHero;
