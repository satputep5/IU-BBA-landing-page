import React, { useEffect } from "react";
// Import the images
import Image1 from "../../assets/Images/po-a.png"; // Add your first image
import Image2 from "../../assets/Images/po-d.png"; // Add your second image
import Image3 from "../../assets/Images/po-c.png"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function InnovationAndEntrepreneurshipOverview() {
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
        {/* Small "Innovation & Entrepreneurship" Text above heading */}
        <p className="text-lg text-[#FDCB6E] mb-2">Program Overview</p>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Innovation & Entrepreneurship
        </h2>

        <p className="text-xl text-gray-600">
          A BBA in Entrepreneurship equips students with the skills to turn
          ideas into successful businesses. As one of the best colleges for BBA
          Entrepreneurship in India, we provide hands-on experience in business
          incubators for BBA students, mentorship from industry leaders, and
          real-world exposure to startup opportunities after BBA
          Entrepreneurship. Whether you're exploring funding options for BBA
          entrepreneurs or learning the difference between BBA Entrepreneurship
          & MBA Entrepreneurship, this program prepares you for success. With
          high salary after BBA in Entrepreneurship and countless top business
          ideas after BBA Entrepreneurship, your journey as a future business
          leader starts here!
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
                  Students Impacted in Thriving BBA Careers
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

export default InnovationAndEntrepreneurshipOverview;
