import React from 'react';

// Import images
import logo from '../assets/Images/iu-combine.png';


function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg w-full">
      <div className="mx-auto flex items-center justify-between px-2 md:px-16">
        
        {/* Left Logo */}
        <div className="py-4">
          <a href="/">
            <img src={logo} alt="Logo" className="h-auto max-w-xs md:max-w-42" />
          </a>
        </div>

        {/* Right Logo */}
        {/* <div className="p-2">
          <a href="/">
            <img src={autonomousLogo} alt="Autonomous Logo" className="h-auto max-w-xs md:max-w-28" />
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;