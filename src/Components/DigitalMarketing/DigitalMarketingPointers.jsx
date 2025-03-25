import React, { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; 
import { FaRegClock } from 'react-icons/fa';  
import { FaMoneyBillWave } from 'react-icons/fa'; 

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function DigitalMarketingPointers() {
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
          <FaCalendarAlt size={40} className="text-blue-500" />
          <h2 className="mt-4 text-[#000000]">Program Format</h2>
          <p className="mt-2 text-xl font-semibold text-[#00B4D8]">Offline</p>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <FaRegClock size={40} className="text-red-500" />
          <h2 className="mt-4 text-[#000000]">Duration</h2>
          <p className="mt-2 text-xl font-semibold text-[#00B4D8]">3 Years</p>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <FaMoneyBillWave size={40} className="text-green-500" />
          <h2 className="mt-4 text-[#000000]">Program Fees</h2>
          <p className="mt-2 text-xl font-semibold text-[#00B4D8]">Rs. 1,25,000/-</p>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketingPointers;
