import React, { useEffect, useState } from "react";
// Import the images
import Image1 from "../../assets/Images/isbs-1.avif"; // Add your first image
import Image2 from "../../assets/Images/isbs-std.avif"; // Add your second image
import Image3 from "../../assets/Images/isbs-class.avif"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function HumanResourceOverview() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the inline styles for responsive behavior
  const firstImageStyle = {
    width: screenWidth >= 800 ? "65%" : "100%",
    height: "100%", // Ensure it stretches to match the height of the right section
  };

  const secondPartStyle = {
    width: screenWidth >= 800 ? "30%" : "100%",
    height: "100%", // Keep the height consistent with the left part
  };

  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular gap-x-8 overflow-hidden">
      {/* Left Part: Program Overview */}
      <div className="flex-1" data-aos="fade-left">
        {/* Small "Human Resource" Text above heading */}
        <p className="text-lg text-[#2A9D64] mb-2">Program Overview</p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Human Resource Management
        </h2>

        <p className="text-md md:text-xl text-gray-600 tracking-wide mb-2">
          In today’s fast-paced corporate world, Human Resource Management (HRM)
          is more than just hiring and payroll—it’s about shaping workplace
          culture, driving employee performance, and creating a thriving work
          environment.
          <br />
          At ICEM, our BBA in HRM equips you with HR strategies, leadership
          skills, and industry insights to excel in talent management,
          organizational behavior, employee relations, and HR analytics.
          <br />
          With expert faculty, real-world case studies, live projects, and top
          industry connections, you’ll be prepared for rewarding careers in
          corporate HR, recruitment, training & development, and strategic human
          capital management.
        </p>

        <p className="text-md md:text-xl text-gray-800 tracking-wide">
          Learn it with Indira’s BBA in HRM!
        </p>
      </div>

      {/* Right Part: First and Second Images */}
      {/* Right Part: First and Second Images */}
      <div className="flex-1 bg-white flex flex-col md:flex-row gap-4 md:gap-0">
        {/* First Image - Takes 100% width on small screens, 65% on large screens */}
        <div className="h-full flex-grow" style={firstImageStyle}>
          <div className="w-full h-auto">
            <img
              src={Image1}
              alt="Image 1"
              className="w-full h-full md:h-[50vh] object-cover" // Ensures image fills the container
            />
          </div>
        </div>

        {/* Gap - 5% */}
        <div className="w-[2%] hidden md:block"></div>

        {/* Second Part - Two Vertical Images in 100% width on small and medium screens, 30% on large screens */}
        <div className="flex flex-col gap-4 h-full " style={secondPartStyle}>
          {/* First Image with full overlay text and black overlay */}
          <div className="relative w-full h-full">
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-full hidden md:block object-cover rounded-md" // Ensures image fills the container
            />

          </div>

          {/* Second Image below with padding */}
          <div className="w-full h-full">
            <img
              src={Image3}
              alt="Image 3"
              className="w-full h-full object-cover hidden md:block rounded-md" // Ensures image fills the container
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanResourceOverview;
