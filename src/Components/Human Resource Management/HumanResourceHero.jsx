import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection"; // Import the new child component

function HumanResourceHero() {
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
      className="px-8 md:px-16 relative bg-cover bg-[#b8dde3] bg-right md:bg-center bg-no-repeat text-white flex items-center min-h-screen"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        {/* New heading added above the existing one */}
        <h2 className="text-[36px] text-[#0e1133] font-bold mb-6">
          Bachelors of Business Administration in Human Resource Management with
          Indira School of Business at Indira University
        </h2>

        <h1 className="text-3xl text-[#0e1133] font-medium leading-tight mb-6">
          Empowering People. Building{" "}
          <span className="text-[#2A9D57] font-bold">Leaders.</span> Driving
          Success.
        </h1>
        <p className="mt-4 text-2xl text-black">
          The best BBA college in Pune!
        </p>

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(42, 157, 85, 0.3)", // Semi-transparent Emerald Green (#2A9D)
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57]"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57]"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Pincode input field */}
            <div>
              <input
                type="text"
                id="pincode"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57]"
                placeholder="Enter your pincode"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57]"
                required
              >
                <option value="">Select Course</option>
                <option value="HRM">Human Resource Management</option>
                <option value="HRM-Leadership">HR Leadership</option>
                {/* Add more HR-related course options here */}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#2A9D57] text-white rounded-lg hover:bg-[#237a46]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Small text below the form */}
        <p className="text-gray-500 text-sm mt-4 text-center ml-6">
          Your journey to a successful business career starts here!
        </p>
      </div>

<RightSideSection /> {/* Include the new child component */}
    </div>
  );
}

export default HumanResourceHero;
