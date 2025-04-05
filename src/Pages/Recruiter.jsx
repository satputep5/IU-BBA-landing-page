import React, { useEffect, useState } from 'react';
 
import logo1 from "../assets/Images/bba-logo/Wireframe - 1.avif";
import logo2 from "../assets/Images/bba-logo/Wireframe - 2.avif";
import logo3 from "../assets/Images/bba-logo/Wireframe - 3.avif";
import logo4 from "../assets/Images/bba-logo/Wireframe - 4.avif";
import logo5 from "../assets/Images/bba-logo/Wireframe - 5.avif";
import logo6 from "../assets/Images/bba-logo/Wireframe - 6.avif";
import logo7 from "../assets/Images/bba-logo/Wireframe - 7.avif";
import logo8 from "../assets/Images/bba-logo/Wireframe - 8.avif";
import logo9 from "../assets/Images/bba-logo/Wireframe - 9.avif";
import logo10 from "../assets/Images/bba-logo/Wireframe - 10.avif";
import logo11 from "../assets/Images/bba-logo/Wireframe - 11.avif";
import logo12 from "../assets/Images/bba-logo/Wireframe - 12.avif";
import logo13 from "../assets/Images/bba-logo/Wireframe - 13.avif";
import logo14 from "../assets/Images/bba-logo/Wireframe - 14.avif";
import logo15 from "../assets/Images/bba-logo/Wireframe - 15.avif";
import logo16 from "../assets/Images/bba-logo/Wireframe - 16.avif";
import logo17 from "../assets/Images/bba-logo/Wireframe - 17.avif";
import logo18 from "../assets/Images/bba-logo/Wireframe - 18.avif";
import logo19 from "../assets/Images/bba-logo/Wireframe - 19.avif";
import logo20 from "../assets/Images/bba-logo/Wireframe - 20.avif";
import logo21 from "../assets/Images/bba-logo/Wireframe - 21.avif";
import logo22 from "../assets/Images/bba-logo/Wireframe - 22.avif";
import logo23 from "../assets/Images/bba-logo/Wireframe - 23.avif";
import logo24 from "../assets/Images/bba-logo/Wireframe - 24.avif";
import logo25 from "../assets/Images/bba-logo/Wireframe - 25.avif";
import logo26 from "../assets/Images/bba-logo/Wireframe - 26.avif";
import logo27 from "../assets/Images/bba-logo/Wireframe - 27.avif";
import logo28 from "../assets/Images/bba-logo/Wireframe - 28.avif";
import logo29 from "../assets/Images/bba-logo/Wireframe - 29.avif";
import logo30 from "../assets/Images/bba-logo/Wireframe - 30.avif";
import logo31 from "../assets/Images/bba-logo/Wireframe - 31.avif";
import logo32 from "../assets/Images/bba-logo/Wireframe - 32.avif";
 
const CompRecruiter = () => {
  const [isVisible, setIsVisible] = useState(true);
 
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, 
    logo19, logo20, logo21,  logo23, logo24,
    logo25, logo26, logo27, logo28, logo29, 
    logo31, logo32, logo10, logo22, logo18, logo30,
  ];
 
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
 
    document.addEventListener('visibilitychange', handleVisibilityChange);
 
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
 
  return (
    <div className="logo-slider-section py-4 roboto-regular">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#135883]">
          <span >Top Recruiters</span>
        </h2>
      </div>
      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${isVisible ? 'animate' : ''}`}>
          {/* Map over the logos and display them */}
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide flex-none mx-3  md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 md:h-24 max-w-[160px] object-contain"
              />
            </div>
          ))}
 
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                className="h-16 md:h-24 max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
 
        <div className="absolute left-0 top-0 h-full w-24  to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 to-transparent z-10" />
      </div>
 
      <style>{`
        .logo-slider {
          position: relative;
          padding: 0 20px;
        }
 
        .logo-slider-track {
          display: flex;
          width: fit-content;
        }
 
        .logo-slider-track.animate {
          animation: slide 40s linear infinite;
        }
 
        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
 
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
 
        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }
 
        @media (max-width: 640px) {
          .logo-slider-track.animate {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};
 
export default CompRecruiter;