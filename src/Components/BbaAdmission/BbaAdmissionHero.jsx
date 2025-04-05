import React, { useEffect } from "react";
import gsap from "gsap";
import RightSideSection from "../RightSideSection";
import bgImage from '../../assets/Images/Landing Page _ IU_1jpg.jpg';

function BbaAdmission() {
  useEffect(() => {
    gsap.to(".stat-box", {
      y: "-10px",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      className="px-8 md:px-16 relative text-black flex flex-col md:flex-row items-center h-auto space-x-2"
      style={{
        fontFamily: "Helvetica Neue Black, sans-serif",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1
          className="text-3xl md:text-4xl text-[#000000] font-semibold leading-tight mb-1 md:mb-6 mt-2"
          data-aos="fade-up"
        >
          Build Your Future with <span className="font-bold text-[#000000]">BBA</span>{" "}
          at School of Business (Indira University)
        </h1>

        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          data-aos="fade-right"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
                type="email"
                id="email"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9DA2] focus:outline-none focus:ring-2 focus:ring-[#2A9DA2] backdrop-blur-md"
                placeholder="Enter your email"
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

            <div>
              <select
                id="course"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9DA2] focus:outline-none focus:ring-2 focus:ring-[#2A9DA2] backdrop-blur-md"
                required
              >
                <option value="">Select Course</option>
                <option value="marketing-management">Marketing Management</option>
                <option value="financial-management">Financial Management</option>
                <option value="human-resource-management">Human Resource Management</option>
                <option value="logistics-supply-chain-management">Logistics & Supply Chain Management</option>
                <option value="international-business">International Business</option>
                <option value="banking-financial-services">Banking & Financial Services</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="innovation-entrepreneurship">Innovation & Entrepreneurship</option>
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

      <RightSideSection />
    </div>
  );
}

export default BbaAdmission;
