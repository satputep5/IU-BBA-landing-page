import React from 'react';
import backgroundImage from '../../assets/Images/green-wave.jpg';  // Import your background image

function MarketingManagementNumbers() {
  return (
    <div className="relative overflow-hidden ">
      {/* Main content container */}
      <div
        className="relative flex justify-center items-center text-white py-8 px-8 md:px-16 poppins-regular "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Black Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-purple-600 opacity-50 "
        ></div>

        {/* Content (Stats) */}
        <div className="w-full max-w-7xl flex justify-around items-center relative z-10">
          {/* Stat 1: Successfully Trained */}
          <div className="text-center pr-4">
            <h3 className="text-4xl font-semibold text-white">3.9k+</h3>
            <p className="text-lg text-white">Successfully Trained</p>
          </div>

          {/* Divider */}
          <div className="border-r-2 border-[#d1e7e0] h-16"></div>

          {/* Stat 2: Classes Completed */}
          <div className="text-center px-4">
            <h3 className="text-4xl font-semibold text-white">15.8k+</h3>
            <p className="text-lg text-white">Classes Completed</p>
          </div>

          {/* Divider */}
          <div className="border-r-2 border-[#d1e7e0] h-16"></div>

          {/* Stat 3: Satisfaction Rate */}
          <div className="text-center px-4">
            <h3 className="text-4xl font-semibold text-white">97.5k+</h3>
            <p className="text-lg text-white">Satisfaction Rate</p>
          </div>

          {/* Divider */}
          <div className="border-r-2 border-[#d1e7e0] h-16"></div>

          {/* Stat 4: Students Community */}
          <div className="text-center pl-4">
            <h3 className="text-4xl font-semibold text-white">100.2k+</h3>
            <p className="text-lg text-white">Students Community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementNumbers;
