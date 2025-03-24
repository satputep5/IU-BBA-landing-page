import React, { useEffect } from "react";
// Import the images
import Image1 from "../../assets/Images/po-a.png"; // Add your first image
import Image2 from "../../assets/Images/po-d.png"; // Add your second image
import Image3 from "../../assets/Images/po-c.png"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function BankingAndFinancialServicesOverview() {
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
        {/* Small "Banking & Financial Services" Text above heading */}
        <p className="text-lg text-[#264653] mb-2">Program Overview</p>

        <h2 className="text-4xl font-bold text-[#264653] mb-4">
          Banking & Financial Services
        </h2>

        <p className="text-xl text-[#3E4B49]">
        Looking for a high-paying career in banking and finance after 12th? A BBA in Banking and Financial Services is your gateway to investment banking, wealth management, and digital finance. This course covers essential topics like risk management, stock markets, financial planning, and fintech innovations. With the growing demand for banking professionals in India, graduates can secure top roles in private banks, corporate finance, and NBFCs. Get hands-on experience with internships in leading banks, and earn industry-recognized certifications in financial analysis. 
        </p>

<p className="text-xl text-[#3E4B49] tracking-wide mt-2 font-semibold ">
Explore the best BBA colleges for banking and finance in India and take the first step toward a rewarding career
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
                <span className="text-6xl">5k+</span> <br />
                <span className="text-xl">Students Thriving in Finance Careers</span>
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

export default BankingAndFinancialServicesOverview;
