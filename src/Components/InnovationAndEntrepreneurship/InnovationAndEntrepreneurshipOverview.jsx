import React, { useEffect, useState } from "react";
// Import the images
import Image1 from "../../assets/Images/isbs-1.avif"; // Add your first image
import Image2 from "../../assets/Images/isbs-std.avif"; // Add your second image
import Image3 from "../../assets/Images/isbs-class.avif"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function InnovationAndEntrepreneurshipOverview() {
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
    <div className="flex flex-col md:flex-row-reverse justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular gap-x-8">
      {/* Left Part: Program Overview */}
      <div className="flex-1" data-aos="fade-left">
        {/* Small "Innovation & Entrepreneurship" Text above heading */}
        <p className="text-lg text-[#FDCB6E] mb-2">Program Overview</p>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Innovation & Entrepreneurship
        </h2>

        <p className="text-lg text-gray-600">
        A BBA in Entrepreneurship equips students with the skills to turn ideas into successful businesses. As one of the best colleges for BBA Entrepreneurship in India, we provide hands-on experience in business incubators for BBA students, mentorship from industry leaders, and real-world exposure to startup opportunities after BBA Entrepreneurship. With high salary after BBA in Entrepreneurship and countless top business ideas after BBA Entrepreneurship, your journey as a future business leader starts here! 
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

export default InnovationAndEntrepreneurshipOverview;
