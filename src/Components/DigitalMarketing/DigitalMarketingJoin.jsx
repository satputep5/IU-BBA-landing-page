import React from "react";
import backgroundImage from "../../assets/Images/mark-join.jpg"; // Adjust the path as necessary
import ApplyButton from "../ApplyButton"; // Import the ApplyButton component

function MarketingManagementJoin() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Green overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00B4D8] opacity-70 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 py-2 md:py-4">
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-6 mt-2">
            Apply for BBA in Digital Marketing Now!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4 md:mb-8">
            The Future is Digital – Are You Ready to Lead It?
          </p>
          <ApplyButton /> {/* Using the ApplyButton component */}
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementJoin;
