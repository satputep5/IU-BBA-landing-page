import React from "react";
import backgroundImage from "../../assets/Images/green-wave.jpg"; // Adjust the path as necessary
import ApplyButton from "../ApplyButton"; // Import the ApplyButton component

function InnovationAndEntrepreneurshipJoin() {
  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Green overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FDCB6E] opacity-50 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 px-4 sm:px-8 md:px-16 py-3 md:py-6">
        <div className="text-center mb-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 mt-2">
            Apply for BBA in Innovation & Entrepreneurship Now!
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-2 md:mb-6">
            Ready to Build the Next Big Unicorn?
          </p>
          <ApplyButton /> {/* Using the ApplyButton component */}
        </div>
      </div>
    </div>
  );
}

export default InnovationAndEntrepreneurshipJoin;
