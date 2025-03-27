import React, { useState } from "react";

function ApplyNowButton() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true); // Show the popup when the button is clicked
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup when the close button is clicked
  };

  return (
    <>
      {/* Apply Now Button */}
      <div className="fixed right-[-48px] top-1/2 transform -translate-y-1/2 z-50">
        <a
          href="#apply"
          onClick={openPopup} // Trigger the popup on button click
          className="bg-gradient-to-b from-[#018699] to-[#003c84] text-white py-1 px-6 shadow-lg transition duration-300 flex items-center justify-center transform -rotate-90 hover:bg-blue-700 hover:underline hover:scale-105 cursor-pointer"
        >
          Apply Now
        </a>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-transparent z-50"
          style={{
            zIndex: 9999,
            backdropFilter: "blur(5px)", // Optional: Adds blur effect behind the popup
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <h2 className="text-xl font-semibold mb-4">Welcome to Indira University</h2>
            <p className="mb-4">
              We are glad you're here! Take a moment to fill out the form below.
            </p>

            {/* Form Content */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <select className="w-full p-2 border rounded" required>
                  <option value="">Select Course</option>
                  <option value="marketing-management">Marketing Management</option>
                  <option value="financial-management">Financial Management</option>
                  <option value="human-resource-management">Human Resource Management</option>
                  <option value="logistics-supply-chain-management">
                    Logistics & Supply Chain Management
                  </option>
                  <option value="international-business">International Business</option>
                  <option value="banking-financial-services">Banking & Financial Services</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="innovation-entrepreneurship">Innovation & Entrepreneurship</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#299BA1] text-white rounded-lg"
              >
                Submit
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={closePopup} // Close the popup when the button is clicked
              className="absolute top-2 right-2 text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ApplyNowButton;
