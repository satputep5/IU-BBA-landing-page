import React, { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations
import girlImage from "../../assets/Images/girl-wow.png"; // Ensure the girl image path is correct
import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from "react-icons/fa"; // Importing icons for each section

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
      className="px-8 md:px-16 relative bg-cover bg-[#f8f0e3] bg-right md:bg-center bg-no-repeat text-white flex items-center max-h-screen"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center">
        <h1 className="text-[36px] text-[#0e1133] font-bold leading-tight mb-6">
        Bachelors of Business Administration in Innovation & Entrepreneurship with Indira School of Business at Indira University
        </h1>
        <h1 className="text-3xl text-[#0e1133] font-medium leading-tight mb-6">
        The Future Belongs to  {" "}
          <span className="text-[#FDCB6E] font-bold">
          Innovators
          </span>{" "}
          & Entrepreneurs
        </h1>
        <p className="mt-4 text-2xl text-black">
        The best BBA college in Pune!
        </p>

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
              <input
                type="email"
                id="email"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fdfff0] to-[#f3ffd6] text-black rounded border border-[#FDCB6E] focus:outline-none focus:ring-2 focus:ring-[#FDCB6E]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="pincode"
                className="w-full p-1.5 bg-gradient-to-r from-[#FFFFFF] via-[#fdfff0] to-[#f3ffd6] text-black rounded border border-[#FDCB6E] focus:outline-none focus:ring-2 focus:ring-[#FDCB6E]"
                placeholder="Enter your pincode"
                required
                maxLength="6" // Assuming India postal code is 6 digits
                pattern="\d{6}" // Ensures only 6 digits are entered
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
        {/* Small text below the form */}
        <p className="text-gray-500 text-sm mt-4 text-center ml-6">
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

export default InnovationAndEntrepreneurshipHero;
