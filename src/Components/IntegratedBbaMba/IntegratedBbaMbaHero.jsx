import React from 'react';
import backgroundImage from '../../assets/Images/bba+mba.webp';
import AnotherComponent from '../IntegratedBbaMba/IntegratedBbaMbaForm'; // Import your component

function IntegratedBbaMbaHero() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#012C64] to-[#00183D]">
      <img
        src={backgroundImage}
        alt="Integrated BBA MBA"
        className="absolute top-0 left-0 w-auto h-full object-contain"
      />

      {/* New div container */}
      <div className="flex w-full h-full items-center justify-center relative z-10 px-4">
        {/* Text Section */}
        <div className="w-1/2 text-white text-center md:text-left">

        </div>

        {/* Component Section */}
        <div className="w-1/2 flex items-center justify-center">
          <AnotherComponent />
        </div>
      </div>
    </div>
  );
}

export default IntegratedBbaMbaHero;
