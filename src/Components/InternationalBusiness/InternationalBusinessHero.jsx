import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection"; // Import the new child component

function InternationalBusinessHero() {
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
      className="px-8 md:px-16 relative bg-cover bg-[#6C5CE7] bg-right md:bg-center bg-no-repeat text-white flex items-center min-h-screen"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1 className="text-[36px] text-white font-bold leading-tight mb-6">
          Bachelors of Business Administration in International Business with
          School of Business at Indira University
        </h1>

        <h1 className="text-3xl text-white font-medium leading-tight mb-6">
          From Local Markets to{" "}
          <span className="text-[#15068a] font-bold">Global Giants</span> –
          Master the Business of the World.
        </h1>

        <p className="mt-4 text-2xl text-white">
          The best BBA college in Pune!
        </p>

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(45, 19, 241, 0.3)", // Semi-transparent color
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <input
                type="text"
                id="pincode"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                placeholder="Enter your pincode"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#6C5CE7] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#1a0c87] text-white rounded-lg hover:bg-[#5F5AD3]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Small text below the form */}
        <p className="text-gray-200 text-sm mt-4 text-center ml-6">
          You’re guaranteed to find something that’s right for you.
        </p>
      </div>

          <RightSideSection />
    </div>
  );
}

export default InternationalBusinessHero;
