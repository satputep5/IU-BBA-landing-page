import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection";

function DigitalMarketingHero() {
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
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1 className="text-[36px] text-[#0e1133] font-semibold leading-tight mb-6">
          BBA in Digital Marketing at School of Business (Indira University)
        </h1>



        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(0, 180, 216, 0.3)", // Semi-transparent Electric Teal / Aqua #00B4D8
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#00B4D8] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#00B4D8] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                placeholder="Enter your mobile number"
                required
              />
            </div>


            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#00B4D8] focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#00B4D8] text-white rounded-lg hover:bg-[#008C9E]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>


        <p className="italic text-black my-4">
          30 Years of Excellence in Education | 8 Specializations | 100%
          Placement Assistance
        </p>

        <h1 className="text-3xl text-[#0e1133] font-semibold leading-tight mb-6">
          The <span className="text-[#00B4D8] font-bold">Internet</span> Never
          Sleeps – Why Should Your Career?
        </h1>


      </div>

            <RightSideSection />

    </div>
  );
}

export default DigitalMarketingHero;
