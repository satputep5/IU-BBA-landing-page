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
import MyImage from "../../assets/Images/Landingpage_IU.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import icon1 from "../../assets/Images/ranking.png";
import icon2 from "../../assets/Images/badge.png";
import icon3 from "../../assets/Images/top.png";

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
        <h1 className="text-2xl font-semibold text-[#2899A4] mb-2">
          Bachelor of Business Administration (BBA)
        </h1>
        <p className="mb-4 text-lg">
          Our campus is equipped with modern computer labs, interactive
          classrooms, well-stocked libraries, and state-of-the-art laboratories
          to ensure hands-on learning. Comfortable hostel facilities, seamless
          transportation, a hygienic canteen, and dynamic sports infrastructure
          make student life enriching. With vibrant college events, fests, and
          strong industry exposure, your BBA journey at Indira will be both
          exciting and transformative.
        </p>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {/* Card 1 */}
          <div
            className="bg-[#2899A4] p-2 shadow-lg border-2 border-[#002D6A] flex items-center rounded-lg"
            data-aos="zoom-in"
          >
            <span className="flex items-center space-x-2">
              <FaStar className="text-white text-4xl" />
              <span className="text-sm text-white text-left">
                30 Years of academic excellence
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
                Top placement opportunities
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
              <span className="text-sm text-white text-left">IT labs</span>
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

        {/* New 3 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Card 1 */}
          <div
            className="bg-white p-4 shadow-lg border-4 border-[#002D6A] flex flex-col items-center rounded-lg"
            data-aos="zoom-in"
          >
            <img src={icon1} alt="Top B-Schools" className="w-16 h-16 mb-2" />
            <p className="text-sm text-[#000000] text-center">
              Indira is ranked amongst the{" "}
              <span className="text-[#002D6A] font-bold">top 2</span> B-schools
              in Pune, by the prestigious{" "}
              <span className="text-[#002D6A] font-bold">AIMA – IMJ.</span>
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-4 shadow-lg border-4 border-[#002D6A] flex flex-col items-center rounded-lg"
            data-aos="zoom-in"
          >
            <img
              src={icon2}
              alt="NBA Accreditation"
              className="w-16 h-16 mb-2"
            />
            <p className="text-sm text-[#000000] text-center">
              Indira Institute of Management was the first management institute
              in Maharashtra to receive the accreditation from the{" "}
              <span className="text-[#002D6A] font-bold">NBA,</span> New Delhi.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-4 shadow-lg border-4 border-[#002D6A] flex flex-col items-center rounded-lg"
            data-aos="zoom-in"
          >
            <img
              src={icon3}
              alt="Top Educational Institute"
              className="w-16 h-16 mb-2"
            />
            <p className="text-sm text-[#000000] text-center">
              Business India has also ranked us amongst the{" "}
              <span className="text-[#002D6A] font-bold">
                top 3 educational institutes
              </span>{" "}
              in Pune for 2 consecutive years.
            </p>
          </div>
        </div>
      </div>

{/* 30% Right Side with Image */}
<div className="w-full md:w-[45%] mt-2 flex flex-col justify-center h-auto container">
  <div className="flex-1 "> {/* Ensure it takes full height of the container */}
    <img
      src={MyImage}
      alt="Indira College Campus"
      className="w-full h-[90vh] object-cover rounded-lg shadow-lg border-4 border-[#002D6A]"
    />
  </div>
</div>


    </div>
  );
}

export default BbaStudying;
