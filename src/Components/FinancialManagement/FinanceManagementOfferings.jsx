import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaUniversity, FaBriefcase, FaRobot, FaMicrophoneAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FinanceManagementOfferings() {
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
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.1 });
        gsap.to(icon, { rotationY: 0, duration: 0.1 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.1 });
        gsap.to(icon, { rotationY: 180, duration: 0.1 });
      });
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#1D3557]" data-aos="fade-up">
        Why Indira University School of Business for Finance?
      </h2>

      <div className="flex justify-center gap-6 flex-nowrap">
        {/* Card 1 - Live Stock Market Trading Labs */}
        <div className="bg-[#1D3557] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px]" data-aos="fade-up">
          <FaUniversity size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Live Stock Market Trading Labs</p>
          <p className="text-sm text-white mt-2">Learn how to analyze real-time markets!</p>
          {/* Circle on hover */}
          <div className="circle absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300"></div>
        </div>

        {/* Card 2 - Internships in Top Banks */}
        <div className="bg-[#388A86] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px]" data-aos="fade-up">
          <FaBriefcase size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Internships in Top Banks</p>
          <p className="text-sm text-white mt-2">Work with the best investment firms.</p>
          {/* Circle on hover */}
          <div className="circle absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300"></div>
        </div>

        {/* Card 3 - AI-Powered Finance Tools */}
        <div className="bg-[#09955D] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px]" data-aos="fade-up">
          <FaRobot size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">AI-Powered Finance Tools</p>
          <p className="text-sm text-white mt-2">Hands-on training with Bloomberg, Reuters, and Algo Trading.</p>
          {/* Circle on hover */}
          <div className="circle absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300"></div>
        </div>

        {/* Card 4 - Exclusive Guest Lectures */}
        <div className="bg-[#4C8BF5] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px]" data-aos="fade-up">
          <FaMicrophoneAlt size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Exclusive Guest Lectures</p>
          <p className="text-sm text-white mt-2">Learn from CFOs, Fund Managers, and Banking Experts.</p>
          {/* Circle on hover */}
          <div className="circle absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}

export default FinanceManagementOfferings;
