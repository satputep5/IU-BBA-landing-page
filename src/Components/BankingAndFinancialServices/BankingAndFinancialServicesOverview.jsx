import React, { useEffect, useState } from "react";
// Import the images
import Image1 from "../../assets/Images/isbs-1.jpg"; // Add your first image
import Image2 from "../../assets/Images/isbs-std.jpg"; // Add your second image
import Image3 from "../../assets/Images/isbs-class.jpg"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function BankingAndFinancialServicesOverview() {
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
    height: "auto", // Ensure image adjusts to screen size properly
  };

  const secondPartStyle = {
    width: screenWidth >= 800 ? "30%" : "100%",
    height: "auto", // Keep the height consistent with the left part
  };

  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-3 md:py-6 poppins-regular gap-x-8 ">
      {/* Left Part: Program Overview */}
      <div className="flex-1" data-aos="fade-left">
        {/* Small "Banking & Financial Services" Text above heading */}
        <p className="text-lg text-[#264653] mb-2">Program Overview</p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#264653] mb-2 md:mb-4">
          Banking & Financial Services
        </h2>

        <p className="text-xl text-[#3E4B49]">
          A BBA in Banking and Financial Services is your gateway to investment
          banking, wealth management, and digital finance. This course consists
          risk management, stock markets, financial planning, and fintech
          innovations. With the growing demand for banking professionals in
          India, graduates can secure top roles in private banks, corporate
          finance, and NBFCs. Get hands-on experience with internships in
          leading banks, and earn industry-recognized certifications in
          financial analysis.
        </p>

        {/* <p className="text-xl text-[#3E4B49] tracking-wide mt-2 font-semibold ">
          Explore the best BBA colleges for banking and finance in India and
          take the first step toward a rewarding career
        </p> */}
      </div>

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

export default BankingAndFinancialServicesOverview;
