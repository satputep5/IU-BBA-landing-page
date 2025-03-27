import React, { useEffect } from "react";
// Import the images

import Image1 from "../../assets/Images/po-a.png"; // Add your first image
import Image2 from "../../assets/Images/po-d.png"; // Add your second image
import Image3 from "../../assets/Images/po-c.png"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function HumanResourceOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular gap-x-8 ">
      {/* Left Part: Program Overview */}
      <div className="flex-1" data-aos="fade-left">
        {/* Small "Human Resource" Text above heading */}
        <p className="text-lg text-[#2A9D64] mb-2">Program Overview</p>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Human Resource Management
        </h2>

        <p className="text-2xl text-gray-600 tracking-wide mb-2">
        In today’s fast-paced corporate world, Human Resource Management (HRM) is more than just hiring and payroll—it’s about shaping workplace culture, driving employee performance, and creating a thriving work environment.
        <br />
At ICEM, our BBA in HRM equips you with HR strategies, leadership skills, and industry insights to excel in talent management, organizational behavior, employee relations, and HR analytics.
 <br /> 
With expert faculty, real-world case studies, live projects, and top industry connections, you’ll be prepared for rewarding careers in corporate HR, recruitment, training & development, and strategic human capital management. 
        </p>

        <p className="text-2xl text-gray-800 tracking-wide">
          Learn it with Indira’s BBA in HRM!
        </p>
      </div>

      {/* Right Part: First and Second Images */}
      <div className="flex-1 bg-white flex">
        {/* First Image - Takes 65% of the width */}
        <div className="w-[65%]">
          <img
            src={Image1}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gap - 5% */}
        <div className="w-[5%]"></div>

        {/* Second Part - Two Vertical Images in 30% */}
        <div className="w-[30%] flex flex-col gap-4">
          {/* First Image with full overlay text */}
          <div className="relative w-full">
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-10 text-white text-lg font-semibold p-4 text-center">
              <div>
                <span className="text-6xl">10k+</span> <br />
                <span className="text-xl">
                  Students Impacted
                </span>
              </div>
            </div>
          </div>

          {/* Second Image below with padding */}
          <div className="w-full">
            <img
              src={Image3}
              alt="Image 3"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanResourceOverview;
