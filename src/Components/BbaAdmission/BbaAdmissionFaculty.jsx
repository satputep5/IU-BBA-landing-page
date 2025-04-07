import React, { useState, useEffect } from "react";
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
  { image: DrThomsonVarghese, name: "Dr. Thomson Varghese", description: "Associate Dean – School of Business (BBA)" },
  { image: DrSarikaSagar, name: "Dr. Sarika Sagar", description: "Marketing Mgmt." },
  { image: YogeshBhusari, name: "Mr. Yogesh Bhusari", description: "Financial Mgmt" },
  { image: VikrantSoman, name: "Mr. Vikrant Soman", description: "Human Resource M" },
  { image: SachinHadpad, name: "Mr. Sachin Hadpad", description: "Logistics & SCM" },
  { image: KomalDalnar, name: "Ms. Komal Dalnar", description: "International Business" },
  { image: DeepaShakti, name: "Dr. Deepa Shakti", description: "Innovation & Entrepreneurship" },
  { image: SonaliShrotri, name: "Dr. Sonali Shrotri", description: "Banking & Financial Services" },
  { image: VijayalaxmiRao, name: "Dr Vijayalaxmi G.N Rao", description: "Digital Marketing" },
];

function BbaAdmissionFaculty() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isLargeScreen ? 3 : 1;
  const totalSlides = Math.ceil(facultyData.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Get current slide items
  const currentSlideItems = facultyData.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="relative px-8 md:px-16 md:py-6 py-3 bg-[#002D6A] ">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#f7f7f7] text-center mb-6 md:mb-8 z-10 relative">
        Minds Behind School of Business
      </h2>

      {/* Slider */}
      <div className="flex justify-center items-center space-x-8">
        {currentSlideItems.map((faculty, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#135683] via-[#208098] to-[#2A9DA2] rounded-lg shadow-md overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 w-full max-w-sm"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-96 object-cover object-top transition-opacity duration-500 ease-in-out opacity-100"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-100">{faculty.name}</h3>
              <p className="text-gray-200 mt-2">{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-3 mt-4 z-10 relative">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition duration-300 transform ${
              currentIndex === index
                ? "bg-[#2896A0] scale-110"
                : "bg-[#787b7b] hover:bg-[#4f87ac]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default BbaAdmissionFaculty;
