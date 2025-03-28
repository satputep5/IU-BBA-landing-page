import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection"; // Import the new child component

function MarketingManagementHero() {
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
      className="px-8 md:px-16 relative bg-cover bg-[#b8dde3] bg-right md:bg-center bg-no-repeat text-white flex items-center min-h-[80vh]"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        {/* New Heading */}
        <h1 className="text-[34px] text-[#0e1133] font-bold leading-tight mb-6">
          BBA in Marketing at School of Business (Indira University)
        </h1>

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(56, 138, 134, 0.3)", // Semi-transparent #388A86
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#388A86] focus:outline-none focus:ring-2 focus:ring-[#388A86]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#388A86] focus:outline-none focus:ring-2 focus:ring-[#388A86]"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#388A86] focus:outline-none focus:ring-2 focus:ring-[#388A86]"
                required
              >
                <option value="Marketing Management">
                  Marketing Management
                </option>
                <option value="Financial Management">
                  Financial Management
                </option>
                <option value="Banking and Financial Services">
                  Banking and Financial Services
                </option>
                <option value="Human Resource Management">
                  Human Resource Management
                </option>
                <option value="Logistics and Supply Chain Management">
                  Logistics and Supply Chain Management
                </option>
                <option value="International Business">
                  International Business
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Innovation and Entrepreneurship">
                  Innovation and Entrepreneurship
                </option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#388A86] text-white rounded-lg hover:bg-[#276E64]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <p className="italic text-black my-2 text-xl">
          30 Years of Excellence in Education | 8 Specializations | 100%
          Placement Assistance
        </p>

        {/* Existing Heading */}
        <h1 className="text-3xl text-[#0e1133] font-medium leading-tight mb-4">
          From crafting unforgettable ads to building billion-dollar {"  "}
          <span className="text-[#388A86] font-bold">brands—Marketing</span>
          {"  "}
          is the art of influence.
        </h1>


      </div>

      {/* Right side content now handled by the RightSideSection component */}
      <RightSideSection />
    </div>
  );
}

export default MarketingManagementHero;
