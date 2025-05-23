// src/components/MarketingManagementJoin.js
import React from 'react';
import backgroundImage from '../../assets/Images/nb-abstract.avif'; // Adjust the path as necessary
import ApplyButton from '../ApplyButton'; // Import the ApplyButton component

function MarketingManagementJoin() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Green overlay with updated gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#003C84] via-[#018697] to-[#018697] opacity-70 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 py-4">
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-6 mt-2">
            Apply for BBA today to secure admission at Indira University, one of the top BBA colleges in Pune.
          </h1>
          <p className="text-xl text-gray-200 mb-4 md:mb-8">
            Your journey to a successful career starts here!
          </p>
          <ApplyButton /> {/* Using the ApplyButton component */}
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementJoin;
