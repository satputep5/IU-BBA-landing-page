import React, { useEffect, useState } from "react";
import DrThomsonVarghese from "../../assets/Images/thomson.webp";
import DrSarikaSagar from "../../assets/Images/sarika.webp";
import YogeshBhusari from "../../assets/Images/yogesh.webp";
import VikrantSoman from "../../assets/Images/Vikrant.webp";
import SachinHadpad from "../../assets/Images/sachin.webp";
import KomalDalnar from "../../assets/Images/komal.webp";
import DeepaShakti from "../../assets/Images/deepa.webp";
import SonaliShrotri from "../../assets/Images/sonali.jpeg";
import VijayalaxmiRao from "../../assets/Images/vijaylaxmi.webp";

const facultyData = [
  {
    image: DrThomsonVarghese,
    name: "Dr. Thomson Varghese",
    description: "Associate Dean – School of Business (BBA)",
  },
  {
    image: DrSarikaSagar,
    name: "Dr. Sarika Sagar",
    description: "Marketing Mgmt.",
  },
  {
    image: YogeshBhusari,
    name: "Mr. Yogesh Bhusari",
    description: "Financial Mgmt",
  },
  {
    image: VikrantSoman,
    name: "Mr. Vikrant Soman",
    description: "Human Resource M",
  },
  {
    image: SachinHadpad,
    name: "Mr. Sachin Hadpad",
    description: "Logistics & SCM",
  },
  {
    image: KomalDalnar,
    name: "Ms. Komal Dalnar",
    description: "International Business",
  },
  {
    image: DeepaShakti,
    name: "Dr. Deepa Shakti",
    description: "Innovation & Entrepreneurship",
  },
  {
    image: SonaliShrotri,
    name: "Dr. Sonali Shrotri",
    description: "Banking & Financial Services",
  },
  {
    image: VijayalaxmiRao,
    name: "Dr Vijayalaxmi G.N Rao",
    description: "Digital Marketing",
  },
];

// Duplicate data for seamless loop
const extendedFacultyData = [...facultyData, ...facultyData];

function BbaAdmissionFaculty() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#002D6A] overflow-hidden">
      <div className="flex flex-col items-center py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#f7f7f7] mb-4">
          Our Faculties
        </h2>

        <div className="overflow-hidden w-full">
          <div
            className={`flex space-x-4 logo-slider-track ${
              isVisible ? "animate-scroll" : ""
            }`}
          >
            {extendedFacultyData.map((faculty, index) => (
              <div
  key={index}
  className="bg-gradient-to-b from-[#135683] via-[#208098] to-[#2A9DA2] rounded-md shadow-md overflow-hidden w-48 flex-shrink-0 flex flex-col items-center"
>
  <div className="relative w-full h-48">
    <img
      src={faculty.image}
      alt={faculty.name}
      className="w-full h-full object-contain object-top"
    />
  </div>

  <div className="p-2 flex flex-col justify-center items-center space-y-0 text-center">
    <h3 className="text-lg font-semibold text-gray-100">
      {faculty.name}
    </h3>
    <p className="text-gray-200 text-sm">
      {faculty.description}
    </p>
  </div>
</div>

            ))}
          </div>
        </div>
      </div>

      {/* Infinite Scroll Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite; /* Smooth and infinite */
          }
          .animate-scroll:hover {
            animation-play-state: paused; /* Pause on hover */
          }
        `}
      </style>
    </div>
  );
}

export default BbaAdmissionFaculty;
