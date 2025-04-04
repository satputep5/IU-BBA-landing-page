import React, { useState } from "react";
import brochureImage from "../assets/Images/3d-brochure.png";
import { FaRegCommentDots, FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Brochure = () => {
  const [isBrochureVisible, setIsBrochureVisible] = useState(true);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseBrochure = (e) => {
    e.stopPropagation();
    setIsBrochureVisible(false);
  };

  const handleBrochureClick = () => {
    handleScrollToTop();
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
  };

  return (
    <>
      <div className="fixed bottom-4 left-2 right-1 z-50 flex justify-between items-center">
        {/* Chat Bubble on the Left */}
        <div className="relative">
          <div
            className="bg-[#007bff] p-3 rounded-full shadow-lg cursor-pointer animate-bounce"
            onClick={handleScrollToTop}
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
              onClick={handleBrochureClick}
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
          background: #4a90e2;
          color: white;
          border-radius: 10px;
          padding: 15px 20px;
          font-size: 16px;
          font-weight: bold;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out;
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
