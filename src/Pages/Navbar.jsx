import React from 'react';

// Import images
import logo from '../assets/Images/IU-Logo.jpg';

function Navbar() {
  const pulseTextAnimation = {
    animation: 'pulseText 2s ease-in-out infinite',
  };

  const pulseKeyframes = `
    @keyframes pulseText {
      0% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
        transform: scale(1);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
        transform: scale(1.05);
      }
      100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
        transform: scale(1);
      }
    }
  `;

  return (
    <>
      {/* Inject CSS into the page */}
      <style>{pulseKeyframes}</style>

      {/* Navbar (not fixed, so it will scroll with the page) */}
      <nav className="bg-gray-900 shadow-lg w-full">
        <div className="mx-auto flex items-center justify-between px-2 md:px-16 py-1">
          {/* Left Logo */}
          <div className="py-4">
            <a href="/">
              <img src={logo} alt="Logo" className="h-auto max-w-xs md:max-w-42" />
            </a>
          </div>

          {/* Centered Text with Animation and Effects */}
          <div
            className="flex-grow text-center text-white text-xl md:text-3xl font-bold uppercase"
            style={pulseTextAnimation}
          >
            One of the Top BBA colleges in Pune, Maharashtra
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
