import React, { useState } from 'react';
import brochureImage from '../assets/Images/3d-brochure.png'; // Replace with actual image path
import brochurePDF from '../assets/Images/dummy-pdf.pdf'; // Replace with actual PDF file path

const Brochure = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Hide the brochure section
  };

  const handleDownload = () => {
    // Trigger PDF download
    const link = document.createElement('a');
    link.href = brochurePDF;
    link.download = 'brochure.pdf'; // Name the PDF file on download
    link.click();
  };

  return (
    isVisible && (
      <div className="fixed bottom-1 right-4 animate-bounce z-50">
        <div className="relative">
          <img
            src={brochureImage}
            alt="Brochure"
            className="w-24 h-24 object-contain cursor-pointer"
            onClick={handleDownload} // Trigger download when the image is clicked
          />
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 w-8 h-8 border-2 border-gray-800 text-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white focus:outline-none"
          >
            <span className="text-xl">×</span>
          </button>
        </div>
      </div>
    )
  );
};

export default Brochure;
