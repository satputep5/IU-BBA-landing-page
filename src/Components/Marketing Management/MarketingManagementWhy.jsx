import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaUsers, FaUserTie, FaChalkboardTeacher, FaLeaf, FaFutbol, FaBriefcase } from 'react-icons/fa';
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
        {/* Card 1 - One of the Best Colleges for BBA in Marketing */}
        <div
          className="bg-[#3498db] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaUsers size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">One of the Best Colleges for BBA in Marketing</p>
          <p className="text-sm text-white mt-2">Top placement opportunities and industry connections!</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 2 - Industry-Integrated Curriculum */}
        <div
          className="bg-[#e74c3c] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBullhorn size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry-Integrated Curriculum</p>
          <p className="text-sm text-white mt-2">Learn from case studies of Netflix, Zomato & Google.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 3 - Exclusive Guest Lectures */}
        <div
          className="bg-[#9b59b6] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaUserTie size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Exclusive Guest Lectures</p>
          <p className="text-sm text-white mt-2">
            Learn from CEOs, startup mentors, and angel investors who share insights into the entrepreneurial world.
          </p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 4 - Industry Readiness Programme */}
        <div
          className="bg-[#2ecc71] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaChalkboardTeacher size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry Readiness Programme</p>
          <p className="text-sm text-white mt-2">
            Gain critical business skills, leadership training, and market insights to thrive in the startup ecosystem.
          </p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 5 - Vibrant Campus Life */}
        <div
          className="bg-[#f39c12] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaLeaf size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Vibrant Campus Life</p>
          <p className="text-sm text-white mt-2">
            Experience exciting entrepreneurship events, business competitions, and networking summits while being part of a dynamic student community.
          </p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 6 - Sports & Extracurriculars */}
        <div
          className="bg-[#f1c40f] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaFutbol size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Sports & Extracurriculars</p>
          <p className="text-sm text-white mt-2">
            Stay active with state-of-the-art sports facilities, tournaments, and inter-college championships for a well-rounded college experience.
          </p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 7 - Top Placements & Career Support */}
        <div
          className="bg-[#1abc9c] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBriefcase size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Top Placements & Career Support</p>
          <p className="text-sm text-white mt-2">
            Secure opportunities with leading startups, venture-backed firms, and innovation-driven enterprises.
          </p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementOfferings;
