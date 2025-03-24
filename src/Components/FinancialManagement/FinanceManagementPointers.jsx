import React, { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';

// Import AOS for animations
import AOS from 'aos';

import 'aos/dist/aos.css'; // Import AOS styles

function FinanceManagementPointers() {
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
          className="bg-[#F6FBFF] p-6 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Changed icon color to deep blue */}
            <FaCalendarAlt size={40} className="text-[#1D3557]" />
            <div className="text-center">
              <h2 className="text-[#1D3557]">Program Format</h2>
              <p className="mt-2 text-2xl font-semibold text-[#1D3557]">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Changed icon color to deep blue */}
            <FaRegClock size={40} className="text-[#1D3557]" />
            <div className="text-center">
              <h2 className="text-[#1D3557]">Duration</h2>
              <p className="mt-2 text-2xl font-semibold text-[#1D3557]">4 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Changed icon color to deep green for a more finance-related feel */}
            <FaMoneyBillWave size={40} className="text-[#2E8B57]" />
            <div className="text-center">
              <h2 className="text-[#1D3557]">Program Fees</h2>
              <p className="mt-2 text-2xl font-semibold text-[#1D3557]">Rs. 108000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceManagementPointers;
