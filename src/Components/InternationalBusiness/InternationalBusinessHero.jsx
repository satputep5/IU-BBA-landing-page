import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import girlImage from "../../assets/Images/girl-wow.png"; // Ensure the girl image path is correct
import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from "react-icons/fa"; // Importing icons for each section

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
      className="px-8 md:px-16 relative bg-cover bg-[#6C5CE7] bg-right md:bg-center bg-no-repeat text-white flex items-center max-h-screen"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1 className="text-[40px] text-[#0e1133] font-semibold leading-tight mb-6">
          Lead the Future of Global Trade with{" "}
          <span className="text-[#15068a] font-bold">International Business</span>{" "}
          at Indira University
        </h1>
        <p className="mt-4 text-2xl text-black">
          Innovative programs, expert faculty, and endless opportunities for
          growth await you.
        </p>

        {/* Form container below the text */}
        <div
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(45, 19, 241, 0.3)", // Semi-transparent colorrgb(48, 24, 231)
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
        <p className="text-gray-700 text-sm mt-4 text-center ml-6">
          You’re guaranteed to find something that’s right for you.
        </p>
      </div>

      {/* Right side (Image of a girl) */}
      <div className="flex justify-end w-full md:w-1/2 z-20 relative overflow-hidden">
        <div className="w-full h-full">
          <img
            src={girlImage}
            alt="Girl Image"
            className="w-full h-full object-contain"
            style={{
              maxHeight: "100vh",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Funky Rectangle Stats */}
        <div className="absolute bottom-6/12 left-0 p-3 bg-white flex items-center space-x-4 rounded-lg shadow-md stat-box">
          <div className="bg-[#ef8711] text-white p-2 rounded-full">
            <FaUserGraduate className="text-3xl" />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black">350 Students</h3>
            <p className="text-sm text-[#3b4241]">
              Enrolled in marketing management.
            </p>
          </div>
        </div>

        <div className="absolute bottom-1/12 left-0 p-3 bg-white flex items-center space-x-4 rounded-lg shadow-md stat-box">
          <div className="bg-[#da0707] text-white p-2 rounded-full">
            <FaChalkboardTeacher className="text-3xl" />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black">400 Classes</h3>
            <p className="text-sm text-[#3b4241]">
              Interactive and informative sessions.
            </p>
          </div>
        </div>

        <div className="absolute bottom-3/12 right-0 p-3 bg-white flex items-center space-x-4 rounded-lg shadow-md stat-box">
          <div className="bg-[#1528da] text-white p-2 rounded-full">
            <FaUsers className="text-3xl" />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black">100 Alumni</h3>
            <p className="text-sm text-[#3b4241]">
              Successful graduates making a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternationalBusinessHero;
