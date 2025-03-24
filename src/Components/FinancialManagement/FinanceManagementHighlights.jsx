import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';

// Import the image
import bgImage from '../../assets/Images/highbg.jpg';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function FinanceManagementHighlights() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing for the animation
      once: true, // Trigger animation only once when in view
    });
  }, []);

  return (
    <div
      className="poppins-regular" // Apply the regular Poppins font to the main content
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-8 md:px-16 py-6">
        <h1 className="text-3xl font-bold text-center mb-8 poppins-bold" data-aos="fade-up">
          Finance Management Highlights
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div
            className="bg-[#E1F4F3] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 bg-[#388A86] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
            </div>
            <p className="text-[#000000] poppins-regular">
              Ranked 49th in Top 100 Private Finance Institutes and Ranked 61st in Top 140 Institutes conducted by Business Times.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#E1F4F3] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-[#388A86] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faAward} className="text-2xl" />
            </div>
            <p className="text-[#000000] poppins-regular">
              Winners of Smart Finance Hackathon for three consecutive years organized by Ministry of Finance and NASSCOM.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#E1F4F3] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 bg-[#388A86] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faMedal} className="text-2xl" />
            </div>
            <p className="text-[#000000] poppins-regular">
              Received Outstanding Finance Education Institute Award by National Financial Education Awards 2018.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#E1F4F3] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 bg-[#388A86] text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
            </div>
            <p className="text-[#000000] poppins-regular">
              Accredited with ‘B++’ grade by National Accreditation and Assessment Council (NAAC) for Finance Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceManagementHighlights;
