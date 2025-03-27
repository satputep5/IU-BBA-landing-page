import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaUsers, FaRegClipboard } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function HumanResourceOfferings() {
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
        Why Indira University?
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Card 1 - 30+ Years of Excellence */}
        <div
          className="bg-[#3B82F6] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBullhorn size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">30+ Years of Excellence</p>
          <p className="text-sm text-white mt-2">A legacy of producing top HR leaders.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 2 - Industry-Focused Curriculum */}
        <div
          className="bg-[#EC4899] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaHandshake size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry-Focused Curriculum</p>
          <p className="text-sm text-white mt-2">Learn the latest HR trends, labor laws, and people management strategies.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 3 - 100% Placement Assistance */}
        <div
          className="bg-[#9333EA] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegCalendarAlt size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">100% Placement Assistance</p>
          <p className="text-sm text-white mt-2">Work with top recruiters in corporate HR, consulting, and talent acquisition.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 4 - Live Case Studies & Simulations */}
        <div
          className="bg-[#10B981] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaChartLine size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Live Case Studies & Simulations</p>
          <p className="text-sm text-white mt-2">Gain real-world HR problem-solving skills.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 5 - Internships for BBA HR Students */}
        <div
          className="bg-[#3B82F6] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaUsers size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Internships for BBA HR Students</p>
          <p className="text-sm text-white mt-2">Practical exposure in HR operations, recruitment, and performance management.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>

        {/* Card 6 - HR Certification Courses */}
        <div
          className="bg-[#EC4899] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegClipboard size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">HR Certification Courses</p>
          <p className="text-sm text-white mt-2">Boost your profile with certifications in Talent Management, HR Analytics, Organizational Behavior, and Payroll & Compensation Management.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default HumanResourceOfferings;
