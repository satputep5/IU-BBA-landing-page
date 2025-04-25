import React, { useState, useRef } from "react";
import brochureImage from "../assets/Images/3d-brochure.png";
import brochurePDF from "../assets/pdf/IU School of Business Brochure_V5_11-4-2025.pdf";  // Import the PDF file here
import { FaRegCommentDots, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Brochure = () => {
  const [isBrochureVisible, setIsBrochureVisible] = useState(true);

  // Use useRef to handle rate-limiting for the toast notification
  const canTriggerToastRef = useRef(true);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseBrochure = (e) => {
    e.stopPropagation();
    setIsBrochureVisible(false);
  };

  const handleBrochureClick = () => {
    // Only apply rate-limiting to the toast notification
    if (!canTriggerToastRef.current) return;

    handleScrollToTop();  // This will run every time the user clicks, no rate-limiting
    toast.info("Kindly fill the form.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      className: "custom-toast",
      bodyClassName: "custom-toast-body",
    });

    // Disable triggering the toast and reset it after 3 seconds
    canTriggerToastRef.current = false;
    setTimeout(() => {
      canTriggerToastRef.current = true;
    }, 3000);

    // Check session storage if the PDF has been downloaded already
    if (!sessionStorage.getItem("pdfDownloaded")) {
      // Trigger PDF download
      const link = document.createElement("a");
      link.href = brochurePDF; // Path to the PDF file
      link.download = "brochure.pdf"; // File name for the downloaded PDF
      link.click(); // Programmatically click the link to trigger download

      // Mark the PDF as downloaded in sessionStorage
      sessionStorage.setItem("pdfDownloaded", "true");
    } 
  };

  return (
    <>
      <div className="fixed bottom-4 left-2 right-1 z-50 flex justify-between items-center">
        {/* Chat Bubble on the Left */}
        <div className="relative">
          <div
            className="bg-[#007bff] p-3 rounded-full shadow-lg cursor-pointer animate-bounce"
            onClick={handleScrollToTop} // Scroll-to-top works without any rate-limiting
          >
            <FaRegCommentDots size={24} className="text-white" />
          </div>
        </div>

        {/* Brochure Image on the Right */}
        {isBrochureVisible && (
          <div className="relative">
            <img
              src={brochureImage}
              alt="Brochure"
              className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer"
              onClick={handleBrochureClick} // Rate-limited click for the toast notification and PDF download
            />
            {/* Close Button */}
            <button
              onClick={handleCloseBrochure}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-700"
            >
              <FaTimes size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />

      {/* Embedded CSS */}
      <style>{`
        .custom-toast {
          background: rgba(0, 0, 0, 0); /* Fully transparent background */
          color: white;
          border-radius: 15px;
          padding: 15px 20px;
          font-size: 16px;
          font-weight: bold;
          backdrop-filter: blur(10px); /* Apply blur effect */
          -webkit-backdrop-filter: blur(10px); /* For Safari */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
          transition: transform 0.3s ease-in-out;
          border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle border for visibility */
        }

        .custom-toast-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .custom-toast-enter {
          transform: translateY(-20px);
          opacity: 0;
        }

        .custom-toast-enter-active {
          transform: translateY(0);
          opacity: 1;
          transition: all 0.3s ease-out;
        }

        .custom-toast-exit {
          transform: translateY(0);
          opacity: 1;
        }

        .custom-toast-exit-active {
          transform: translateY(-20px);
          opacity: 0;
          transition: all 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Brochure;
