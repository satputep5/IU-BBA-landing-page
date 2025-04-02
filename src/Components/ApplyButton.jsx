import React from 'react';
import * as Toastify from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { toast, ToastContainer } = Toastify;

function ApplyButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    toast.info("Kindly fill the form.", {
      position: "top-center", // Using direct string instead of toast.POSITION.TOP_CENTER
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
            0% { text-shadow: 0 0 10px #ff704d, 0 0 20px #ff704d, 0 0 30px #ff704d; }
            50% { text-shadow: 0 0 15px #ff704d, 0 0 25px #ff704d, 0 0 35px #ff4500; }
            100% { text-shadow: 0 0 10px #ff704d, 0 0 20px #ff704d, 0 0 30px #ff704d; }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes borderGlow {
            0% { border-color: #ff704d; box-shadow: 0 0 5px #ff704d, 0 0 10px #ff4500; }
            50% { border-color: #ff704d; box-shadow: 0 0 10px #ff4500, 0 0 15px #ff4500; }
            100% { border-color: #ff704d; box-shadow: 0 0 5px #ff704d, 0 0 10px #ff4500; }
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
            background: linear-gradient(90deg, #ff704d 25%, #ffbc93 50%, #ff704d 75%);
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
            border: 2px solid #ff704d;
            background-color: transparent;
            color: #ffffff;
            padding: 10px 25px;
            border-radius: 25px;
            font-size: 18px;
            text-transform: uppercase;
            cursor: pointer;
            font-weight: bold;
            position: relative;
            z-index: 1;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .apply-button span { position: relative; z-index: 2; }
          .apply-button:hover {
            border: 2px solid #ff4500;
            animation: borderGlow 1.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Button with click handler */}
      <button
        className="apply-button glow-animation shimmer-animation hover-effects border-glow-animation bounce-animation"
        onClick={handleClick}
      >
        <span>Apply Now</span>
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
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'auto',
    display: 'inline-block',
    padding: '10px',
    textAlign: 'center',
    zIndex: 9999,
    whiteSpace: 'nowrap',       // Prevents line break
    overflow: 'hidden',         // Optional: Hide overflow text
    textOverflow: 'ellipsis',   // Optional: Adds "..." if text is too long
  }}
/>



    </div>
  );
}

export default ApplyButton;
