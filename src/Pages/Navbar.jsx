import React from "react";

// Import images
import logo from "../assets/Images/IU Logo Cobine Final.png";
import excellenceLogo from "../assets/Images/30ex.png"; // New image

function Navbar() {
  const pulseTextAnimation = {
    animation: "pulseText 2s ease-in-out infinite",
  };

  const pulseKeyframes = `
    @keyframes pulseText {
      0% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
      }
      100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7);
      }
    }
  `;

  return (
    <>
      {/* Inject CSS into the page */}
      <style>{pulseKeyframes}</style>

      {/* Navbar */}
      <nav className="bg-gray-900 shadow-lg w-full">
        <div className="mx-auto px-4 md:px-16 py-2">

          {/* Large screens layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left Logo */}
            <div className="mt-2">
              <a href="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-auto max-w-28 md:max-w-42"
                />
              </a>
            </div>

            {/* Centered Text with Animation */}
            <div
              className="flex-grow text-center text-white text-2xl md:text-3xl font-bold"
              style={pulseTextAnimation}
            >
              Indira University <br />
              <span className="text-sm md:text-base">
                (formerly known as Indira Group of Institutes)
              </span>
            </div>

            {/* Right Image (30 Years Excellence) */}
            <div className="mt-2">
              <img
                src={excellenceLogo}
                alt="30 Years Excellence"
                className="h-auto max-w-28 md:max-w-32"
              />
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            {/* First Row: Logo and 30 Years Excellence */}
            <div className="flex justify-between items-center mb-2">
              <img
                src={logo}
                alt="Logo"
                className="h-auto max-w-28"
              />
              <img
                src={excellenceLogo}
                alt="30 Years Excellence"
                className="h-auto max-w-28"
              />
            </div>

            {/* Second Row: Centered Text */}
            <div
              className="text-center text-white text-md md:text-3xl font-bold"
              style={pulseTextAnimation}
            >
              Indira University <br />
              <span className="text-sm md:text-base">
                (formerly known as Indira Group of Institutes)
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
