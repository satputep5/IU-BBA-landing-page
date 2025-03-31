import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations

import RightSideSection from "../RightSideSection"; // Import the new child component

function BbaAdmission() {
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
      className="px-8 md:px-16  relative bg-gradient-to-r from-[#135683] via-[#208098] to-[#2A9DA2] text-white flex flex-col md:flex-row items-center min-h-[80vh] space-x-2"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1
          className="text-3xl md:text-4xl text-[#FFFFFF] font-semibold leading-tight mb-1 md:mb-6 mt-2"
          data-aos="fade-up"
        >
          Build Your Future with <span className="font-bold">BBA</span>{" "}
          at School of Business (Indira University)
        </h1>

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          data-aos="fade-right"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent dark background for form container
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9DA2] focus:outline-none focus:ring-2 focus:ring-[#2A9DA2] backdrop-blur-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9DA2] focus:outline-none focus:ring-2 focus:ring-[#2A9DA2] backdrop-blur-md"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            {/* Course Dropdown */}
            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9DA2] focus:outline-none focus:ring-2 focus:ring-[#2A9DA2] backdrop-blur-md"
                required
              >
                <option value="">Select Course</option>
                <option value="marketing-management">
                  Marketing Management
                </option>
                <option value="financial-management">
                  Financial Management
                </option>
                <option value="human-resource-management">
                  Human Resource Management
                </option>
                <option value="logistics-supply-chain-management">
                  Logistics & Supply Chain Management
                </option>
                <option value="international-business">
                  International Business
                </option>
                <option value="banking-financial-services">
                  Banking & Financial Services
                </option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="innovation-entrepreneurship">
                  Innovation & Entrepreneurship
                </option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#299BA1] text-white rounded-lg border-2 border-[#ffffff] hover:bg-[#135783] hover:border-2 hover:border-[#2A9DA2] hover:text-[#ffffff] transition duration-100 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Right side content now handled by the RightSideSection component */}
      <RightSideSection />
    </div>
  );
}

export default BbaAdmission;
