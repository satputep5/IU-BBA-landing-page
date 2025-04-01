import React from "react";
import MyImage from "../../assets/Images/iu-campus.png";
import Image1 from "../../assets/Images/std-hr.jpg";
import CircleImage from "../../assets/Images/green-circle.png";
import SmallCircleImage from "../../assets/Images/green-circle.png";

function MarketingManagementStudying() {
  return (
    <div className="flex flex-wrap px-6 md:px-16 py-4 md:py-8 bg-[#f9fafb]">
      {/* Left Section: Image & Floating Elements */}
      {/* Left Side */}
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
      <div className="w-full md:w-1/2 pl-4 md:pl-8 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-4 text-left">
          Studying Human Resource Management at Indira University
        </h1>

        <h2 className="text-2xl font-extralight text-[#2A9D64] mb-6 text-left">
          Human Resource Management Program
        </h2>

        <h3 className="text-xl font-bold text-[#000000] mb-4">
          What Will You Learn? (A People-First Approach)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-6 text-[#000000]">
          {[
            {
              year: "Year 1",
              title: "Fundamentals of HR",
              subjects: ["Organizational Behavior", "Workplace Psychology", "Introduction to HR Management", "HR Ethics and Legal Issues"],
            },
            {
              year: "Year 2",
              title: "Talent Management",
              subjects: ["Talent Acquisition", "Performance Management", "HR Analytics", "Employee Engagement"],
            },
            {
              year: "Year 3",
              title: "Leadership & Strategy",
              subjects: ["Leadership Development", "Global HR Strategies", "HR Tech and Innovation", "Strategic HR Planning"],
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <h4 className="text-lg font-semibold text-[#2A9D64] mb-2">{item.year}: {item.title}</h4>
              <ul className="list-disc pl-5 text-md">
                {item.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-left text-md mb-6 text-[#000000] space-y-4">
  <p className="flex flex-wrap items-center gap-2">
    <strong className="text-[#2A9D64]">AI & HR Tech:</strong> Learn how AI is reshaping talent management.
  </p>
  <p className="flex flex-wrap items-center gap-2">
    <strong className="text-[#2A9D64]">Emotional Intelligence Training:</strong> Understand the psychology behind leadership.
  </p>
</div>

      </div>
    </div>
  );
}

export default MarketingManagementStudying;
