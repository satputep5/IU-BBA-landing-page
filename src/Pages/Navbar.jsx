import React from "react";

// Import images
import logo from "../assets/Images/IU-Logo.jpg";

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

      {/* Navbar (not fixed, so it will scroll with the page) */}
      <nav className="bg-gray-900 shadow-lg w-full">
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between px-4 md:px-16 py-0 md:py-2">
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

          {/* Centered Text with Animation and Effects */}
          <div
            className="flex-grow text-center text-white text-md  md:text-3xl font-bold  sm:mt-0"
            style={pulseTextAnimation}
          >
            Indira University <br />
            <span className="text-md">
              (formerly known as Indira Group of Institutes)
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
