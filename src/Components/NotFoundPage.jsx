import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate hook to navigate

function NotFoundPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook to navigate

  const handleRedirect = () => {
    navigate("/"); // Navigate to homepage
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-r from-[#135683] via-[#208098] to-[#2A9DA2] px-4 md:px-8"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="text-center text-white max-w-lg w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Oops! This page doesn't exist.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          The page you're looking for might have been moved or deleted.
        </p>
        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-[#039097] text-white rounded-lg text-lg md:text-xl transition duration-300 hover:bg-[#6094b7] focus:outline-none"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
