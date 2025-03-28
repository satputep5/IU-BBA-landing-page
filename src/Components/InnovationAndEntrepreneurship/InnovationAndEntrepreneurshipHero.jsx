import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection"; // Import the new child component

function InnovationAndEntrepreneurshipHero() {
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
      className="px-8 md:px-16 relative bg-cover bg-[#f8f0e3] bg-right md:bg-center bg-no-repeat text-white flex items-center min-h-[80vh]"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1 className="text-[36px] text-[#0e1133] font-bold leading-tight mb-6">
          BBA in Innovation & Entrepreneurship at School of Business (Indira University)
        </h1>



        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(253, 203, 110, 0.3)", // Semi-transparent #FDCB6E
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fdfff0] to-[#f3ffd6] text-black rounded border border-[#FDCB6E] focus:outline-none focus:ring-2 focus:ring-[#FDCB6E]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fdfff0] to-[#f3ffd6] text-black rounded border border-[#FDCB6E] focus:outline-none focus:ring-2 focus:ring-[#FDCB6E]"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fdfff0] to-[#f3ffd6] text-black rounded border border-[#FDCB6E] focus:outline-none focus:ring-2 focus:ring-[#FDCB6E]"
                required
              >
                <option value="">Select Course</option>
                {/* Add course options here */}
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-[#FDCB6E] text-white rounded-lg hover:bg-[#D79C4C]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <p className="font-italic text-black my-2">
          30 Years of Excellence in Education | 8 Specializations | 100%
          Placement Assistance
        </p>

        <h1 className="text-3xl text-[#0e1133] font-medium leading-tight my-6">
          The Future Belongs to{" "}
          <span className="text-[#FDCB6E] font-bold">Innovators</span> &
          Entrepreneurs
        </h1>


      </div>

      <RightSideSection /> {/* New child component */}
    </div>
  );
}

export default InnovationAndEntrepreneurshipHero;
