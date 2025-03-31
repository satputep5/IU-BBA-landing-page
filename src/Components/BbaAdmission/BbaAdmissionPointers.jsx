import React, { useEffect } from 'react';
import { FaChalkboard } from 'react-icons/fa';  // Using FaChalkboard for offline format
import { FaRegClock } from 'react-icons/fa';  
import { FaMoneyBillWave } from 'react-icons/fa'; 

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function MarketingManagementPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
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
          <FaChalkboard size={40} className="text-[#135683]" /> {/* Updated Icon */}
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

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#F6FBFF] p-4 shadow-lg flex flex-col items-center justify-center" 
          data-aos="fade-up"
        >
          <FaMoneyBillWave size={40} className="text-[#2A9DA2]" />
          <div className="text-center mt-2">
            <h2 className="text-[#135683] text-lg md:text-3xl font-semibold">Program Fees</h2>
            <p className="mt-2 text-lg md:text-3xl font-semibold text-[#2A9DA2]">Rs. 1,25,000/-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
