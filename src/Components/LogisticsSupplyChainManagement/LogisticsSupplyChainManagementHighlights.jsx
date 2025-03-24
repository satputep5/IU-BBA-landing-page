import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';

// Import the image
import bgImage from '../../assets/Images/highbg.jpg';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function MarketingManagementHighlights() {
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
          Indira University Highlights
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div
            className="bg-[#F6FBFF] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 bg-[#f57714] text-white rounded-full flex items-center justify-center mb-4"> {/* Fresh green color */}
              <FontAwesomeIcon icon={faTrophy} className="text-2xl" />
            </div>
            <p className="text-gray-600 poppins-regular">
              Ranked 49th in Top 100 Private Engineering Institutes and Ranked 61st in Top 140 Engineering Institutes conducted by Times of India Engineering Colleges.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#F6FBFF] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-[#f57714] text-white rounded-full flex items-center justify-center mb-4"> {/* Fresh green color */}
              <FontAwesomeIcon icon={faAward} className="text-2xl" />
            </div>
            <p className="text-gray-600 poppins-regular">
              Ranking Survey - 2019 Winners of SmartIndia Hackathon for consecutive three years organized by Ministry of HRD, AICTE in association with NASSCOM.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#F6FBFF] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 bg-[#f57714] text-white rounded-full flex items-center justify-center mb-4"> {/* Fresh green color */}
              <FontAwesomeIcon icon={faMedal} className="text-2xl" />
            </div>
            <p className="text-gray-600 poppins-regular">
              Received Outstanding Education Institute (West) Award by National Education Awards 2018.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#F6FBFF] p-6 shadow-lg text-left overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 bg-[#f57714] text-white rounded-full flex items-center justify-center mb-4"> {/* Fresh green color */}
              <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
            </div>
            <p className="text-gray-600 poppins-regular">
              ICEM has been accredited with ‘B++’ grade by National Accreditation and Assessment Council (NAAC).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementHighlights;
