// MarketingManagementPlacement.js
import React from 'react';

// Import the images for recruiters section
import img1 from '../../assets/Images/bba-logo/Wireframe - 1.png';
import img2 from '../../assets/Images/bba-logo/Wireframe - 2.png';
import img3 from '../../assets/Images/bba-logo/Wireframe - 3.png';
import img4 from '../../assets/Images/bba-logo/Wireframe - 4.png';
import img5 from '../../assets/Images/bba-logo/Wireframe - 5.png';
import img6 from '../../assets/Images/bba-logo/Wireframe - 6.png';
import img7 from '../../assets/Images/bba-logo/Wireframe - 7.png';
import img8 from '../../assets/Images/bba-logo/Wireframe - 8.png';
import img9 from '../../assets/Images/bba-logo/Wireframe - 9.png';
import img10 from '../../assets/Images/bba-logo/Wireframe - 10.png';
import img11 from '../../assets/Images/bba-logo/Wireframe - 11.png';
import img12 from '../../assets/Images/bba-logo/Wireframe - 12.png';
import img13 from '../../assets/Images/bba-logo/Wireframe - 13.png';
import img14 from '../../assets/Images/bba-logo/Wireframe - 14.png';
import img15 from '../../assets/Images/bba-logo/Wireframe - 15.png';


// Import the placement image
import placementImage from '../../assets/Images/bba-plac.jpeg';

function MarketingManagementPlacement() {
  // Array of image sources for the recruiters section
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12, img13, img14, img15
  ];

  return (
    <div className="px-8 md:px-16 py-4">
      <div className="flex space-x-4 flex-col md:flex-row">
        {/* Left Section: Placement Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Heading for Placement Section */}
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-600 mb-4">Top Placements</h2>
          {/* Placement Image */}
          <img
            src={placementImage} // Use the imported placement image
            alt="Placement Design"
            className="w-full h-auto rounded-lg shadow-lg" // Styling for image
          />
        </div>

        {/* Right Section: Recruiters */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Heading for Recruiters Section */}
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-600 mb-4 mt-4">Our Recruiters</h2>
          {/* Recruiters Grid */}
          <div className="grid grid-cols-3 grid-rows-4 gap-4">
            {/* 12 images for recruiters */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementPlacement;
