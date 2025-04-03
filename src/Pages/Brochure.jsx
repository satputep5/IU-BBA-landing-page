import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import brochureImage from "../assets/Images/3d-brochure.png"; // Replace with actual image path

const Brochure = () => {
  // Function to scroll to the top and show the toast notification
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Toast notification after scrolling to the top
    toast.info("Kindly fill the form.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="fixed bottom-1 right-4 animate-bounce z-50">
      <div className="relative">
        <img
          src={brochureImage}
          alt="Brochure"
          className="w-20 h-20 md:w-24 md:h-24 object-contain cursor-pointer"
          onClick={scrollToTop} // Trigger scrollToTop and toast on click
        />
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          textAlign: "center",
          width: "100%", // Ensures it spans the full width
          pointerEvents: "none", // Prevents interaction with underlying elements
        }}
        bodyClassName="toast-message"
      />
    </div>
  );
};

export default Brochure;
