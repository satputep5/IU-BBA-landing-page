import React from "react";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaPenAlt,
  FaUsers,
} from "react-icons/fa";
import MyImage from "../../assets/Images/iu-campus.png"; // Import your image
import Image1 from "../../assets/Images/std-mark.jpg"; // Import your 3D-style image
import CircleImage from "../../assets/Images/green-circle.png"; // Import your tiny circle PNG image
import SmallCircleImage from "../../assets/Images/green-circle.png"; // Import your smaller circle PNG image

function MarketingManagementStudying() {
  return (
    <div className="flex flex-wrap  px-4 md:px-16 py-4 md:py-8 mb-2 poppins-regular">
      <div className="w-full md:w-1/2 bg-white relative">
        {/* Main Image */}
        <img
          src={MyImage}
          alt="Finance Management"
          className="w-full h-full object-cover rounded-t-xl pr-0 md:pr-10"
        />

        {/* 3D Effect Image */}
        <img
          src={Image1}
          alt="3D Image"
          className="w-1/2 h-auto object-cover absolute bottom-10 right-2 md:-right-4 transform shadow-lg rounded-lg z-10"
        />

        {/* Floating Circle 1 */}
        <img
          src={CircleImage}
          alt="Floating Circle"
          className="absolute top-[30%] right-[25%] w-16 h-16 animate-float z-20"
        />

        {/* Floating Circle 2 */}
        <img
          src={SmallCircleImage}
          alt="Floating Small Circle"
          className="absolute bottom-[10%] left-[1%] w-12 h-12 animate-float-slow z-20"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 pl-0 md:pl-8 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left mb-4 text-[#71bfb7]">
          Study Marketing at Indira University
        </h1>
        <p className="text-left text-md md:text-lg mb-4 text-[#000000] leading-relaxed text-center md:text-left">
          This course equips you with the skills to master brand management,
          market research, digital marketing, sales strategies, and advertising,
          making you a key player in any industry.
        </p>

        <p className="text-left text-md md:text-lg mb-4 text-[#000000] leading-relaxed text-center md:text-left">
          Our BBA Marketing syllabus is crafted to keep up with evolving
          industry trends, ensuring you gain real-world experience through live
          projects, internships, and hands-on exposure. Whether you're
          passionate about digital marketing in BBA curriculum or aspire to
          become a brand strategist, Indira University prepares you for the
          dynamic marketing landscape.
        </p>

        {/* What Will You Learn? Section */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-[#71bfb7] mb-4 text-center md:text-left">
            What Will You Learn? (A Journey from Beginner to Marketing Expert!)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#333333]">
            {/* Year 1 */}
            <div className="text-left">
              <h3 className="font-semibold text-lg">Year 1</h3>
              <ul className="list-disc pl-4">
                <li>Marketing Fundamentals</li>
                <li>Consumer Psychology</li>
                <li>Market Research</li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="text-left">
              <h3 className="font-semibold text-lg">Year 2</h3>
              <ul className="list-disc pl-4">
                <li>Digital Marketing</li>
                <li>Brand Management</li>
                <li>Advertising Strategies</li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="text-left">
              <h3 className="font-semibold text-lg">Year 3</h3>
              <ul className="list-disc pl-4">
                <li>Integrated Campaigns</li>
                <li>Business Strategy</li>
                <li>Growth Hacking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingManagementStudying;
