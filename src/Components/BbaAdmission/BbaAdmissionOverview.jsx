import React, { useEffect, useState } from "react";
// Import the images
import Image1 from "../../assets/Images/isbs-1.jpg"; // Add your first image
import Image2 from "../../assets/Images/isbs-std.jpg"; // Add your second image
import Image3 from "../../assets/Images/isbs-class.jpg"; // Add your third image

// Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

function BbaAdmissionOverview() {
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
        {/* Small "BBA Admission" Text above heading */}
        <p className="text-lg text-[#2896A0] mb-2">Program Overview</p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#135883] mb-4">
          BBA Programme
        </h2>

        <p className="text-md md:text-lg text-gray-600 tracking-wide">
          Looking for the best BBA colleges in Pune? Indira University, an
          established institution with a 30-year legacy of Indira Group of
          Institutes, offers a top BBA program in India designed for students
          who want to build a successful career across diverse industries. Our
          BBA admissions 2025 are now open, giving all ambitious students their
          chance to specialize in Marketing, Finance, HR, International
          Relations, Logistics & Supply Chain, Banking and Financial Services,
          Digital Marketing, Innovation, and Entrepreneurship.
        </p>
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
        <div className="flex flex-col gap-4 h-full" style={secondPartStyle}>
          {/* First Image with full overlay text and black overlay */}
          <div className="relative w-full h-full">
            <img
              src={Image2}
              alt="Image 2"
              className="w-full h-full object-cover rounded-md" // Ensures image fills the container
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Black overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-opacity-10 text-white text-lg font-semibold p-4 text-center">
              <div>
                <span className="text-4xl md:text-6xl">10k+</span> <br />
                <span className="text-base md:text-xl">Students Impacted</span>
              </div>
            </div>
          </div>

          {/* Second Image below with padding */}
          <div className="w-full h-full">
            <img
              src={Image3}
              alt="Image 3"
              className="w-full h-full object-cover rounded-md" // Ensures image fills the container
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BbaAdmissionOverview;
