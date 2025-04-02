import React, { useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa'; // Added Icon for Highest CTC

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
    <div className="px-8 md:px-16 py-12 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center space-y-2"
          data-aos="fade-up"
        >
          <FaCalendarAlt size={40} className="text-[#FF4C4C]" />
          <div className="text-center">
            <h2 className="text-[#388A86]">Program Format</h2>
            <p className="mt-1 text-2xl font-semibold text-[#388A86]">Offline</p>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center space-y-2"
          data-aos="fade-up"
        >
          <FaRegClock size={40} className="text-[#4C8BF5]" />
          <div className="text-center">
            <h2 className="text-[#388A86]">Duration</h2>
            <p className="mt-2 text-2xl font-semibold text-[#2A9DA2]">
              BBA - 3 yrs <br /> Hons. - 4 yrs
            </p>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center space-y-2"
          data-aos="fade-up"
        >
          <FaMoneyBillWave size={40} className="text-[#09955d]" />
          <div className="text-center">
            <h2 className="text-[#388A86]">Program Fees</h2>
            <p className="mt-1 text-2xl font-semibold text-[#388A86]">Rs. 1,25,000/-</p>
          </div>
        </div>

        {/* Card 4: Highest CTC */}
        <div
          className="bg-[#F6FBFF] p-2 shadow-lg flex flex-col items-center justify-center space-y-2"
          data-aos="fade-up"
        >
          <FaChartLine size={40} className="text-[#FFD700]" /> {/* Updated Icon */}
          <div className="text-center">
            <h2 className="text-[#388A86]">Highest CTC</h2>
            <p className="mt-1 text-2xl font-semibold text-[#388A86]">6 LPA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPointers;
