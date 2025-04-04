import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaUsers, FaRegClipboard } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

      // Default: No rotation
      gsap.set(icon, { rotationY: 0 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 360, duration: 0.5, ease: "power2.inOut" }); // Flip effect on hover
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.5, ease: "power2.inOut" }); // Back to default orientation
      });
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-4 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-[#000000]" data-aos="fade-up">
        Why Choose BBA at Indira University?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center max-w-auto mx-auto md:max-w-4xl">
        {[FaBullhorn, FaHandshake, FaRegCalendarAlt, FaChartLine, FaUsers, FaRegClipboard].map((Icon, index) => (
          <div key={index} className="bg-[#135783] p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Icon size={40} className="text-white mb-4 icon" />
            <p className="text-md md:text-lg font-semibold text-white">
              {[
                'Best private BBA college with 100% placement assistance',
                'Top recruiters like JusPay, KPMG, Amazon, Accenture, Airtel, and Zomato',
                'BBA program with placement in leading MNCs and startups',
                'Industry-focused BBA course details with hands-on projects & internships',
                'BBA course eligibility – Open to students from any stream after 12th',
                'Modern campus, expert faculty, global exposure, massive brand events, GUSTO, Sports facilities',
              ][index]}
            </p>
            <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BbaAdmissionOfferings;
