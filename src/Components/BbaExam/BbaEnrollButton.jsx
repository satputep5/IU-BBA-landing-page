import React from "react";

function BbaEnrollButton() {
  return (
    <>
      <button className="btn-glow-bounce">Enroll Now</button>

      {/* Glow + Bounce Effect */}
      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.4); }
          50% { box-shadow: 0 0 15px 6px rgba(255, 255, 255, 0.6); }
          100% { box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.4); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .btn-glow-bounce {
          background-color: #135783;
          color: white;
          font-weight: 600;
          padding: 10px 28px; /* Default padding */
          border-radius: 9999px; /* Fully rounded */
          border: 2px solid #ADD8E6;
          transition: all 0.3s ease-in-out;
          animation: glow 2s infinite alternate, bounce 1s infinite alternate;
          box-shadow: 0 0 8px 3px #ADD8E6;
          font-size: 0.9rem; /* Default font size */
        }

        /* Responsive Adjustments */
        @media (max-width: 640px) {
          .btn-glow-bounce {
            padding: 8px 20px; 
            font-size: 0.8rem; 
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .btn-glow-bounce {
            padding: 10px 28px;
            font-size: 1rem;
          }
        }

        @media (min-width: 1025px) {
          .btn-glow-bounce {
            padding: 12px 32px;
            font-size: 1.1rem;
          }
        }

        /* Hover Effects */
        .btn-glow-bounce:hover {
          background-color: #106fad;
          animation: none; /* Stop animations */
          transform: scale(1.05);
          box-shadow: 0 0 25px 8px #ADD8E6;
        }
      `}</style>
    </>
  );
}

export default BbaEnrollButton;
