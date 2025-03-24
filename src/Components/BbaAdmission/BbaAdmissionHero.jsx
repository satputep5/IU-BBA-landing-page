import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import studentImage from "../../assets/Images/girl-wow.png"; // Ensure the image path is correct
import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from "react-icons/fa"; // Importing icons for each section

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
      className="px-8 md:px-16 relative bg-gradient-to-r from-[#135683] via-[#208098] to-[#2A9DA2] text-white flex items-center min-h-screen"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1
          className="text-3xl text-[#FFFFFF] font-semibold leading-tight mb-4"
          data-aos="fade-down"
        >
          BBA at Indira University
        </h1>
        <h1 className="text-4xl text-[#FFFFFF] font-semibold leading-tight mb-6"
          data-aos="fade-up">
          Build Your Business Future with <span className="font-bold">BBA</span>{" "}
          at Indira School of Business
        </h1>

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
           data-aos="fade-right"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent dark background for form container
          }}
        >
          <form className="space-y-4"
           >
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
                type="text"
                id="pincode"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9DA2] focus:outline-none focus:ring-2 focus:ring-[#2A9DA2] backdrop-blur-md"
                placeholder="Enter your pincode"
                pattern="\d{6}"
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
        {/* Small text below the form */}
        <p className="text-gray-200 text-sm mt-4 text-center ml-6"
         data-aos="fade-up">
          Your journey to a successful business career starts here!
        </p>
      </div>

      {/* Right side (Image of a student) */}
      <div className="flex justify-end w-full md:w-1/2 z-20 relative overflow-hidden">
        <div className="w-full h-full">
          <img
            src={studentImage}
            alt="Student Image"
            className="w-full h-full object-contain"
            style={{
              maxHeight: "100vh",
              objectFit: "contain",
            }}
          />
        </div>

{/* Funky Rectangle Stats (Replaced with new stats) */}

{/* First Box - 30 Years of Excellence */}
<div className="absolute bottom-6/12 left-0 p-3 bg-[#ffffff] text-black flex items-center space-x-4 rounded-lg shadow-md stat-box">
  {/* Icon inside a circle */}
  <div className="bg-blue-500 text-white p-2 rounded-full">
    <FaUserGraduate className="text-3xl" />
  </div>
  <div>
    <h3 className="font-semibold text-xl text-black">30 Years of Excellence</h3>
    <p className="text-sm text-black">
      In Business Education with <br /> top-tier programs.
    </p>
  </div>
</div>

{/* Second Box - 8 Specializations */}
<div className="absolute bottom-1/12 left-0 p-3 bg-[#ffffff] text-black flex items-center space-x-4 rounded-lg shadow-md stat-box">
  {/* Icon inside a circle */}
  <div className="bg-red-500 text-white p-2 rounded-full">
    <FaChalkboardTeacher className="text-3xl" />
  </div>
  <div>
    <h3 className="font-semibold text-xl text-black">8 Specializations</h3>
    <p className="text-sm text-black">
      Tailored programs across <br /> diverse business sectors.
    </p>
  </div>
</div>

{/* Third Box - 100% Placement Assistance */}
<div className="absolute bottom-3/12 right-0 p-3 bg-[#ffffff] text-black flex items-center space-x-4 rounded-lg shadow-md stat-box">
  {/* Icon inside a circle */}
  <div className="bg-green-500 text-white p-2 rounded-full">
    <FaUsers className="text-3xl" />
  </div>
  <div>
    <h3 className="font-semibold text-xl text-black">100% Placement Assistance</h3>
    <p className="text-sm text-black">
      Ensuring career growth and <br /> success for every student.
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

export default BbaAdmission;
