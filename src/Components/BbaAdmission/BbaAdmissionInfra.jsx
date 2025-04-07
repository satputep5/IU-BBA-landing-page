import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";
import MyImage from "../../assets/Images/infra.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/Images/highlights.png";

// Styled Components
const TextContent = styled.p`
  font-size: 16px;

  @media (min-width: 1025px) {
    font-size: 24px;
  }
`;

function BbaStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular bg-white text-[#002D6A]">
      {/* 70% Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-2">
          Invent. Integrate. Impact.
        </h1>
        <h1 className="text-2xl font-semibold text-[#2899A4]">
          Bachelor of Business Administration (BBA)
        </h1>
        <TextContent data-aos="fade-up">
          Our campus is equipped with modern computer labs, interactive
          classrooms, well-stocked libraries, and state-of-the-art laboratories
          to ensure hands-on learning. Comfortable hostel facilities, seamless
          transportation, a hygienic canteen, and dynamic sports infrastructure
          make student life enriching. With vibrant college events, fests, and
          strong industry exposure, your BBA journey at Indira will be both
          exciting and transformative.
        </TextContent>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {/* Card 1 */}
          <div
            className="bg-[#2899A4] p-2 shadow-lg border-2 border-[#002D6A] flex items-center rounded-lg"
            data-aos="zoom-in"
          >
            <span className="flex items-center space-x-2">
              <FaStar className="text-white text-4xl" />
              <span className="text-sm text-white text-left">
                Two decades of academic excellence
              </span>
            </span>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#2899A4] p-2 shadow-lg border-2 border-[#002D6A] flex items-center rounded-lg"
            data-aos="zoom-in"
          >
            <span className="flex items-center space-x-2">
              <FaUsers className="text-white text-4xl" />
              <span className="text-sm text-white text-left">
                450+ leading recruiters
              </span>
            </span>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#2899A4] p-2 shadow-lg border-2 border-[#002D6A] flex items-center rounded-lg"
            data-aos="zoom-in"
          >
            <span className="flex items-center space-x-2">
              <FaBuilding className="text-white text-4xl" />
              <span className="text-sm text-white text-left">
                Exposure to industrial guest lectures
              </span>
            </span>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#2899A4] p-2 shadow-lg border-2 border-[#002D6A] flex items-center rounded-lg"
            data-aos="zoom-in"
          >
            <span className="flex items-center space-x-2">
              <FaLaptop className="text-white text-4xl" />
              <span className="text-sm text-white text-left">
                Highest packages offered
              </span>
            </span>
          </div>

          {/* Card 5 */}
          <div
            className="bg-[#2899A4] p-2 shadow-lg border-2 border-[#002D6A] flex items-center rounded-lg"
            data-aos="zoom-in"
          >
            <span className="flex items-center space-x-2">
              <FaGraduationCap className="text-white text-4xl" />
              <span className="text-sm text-white text-left">
                IT and Apple labs
              </span>
            </span>
          </div>

          {/* Card 6 */}
          <div
            className="bg-[#2899A4] p-2 shadow-lg border-2 border-[#002D6A] flex items-center rounded-lg"
            data-aos="zoom-in"
          >
            <span className="flex items-center space-x-2">
              <FaChartLine className="text-white text-4xl" />
              <span className="text-sm text-white text-left">
                Exceptional growth opportunities
              </span>
            </span>
          </div>
        </div>

        <div className="mt-6">
          <img src={img} alt="BBA Highlights" className="w-full " />
        </div>
      </div>

      {/* 30% Right Side with Image */}
      <div className="w-full md:w-[45%] mt-2 md:mt-12 flex flex-col justify-center h-full">
        <div className="flex-1">
          <img
            src={MyImage}
            alt="Indira College Campus"
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-[#002D6A]"
          />
        </div>
      </div>
    </div>
  );
}

export default BbaStudying;
