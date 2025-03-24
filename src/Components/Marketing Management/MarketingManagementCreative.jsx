import { FaRocket, FaTv, FaShoppingCart, FaMobileAlt } from 'react-icons/fa'; // Icons for each point
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function CreativeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#388a86]" data-aos="fade-up">
        The Power of Marketing
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#03e29f]" data-aos="fade-up">
        The Marketing Universe – What’s Your Calling?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {/* Branding */}
        <div
          className="bg-[#4CAF50] p-6 rounded-xl shadow-xl text-center transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaRocket size={50} className="text-white mb-4 mx-auto" />
          <p className="text-lg font-semibold text-white">Branding</p>
          <p className="text-sm text-white mt-2">Learn how brands like Tesla and Zomato create cult followings.</p>
        </div>

        {/* Advertising */}
        <div
          className="bg-[#FF5733] p-6 rounded-xl shadow-xl text-center transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaTv size={50} className="text-white mb-4 mx-auto" />
          <p className="text-lg font-semibold text-white">Advertising</p>
          <p className="text-sm text-white mt-2">Decode what makes Super Bowl ads so unforgettable.</p>
        </div>

        {/* Consumer Psychology */}
        <div
          className="bg-[#00BFFF] p-6 rounded-xl shadow-xl text-center transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaShoppingCart size={50} className="text-white mb-4 mx-auto" />
          <p className="text-lg font-semibold text-white">Consumer Psychology</p>
          <p className="text-sm text-white mt-2">Understand why we crave discounts, trends, and luxury.</p>
        </div>

        {/* Digital Marketing */}
        <div
          className="bg-[#9C27B0] p-6 rounded-xl shadow-xl text-center transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaMobileAlt size={50} className="text-white mb-4 mx-auto" />
          <p className="text-lg font-semibold text-white">Digital Marketing</p>
          <p className="text-sm text-white mt-2">Explore how influencers and AI are shaping marketing today.</p>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-center mt-8 text-[#1f2937]" data-aos="fade-up">
        You can be any of these!
      </h3>
    </div>
  );
}

export default CreativeSection;
