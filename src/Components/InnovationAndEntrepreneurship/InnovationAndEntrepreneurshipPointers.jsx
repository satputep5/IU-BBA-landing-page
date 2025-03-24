import React, { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; 
import { FaRegClock } from 'react-icons/fa';  
import { FaMoneyBillWave } from 'react-icons/fa'; 

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function InnovationAndEntrepreneurshipPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-12 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#fbf4e6] p-6 shadow-lg flex items-center justify-center" 
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Updated icon color to Golden Yellow */}
            <FaCalendarAlt size={40} className="text-blue-500" />
            <div className="text-center">
              <h2 className="text-[#FDCB6E]">Program Format</h2>
              <p className="mt-2 text-2xl font-semibold text-[#FDCB6E]">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#fbf4e6] p-6 shadow-lg flex items-center justify-center" 
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Updated icon color to Golden Yellow */}
            <FaRegClock size={40} className="text-red-500" />
            <div className="text-center">
              <h2 className="text-[#FDCB6E]">Duration</h2>
              <p className="mt-2 text-2xl font-semibold text-[#FDCB6E]">4 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#fbf4e6] p-6 shadow-lg flex items-center justify-center" 
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Updated icon color to Golden Yellow */}
            <FaMoneyBillWave size={40} className="text-green-500" />
            <div className="text-center">
              <h2 className="text-[#FDCB6E]">Program Fees</h2>
              <p className="mt-2 text-2xl font-semibold text-[#FDCB6E]">Rs. 108000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovationAndEntrepreneurshipPointers;
