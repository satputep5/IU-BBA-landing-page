import React, { useEffect, useState } from "react";

function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null; // If the popup isn't triggered, don't render it

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-transparent z-50"
      style={{
        zIndex: 9999,
        backdropFilter: "blur(5px)", // Optional: Adds blur effect behind the popup
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <h2 className="text-xl font-semibold mb-4">Welcome to Indira University</h2>
        <p className="mb-4">We are glad you're here! Take a moment to fill out the form below.</p>
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
              <option value="logistics-supply-chain-management">Logistics & Supply Chain Management</option>
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
          onClick={closePopup}
          className="absolute top-2 right-2 text-black text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default PopupForm;
