import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaUsers, FaRegClipboard } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function BbaAdmissionOfferings() {
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
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#000000]" data-aos="fade-up">
        Why Choose BBA at Indira University?
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Card 1 - Placement Assistance */}
        <div
          className="bg-[#135783] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBullhorn size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Best private BBA college with 100% placement assistance</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 2 - Top Recruiters */}
        <div
          className="bg-[#135783] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaHandshake size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Top recruiters like Deloitte, KPMG, EY, HDFC Bank, Amazon, and Infosys</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 3 - Industry-Focused Course */}
        <div
          className="bg-[#135783] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegCalendarAlt size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">BBA program with placement in leading MNCs and startups</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 4 - Industry-Focused Course */}
        <div
          className="bg-[#135783] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaChartLine size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry-focused BBA course details with hands-on projects & internships</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

                {/* Card 5 - Eligibility */}
                <div
          className="bg-[#135783] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaUsers size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">BBA course eligibility – Open to students from any stream after 12th</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 6 - Modern Campus */}
        <div
          className="bg-[#135783] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegClipboard size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Modern campus, expert faculty, global exposure, massive brand events, GUSTO, Sports facilities</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default BbaAdmissionOfferings;
