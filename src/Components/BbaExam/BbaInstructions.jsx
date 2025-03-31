import React from "react";
import instructionImage from "../../assets/Images/instructions.png"; // Ensure this path is correct

function BbaInstructions() {
  return (
    <div className="flex flex-col bg-[#135783]">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={instructionImage}
            alt="BBA Instructions"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Instructions */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 ">
          {/* Moved Heading Here */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center py-2 md:py-6">
            Indira University BBA Admission Instructions
          </h1>

          <ul className="text-gray-100 text-lg mb-6 leading-relaxed space-y-1 md:space-y-3 list-disc list-inside text-left">
            <li>The online application is for admission to BBA programs offered at Indira University.</li>
            <li>The application form fee is non-refundable.</li>
            <li>The email ID submitted at the time of registration will be used for all communication until the enrollment process is completed. Change of email ID will NOT be permitted under any circumstances.</li>
            <li>For quick assistance, applicants are strongly advised to use the Indira University Query Management System (Indira-QMS) instead of email.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-white mb-2 text-center">
            Steps to Raise a Query:
          </h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-200 text-lg mb-4 md:mb-6">
            <li>Register and verify your email ID.</li>
            <li>Click on [Any Queries? Ask Us] in your dashboard.</li>
            <li>Select the query category and submit your question.</li>
          </ol>

          <p className="text-gray-300 text-lg text-center mb-4 leading-relaxed">
            For further details, visit the official Indira University admissions portal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BbaInstructions;
