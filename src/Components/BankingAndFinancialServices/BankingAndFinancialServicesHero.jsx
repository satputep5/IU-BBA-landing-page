import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import RightSideSection from "../RightSideSection"; // Import the new child component

function BankingAndFinancialServicesHero() {
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
      className="px-8 md:px-16 relative bg-cover bg-[#75b7d1] bg-right md:bg-center bg-no-repeat text-white flex items-center min-h-[80vh]"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1 className="text-[34px] text-[#FFFFFF] font-semibold leading-tight mb-6">
          BBA in Banking & Financial Services at School of Business
          (Indira University)
        </h1>

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
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#D6F0FF] to-[#F0F8FF] text-black rounded border border-[#2A7B72] focus:outline-none focus:ring-2 focus:ring-[#2A7B72]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#D6F0FF] to-[#F0F8FF] text-black rounded border border-[#2A7B72] focus:outline-none focus:ring-2 focus:ring-[#2A7B72]"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#D6F0FF] to-[#F0F8FF] text-black rounded border border-[#2A7B72] focus:outline-none focus:ring-2 focus:ring-[#2A7B72]"
                required
              >
                <option value="Banking and Financial Services">
                  Banking and Financial Services
                </option>
                <option value="Marketing Management">
                  Marketing Management
                </option>
                <option value="Financial Management">
                  Financial Management
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
                className="w-full py-3 bg-[#264653] text-white rounded-lg hover:bg-[#75b7d1]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <p className="italic text-black my-4 text-2xl">
          30 Years of Excellence in Education | 8 Specializations | 100%
          Placement Assistance
        </p>

        <h1 className="text-3xl text-[#FFFFFF] font-semibold leading-tight mb-6">
          <span className="text-[#264653] font-bold">
            Banking and Financial Services:
          </span>{" "}
          Power economies and shape futures
        </h1>


      </div>

      <RightSideSection />
    </div>
  );
}

export default BankingAndFinancialServicesHero;
