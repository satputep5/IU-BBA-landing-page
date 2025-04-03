import React, { useEffect } from 'react';
import { FaChalkboard } from 'react-icons/fa';  // For program format
import { FaRegClock } from 'react-icons/fa';    // For duration
import { FaChartLine } from 'react-icons/fa';   // Updated icon for Highest CTC

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function MarketingManagementPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation happens only once
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-2 md:py-6 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#F6FBFF] p-4 shadow-lg flex flex-col items-center justify-center" 
          data-aos="fade-up"
        >
          <FaChalkboard size={40} className="text-[#135683]" />
          <div className="text-center mt-2">
            <h2 className="text-[#135683] text-lg md:text-3xl font-semibold">Program Format</h2>
            <p className="mt-2 text-lg md:text-3xl font-semibold text-[#2A9DA2]">Offline</p>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#F6FBFF] p-4 shadow-lg flex flex-col items-center justify-center" 
          data-aos="fade-up"
        >
          <FaRegClock size={40} className="text-[#208098]" />
          <div className="text-center mt-2">
            <h2 className="text-[#135683] text-lg md:text-3xl font-semibold">Duration</h2>
            <p className="mt-2 text-lg md:text-3xl font-semibold text-[#2A9DA2]">
              BBA - 3 yrs <br /> Hons. - 4 yrs
            </p>
          </div>
        </div>

        {/* Card 3: Highest CTC */}
        <div
          className="bg-[#F6FBFF] p-4 shadow-lg flex flex-col items-center justify-center" 
          data-aos="fade-up"
        >
          <FaChartLine size={40} className="text-[#2A9DA2]" /> {/* Updated Icon */}
          <div className="text-center mt-2">
            <h2 className="text-[#135683] text-lg md:text-3xl font-semibold">Highest CTC</h2>
            <p className="mt-2 text-lg md:text-3xl font-semibold text-[#2A9DA2]">8 LPA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
