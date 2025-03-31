import React from "react";
import backgroundImage from "../../assets/Images/bg-exam.png";
import FormComponent from "../../Components/BbaExam/BbaForm";
import BbaEnrollButton from "../../Components/BbaExam/BbaEnrollButton";

function BbaHero() {
  return (
    <div
      className="relative h-auto bg-cover bg-center bg-no-repeat px-4 md:px-16 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black Overlay with 30% Transparency */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start justify-start  space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2 text-left text-white space-y-0 px-4 pt-4 md:pt-20 lg:pt-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-snug md:leading-normal">
            Dream Learn Lead Start Your BBA at Indira University!
          </h2>

          <p className="text-xl md:text-2xl text-gray-100 font-medium tracking-wide mb-4 md:mb-8">
            Admission Open <br />
            <span className="text-white text-2xl md:text-3xl font-bold">
              2025 - 2026
            </span>
          </p>

          <BbaEnrollButton /> {/* Using the new button component */}
        </div>
        <FormComponent />
      </div>
    </div>
  );
}

export default BbaHero;
