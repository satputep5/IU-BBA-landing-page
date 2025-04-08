import React from "react";
import MyImage from "../../assets/Images/new-infra.png";
import icon1 from "../../assets/Images/ranking.png";
import icon2 from "../../assets/Images/badge.png";
import icon3 from "../../assets/Images/top.png";
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

function FinanceManagementStudying() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-8 md:px-16 py-2 md:py-6 mb-4">
      {/* Right Side (Image Section) */}
      <div className="w-full md:w-1/2 bg-white relative ">
        <img
          src={MyImage}
          alt="Finance Management"
          className="w-full h-full object-cover rounded-xl pr-0 md:pr-10"
        />
      </div>

      {/* Left Side (Text and Cards Section) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mb-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-left mb-2">
          Invent. Integrate. Impact.
        </h1>

        <h1 className="text-xl md:text-2xl font-semibold text-[#2899A4]">
          Bachelor of Business Administration (BBA)
        </h1>

        <p className="text-md md:text-xl text-[#002D6A] my-4">
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

        {/* 3 Cards Below with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Card 1 */}
          <div
            className="bg-white p-2 md:p-4 shadow-lg border-4 border-[#002D6A] flex flex-col items-center rounded-lg"
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
            className="bg-white p-2 md:p-4 shadow-lg border-4 border-[#002D6A] flex flex-col items-center rounded-lg"
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
            className="bg-white p-2 md:p-4 shadow-lg border-4 border-[#002D6A] flex flex-col items-center rounded-lg"
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
    </div>
  );
}

export default FinanceManagementStudying;
