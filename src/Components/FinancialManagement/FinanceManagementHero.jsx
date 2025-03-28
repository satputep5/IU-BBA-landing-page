import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection"; // Import the new child component

function FinanceManagementHero() {
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
        {/* New Heading Above Existing Heading */}
        <h1 className="text-[34px] text-[#0e1133] font-bold leading-tight mb-6">
          BBA in Finance at School of Business (Indira University)
        </h1>

        {/* <p className="mt-4 text-2xl text-black">
          The best BBA college in Pune!
        </p> */}

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(29, 53, 87, 0.3)", // Semi-transparent #1D3557
          }}
        >
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                required
              >
                <option value="Financial Management">
                  Financial Management
                </option>
                <option value="Banking and Financial Services">
                  Banking and Financial Services
                </option>
                <option value="Marketing Management">
                  Marketing Management
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
                className="w-full py-2 bg-[#1D3557] text-white rounded-lg hover:bg-[#132b47]"
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

        <h1 className="text-3xl text-[#0e1133] font-medium leading-tight mb-4">
          Master the Language of{" "}
          <span className="text-[#1D3557] font-bold">Money.</span> Turn Numbers
          into Strategy. Drive the Economy.
        </h1>

      </div>

      <RightSideSection />
    </div>
  );
}

export default FinanceManagementHero;
