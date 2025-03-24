
import React from 'react';

// Import images
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

function MarketingManagementRecruiter() {
  // Array of image sources
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
  ];

  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      {/* Heading for Section 2 */}
      <h2 className="text-4xl font-semibold text-[#023b5e] mb-4">Our Recruiters</h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        {/* 12 images */}
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
  );
}

export default MarketingManagementRecruiter;
