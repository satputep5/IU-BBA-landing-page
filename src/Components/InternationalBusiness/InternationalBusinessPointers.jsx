import React, { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; 
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
    <div className="px-8 md:px-16 py-6 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center" 
          data-aos="fade-up"
        >
          <FaCalendarAlt size={40} className="text-[#FF4C4C]" />
          <h2 className="mt-4 text-[#321aed]">Program Format</h2>
          <p className="mt-2 text-xl font-semibold text-[#0f0273]">Offline</p>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center" 
          data-aos="fade-up"
        >
          <FaRegClock size={40} className="text-[#4C8BF5]" />
          <h2 className="mt-4 text-[#321aed]">Duration</h2>
          <p className="mt-2 text-xl font-semibold text-[#0f0273]">3 Years</p>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center" 
          data-aos="fade-up"
        >
          <FaMoneyBillWave size={40} className="text-[#09955d]" />
          <h2 className="mt-4 text-[#321aed]">Program Fees</h2>
          <p className="mt-2 text-xl font-semibold text-[#0f0273]">Rs. 1,25,000/-</p>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
