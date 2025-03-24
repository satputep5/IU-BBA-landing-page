import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt } from 'react-icons/fa';
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
        Why Indira University for International Business?
      </h2>

      <div className="flex justify-center gap-6 flex-nowrap">
        {/* Card 1 - Global Business Simulations */}
        <div
          className="bg-[#3B82F6] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBullhorn size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Global Business Simulations</p>
          <p className="text-sm text-white mt-2">Experience international market entry strategies.</p>
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

        {/* Card 3 - International Internships & Exchange Programs */}
        <div
          className="bg-[#9333EA] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegCalendarAlt size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">International Internships & Exchange Programs</p>
          <p className="text-sm text-white mt-2">Get real exposure in foreign markets.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 4 - Live Export-Import Case Studies */}
        <div
          className="bg-[#10B981] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaChartLine size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Live Export-Import Case Studies</p>
          <p className="text-sm text-white mt-2">Work on real-world international trade projects.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementOfferings;
