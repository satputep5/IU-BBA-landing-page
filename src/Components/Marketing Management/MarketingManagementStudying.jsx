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
import SmallCircleImage from "../../assets/Images/red-circle.png"; // Import your smaller circle PNG image

function MarketingManagementStudying() {
  return (
    <div className="flex px-8 md:px-16 py-6 mb-6 poppins-regular h-[100vh]">
      {/* Left Side (Vertical Green Container with Full Height, Image on Top, and Rounded Top Corners) */}
      <div className="w-1/2 bg-white h-full relative overflow-hidden">
        {/* Image with object-cover property and rounded top corners */}
        <img
          src={MyImage}
          alt="Marketing Management"
          className="w-7/10 h-full object-cover absolute top-0 left-0 rounded-t-full"
        />

        {/* 3D Image on the right corner */}
        <img
          src={Image1}  // You can replace with a different 3D-style image if needed
          alt="3D Image"
          className="w-1/2 h-56 object-cover absolute bottom-10 right-0 transform shadow-lg rounded-lg"
        />

        {/* Floating Tiny Circle PNG (Larger Circle) */}
        <img
          src={CircleImage}  // Tiny circle PNG image
          alt="Floating Circle"
          style={{
            position: "absolute",
            top: "30%",
            right: "25%",
            width: "70px",  // Adjust size as needed
            height: "70px", // Adjust size as needed
            animation: "float 2s ease-in-out infinite",
          }}
        />

        {/* Floating Tiny Circle PNG (Smaller Circle at Bottom Left) */}
        <img
          src={SmallCircleImage}  // Smaller circle PNG image
          alt="Floating Small Circle"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "1%",
            width: "50px",  // Smaller size
            height: "50px", // Smaller size
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Right Side (Text Content Section with Dynamic Height) */}
      <div className="w-[50%] pl-8 flex flex-col">
        <h1 className="text-4xl font-semibold text-left mb-4 text-[#71bfb7]">
          Study Marketing at Indira University
        </h1>
        <p className="text-left text-lg mb-6 text-[#000000]">
          This course equips you with the skills to master brand management, market research, digital marketing, sales strategies, and advertising, making you a key player in any industry.
        </p>

        <p className="text-left text-lg mb-6 text-[#000000]">
          Our BBA Marketing syllabus is crafted to keep up with evolving industry trends, ensuring you gain real-world experience through live projects, internships, and hands-on exposure. Whether you're passionate about digital marketing in BBA curriculum or aspire to become a brand strategist, Indira University prepares you for the dynamic marketing landscape.
        </p>

        {/* What Will You Learn? Section */}
        <div className="mt-1">
          <h2 className="text-2xl font-semibold text-[#71bfb7] mb-4">
            What Will You Learn? (A Journey from Beginner to Marketing Expert!)
          </h2>
          <div className="grid grid-cols-3 gap-6 text-sm text-[#333333]">
            <div>
              <h3 className="font-semibold text-lg">Year 1</h3>
              <ul className="list-disc pl-2">
                <li>Marketing Fundamentals</li>
                <li>Consumer Psychology</li>
                <li>Market Research</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Year 2</h3>
              <ul className="list-disc pl-2">
                <li>Digital Marketing</li>
                <li>Brand Management</li>
                <li>Advertising Strategies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Year 3</h3>
              <ul className="list-disc pl-2">
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
