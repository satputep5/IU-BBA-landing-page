import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaUsers, FaRegClipboard, FaDollarSign, FaBoxOpen } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function LogisticsAndSCMOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      // Set the initial state of icons (no rotation)
      gsap.set(icon, { rotationY: 0 });

      // On hover: Flip the icon horizontally
      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(icon, { rotationY: 360, duration: 0.3 });
        gsap.to(circle, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
      });

      // On mouse leave: Reset the icon back to its original state
      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
        gsap.to(circle, { x: -40, opacity: 0, duration: 0.5, ease: 'power2.out' }); // Moves the circle back to the left
      });
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-[#1f2937]" data-aos="fade-up">
        Why Choose Indira University for Logistics & SCM?
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Card 1 - Vibrant Campus Life */}
        <div
          className="group bg-[#3B82F6] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaUsers size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Vibrant Campus Life</p>
          <p className="text-sm text-white mt-2">Experience exciting entrepreneurship events, business competitions, and networking summits while being part of a dynamic student community.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>

        {/* Card 2 - Sports & Extracurriculars */}
        <div
          className="group bg-[#EC4899] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaHandshake size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Sports & Extracurriculars</p>
          <p className="text-sm text-white mt-2">Stay active with state-of-the-art sports facilities, tournaments, and inter-college championships for a well-rounded college experience.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>

        {/* Card 3 - Top Placements & Career Support */}
        <div
          className="group bg-[#9333EA] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegCalendarAlt size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Top Placements & Career Support</p>
          <p className="text-sm text-white mt-2">Secure opportunities with leading startups, venture-backed firms, and innovation-driven enterprises.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>

        {/* Card 4 - Hands-on Learning */}
        <div
          className="group bg-[#10B981] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaChartLine size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Hands-on Learning</p>
          <p className="text-sm text-white mt-2">Practical learning experience with real-world applications.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>

        {/* Card 5 - Industry Visits */}
        <div
          className="group bg-[#F59E0B] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaRegClipboard size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry Visits</p>
          <p className="text-sm text-white mt-2">Gain real-world insights through company visits to logistics & supply chain operations.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>

        {/* Card 6 - Industry Mentors */}
        <div
          className="group bg-[#D97706] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaDollarSign size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Industry Mentors</p>
          <p className="text-sm text-white mt-2">Learn from top industry professionals from Amazon, FedEx, and Flipkart.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>

        {/* Card 7 - Global Supply Chain Simulations */}
        <div
          className="group bg-[#059669] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBoxOpen size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Global Supply Chain Simulations</p>
          <p className="text-sm text-white mt-2">Solve real-world trade challenges through cutting-edge simulations.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>

        {/* Card 8 - Certification Courses */}
        <div
          className="group bg-[#F43F5E] p-4 shadow-xl flex flex-col items-start justify-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px] flex-shrink-0"
          data-aos="fade-up"
        >
          <FaBullhorn size={50} className="text-white mb-4 icon" />
          <p className="text-lg font-semibold text-white">Certification Courses</p>
          <p className="text-sm text-white mt-2">Enhance your skills with certifications in Logistics & Transportation, Inventory Management, and Procurement & Vendor Management.</p>
          <div className="circle absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-white rounded-full shadow-2xl opacity-0" style={{ x: '-40px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default LogisticsAndSCMOfferings;
