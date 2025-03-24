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
    <div className="px-8 md:px-16 py-12 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg flex items-center justify-center" 
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Icon color updated to #135683 */}
            <FaCalendarAlt size={40} className="text-[#135683]" />
            <div className="text-center">
              <h2 className="text-[#135683]">Program Format</h2>
              <p className="mt-2 text-2xl font-semibold text-[#2A9DA2]">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg flex items-center justify-center" 
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Icon color updated to #208098 */}
            <FaRegClock size={40} className="text-[#208098]" />
            <div className="text-center">
              <h2 className="text-[#135683]">Duration</h2>
              <p className="mt-2 text-2xl font-semibold text-[#2A9DA2]">3 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#F6FBFF] p-6 shadow-lg flex items-center justify-center" 
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center mr-4 space-x-4">
            {/* Icon color updated to #2A9DA2 */}
            <FaMoneyBillWave size={40} className="text-[#2A9DA2]" />
            <div className="text-center">
              <h2 className="text-[#135683]">Program Fees</h2>
              <p className="mt-2 text-2xl font-semibold text-[#2A9DA2]">Rs. 125000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
