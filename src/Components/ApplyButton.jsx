import React from "react";
import * as Toastify from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { toast, ToastContainer } = Toastify;

function ApplyButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
    <div>
      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0 0 10px #003C84, 0 0 20px #003C84, 0 0 30px #003C84; }
            50% { text-shadow: 0 0 15px #003C84, 0 0 25px #003C84, 0 0 35px #018697; }
            100% { text-shadow: 0 0 10px #003C84, 0 0 20px #003C84, 0 0 30px #003C84; }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes borderGlow {
            0% { border-color: #003C84; box-shadow: 0 0 5px #003C84, 0 0 10px #018697; }
            50% { border-color: #018697; box-shadow: 0 0 10px #018697, 0 0 15px #018697; }
            100% { border-color: #003C84; box-shadow: 0 0 5px #003C84, 0 0 10px #018697; }
          }
          @keyframes bounce {
            0% { transform: translateY(0); }
            25% { transform: translateY(-5px); }
            50% { transform: translateY(0); }
            75% { transform: translateY(-3px); }
            100% { transform: translateY(0); }
          }
          .glow-animation { animation: glow 1.5s ease-in-out infinite; }
          .shimmer-animation {
            background: linear-gradient(90deg, #003C84 25%, #018697 50%, #003C84 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
          }
          .border-glow-animation { animation: borderGlow 1.5s ease-in-out infinite; }
          .bounce-animation { animation: bounce 1.5s ease-in-out infinite; }
          .hover-effects:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .apply-button {
            border: 2px solid #003C84;
  background: linear-gradient(90deg, #018697 0%, #018697 100%); /* Blue to Teal */
            color: #ffffff;
            padding: 10px 25px;
            border-radius: 25px;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
            position: relative;
            z-index: 1;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .apply-button span { position: relative; z-index: 2; }
          .apply-button:hover {
            border: 2px solid #018697;
            animation: borderGlow 1.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Button with click handler */}
      <button
        className="apply-button glow-animation shimmer-animation hover-effects border-glow-animation bounce-animation"
        onClick={handleClick}
      >
        <span>Enquire Now</span>
      </button>

      {/* Toast Container for rendering the notifications */}
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
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
          display: "inline-block",
          padding: "10px",
          textAlign: "center",
          zIndex: 9999,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      />
    </div>
  );
}

export default ApplyButton;
