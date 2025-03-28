import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaBuilding, FaGlobe, FaChalkboardTeacher, FaUsers, FaRunning } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function MarketingManagementOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#1f2937]" data-aos="fade-up">
        Why Indira University ?
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Card 1 - Global Business Simulations */}
        <div
          className="bg-[#3B82F6] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBullhorn size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Comprehensive International Business Curriculum </p>
          <p className="text-sm text-white mt-2">Master global trade, market entry strategies, and cross-border operations with industry-driven learning.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 2 - Industry Mentors from MNCs */}
        <div
          className="bg-[#EC4899] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaHandshake size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry Mentors from MNCs</p>
          <p className="text-sm text-white mt-2">Learn from global business leaders.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 5 - Top Placements in Leading Global Firms */}
        <div
          className="bg-[#F59E0B] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBuilding size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Top Placements in Leading Global Firms</p>
          <p className="text-sm text-white mt-2">Secure high-paying roles in multinational corporations, export-import companies, and international financial institutions.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* New Card 1 - Exclusive Guest Lectures */}
        <div
          className="bg-[#10B981] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaChalkboardTeacher size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Exclusive Guest Lectures</p>
          <p className="text-sm text-white mt-2">Learn from CEOs, startup mentors, and angel investors who share insights into the entrepreneurial world.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* New Card 2 - Industry Readiness Programme */}
        <div
          className="bg-[#F59E0B] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegCalendarAlt size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry Readiness Programme</p>
          <p className="text-sm text-white mt-2">Gain critical business skills, leadership training, and market insights to thrive in the startup ecosystem.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* New Card 3 - Vibrant Campus Life */}
        <div
          className="bg-[#F43F5E] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaUsers size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Vibrant Campus Life</p>
          <p className="text-sm text-white mt-2">Experience exciting entrepreneurship events, business competitions, and networking summits while being part of a dynamic student community.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* New Card 4 - Sports & Extracurriculars */}
        <div
          className="bg-[#3B82F6] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRunning size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Sports & Extracurriculars</p>
          <p className="text-sm text-white mt-2">Stay active with state-of-the-art sports facilities, tournaments, and inter-college championships for a well-rounded college experience.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

      </div>
    </div>
  );
}

export default MarketingManagementOfferings;
