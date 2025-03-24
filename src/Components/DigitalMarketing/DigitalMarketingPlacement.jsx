// MarketingManagementPlacement.js
import React from 'react';

// Import the images for recruiters section
import img1 from '../../assets/Images/came/1.avif';
import img2 from '../../assets/Images/came/2.avif';
import img3 from '../../assets/Images/came/3.avif';
import img4 from '../../assets/Images/came/13.avif';
import img5 from '../../assets/Images/came/19.avif';
import img6 from '../../assets/Images/came/15.avif';
import img7 from '../../assets/Images/came/7.avif';
import img8 from '../../assets/Images/came/8.avif';
import img9 from '../../assets/Images/came/9.avif';
import img10 from '../../assets/Images/came/10.avif';
import img11 from '../../assets/Images/came/11.avif';
import img12 from '../../assets/Images/came/12.avif';

// Import the placement image
import placementImage from '../../assets/Images/bba-plac.jpeg';

function MarketingManagementPlacement() {
  // Array of image sources for the recruiters section
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
  ];

  return (
    <div className="px-8 md:px-16 py-4">
      <div className="flex space-x-4">
        {/* Left Section: Placement Image */}
        <div className="w-1/2 flex flex-col items-center">
          {/* Heading for Placement Section */}
          <h2 className="text-4xl font-semibold text-[#00B4D8] mb-4">Top Placements</h2>
          {/* Placement Image */}
          <img
            src={placementImage} // Use the imported placement image
            alt="Placement Design"
            className="w-full h-auto rounded-lg shadow-lg" // Styling for image
          />
        </div>

        {/* Right Section: Recruiters */}
        <div className="w-1/2 flex flex-col items-center">
          {/* Heading for Recruiters Section */}
          <h2 className="text-4xl font-semibold text-[#00B4D8] mb-4">Our Recruiters</h2>
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
