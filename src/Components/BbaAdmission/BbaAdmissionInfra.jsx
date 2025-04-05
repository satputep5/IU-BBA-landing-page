import React, { useEffect } from 'react';
import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import MyImage from '../../../public/images/infra.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/images/highlights.png';

function BbaStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular bg-white text-[#002D6A]">
      {/* 70% Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-2">Invent. Integrate. Impact.</h1>
        <h1 className="text-2xl font-semibold text-[#2899A4]">Bachelor of Business Administration (BBA)</h1>
        <p className="text-left text-md md:text-lg mb-4" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive **Bachelor of Business Administration (BBA)** program designed to equip students with essential business and management skills. This program provides a strong foundation in business principles, leadership, and strategic thinking, preparing students for dynamic careers in the corporate world. The vibrant campus, coupled with expert faculty and industry exposure, ensures a transformative academic journey.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          {/* Card 1 */}
          <div className="bg-[#2899A4] p-4 shadow-lg border-2 border-[#002D6A] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaStar className="text-white mr-4 text-4xl" />
              <span className="text-sm text-center text-white">2 Decades OF ACADEMIC EXCELLENCE</span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#2899A4] p-4 shadow-lg border-2 border-[#002D6A] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaUsers className="text-white mr-4 text-4xl" />
              <span className="text-sm text-center text-white">450+ LEADING RECRUITERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#2899A4] p-4 shadow-lg border-2 border-[#002D6A] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaBuilding className="text-white mr-4 text-4xl" />
              <span className="text-sm text-center text-white">EXPOSURE TO INDUSTRIAL GUEST LECTURES</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#2899A4] p-4 shadow-lg border-2 border-[#002D6A] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaLaptop className="text-white mr-4 text-4xl" />
              <span className="text-sm text-center text-white">HIGHEST PACKAGE OFFERED</span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-[#2899A4] p-4 shadow-lg border-2 border-[#002D6A] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaGraduationCap className="text-white mr-4 text-4xl" />
              <span className="text-sm text-center text-white">IT and Apple Labs</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-[#2899A4] p-4 shadow-lg border-2 border-[#002D6A] flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaChartLine className="text-white mr-4 text-4xl" />
              <span className="text-sm text-center text-white">EXCEPTIONAL GROWTH OPPORTUNITIES</span>
            </span>
          </div>
        </div>

        <div className="mt-6">
          <img src={img} alt="BBA Highlights" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {/* 30% Right Side with Image */}
      <div className="w-full md:w-[45%] mt-12 flex flex-col justify-center h-full">
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
