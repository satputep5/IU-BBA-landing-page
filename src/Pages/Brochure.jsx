import React, { useState } from "react";
import brochureImage from "../assets/Images/3d-brochure.png"; // Replace with actual image path

const Brochure = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // Popup visibility
  const [formData, setFormData] = useState({ name: "", phone: "", course: "" }); // Form state

  const handleClose = () => {
    setIsVisible(false); // Hide the brochure section
  };

  const openPopup = () => {
    setShowPopup(true); // Show the popup when the brochure image is clicked
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup when the close button is clicked
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in sessionStorage
    sessionStorage.setItem("formData", JSON.stringify(formData));
    // Optionally, show a confirmation message
    alert("Thank you for your submission! We'll get back to you soon.");
    // Close the form popup
    closePopup();
  };

  return (
    <>
      {/* Brochure Button */}
      {isVisible && (
        <div className="fixed bottom-1 right-4 animate-bounce z-50">
          <div className="relative">
            <img
              src={brochureImage}
              alt="Brochure"
              className="w-20 h-20 md:w-24 md:h-24 object-contain cursor-pointer"
              onClick={openPopup} // Open the form when the image is clicked
            />
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 w-8 h-8 border-2 border-gray-800 text-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white focus:outline-none"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
      )}

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
            <h2 className="text-xl font-semibold mb-4">You're Just One Step Away!</h2>
            <p className="mb-4 text-lg text-gray-600">
              To get your hands on the brochure or curriculum, simply add your details below. 
              You'll receive immediate access to valuable information about our programs.
            </p>
            <p className="mb-6 text-sm text-gray-500">
              Don't miss out! Fill out the form to get in touch with us.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border rounded"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <select
                  name="course"
                  className="w-full p-2 border rounded"
                  required
                  value={formData.course}
                  onChange={handleChange}
                >
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

            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Brochure;
