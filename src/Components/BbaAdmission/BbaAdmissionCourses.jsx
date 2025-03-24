import React from 'react';

// Importing images
import marketingImage from '../../assets/Images/mm.jpg'; 
import financialImage from '../../assets/Images/fm.jpg'; 
import hrImage from '../../assets/Images/hrm.jpg'; 
import logisticsImage from '../../assets/Images/lscp.jpg'; 
import internationalBusinessImage from '../../assets/Images/ib.jpg'; 
import bankingImage from '../../assets/Images/bfs.jpg'; 
import digitalMarketingImage from '../../assets/Images/dm.jpg'; 
import innovationImage from '../../assets/Images/ie.jpg'; 

function BbaAdmissionCourses() {
  const courses = [
    {
      name: "Marketing Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/marketing-management", // Updated to route path
      image: marketingImage
    },
    {
      name: "Financial Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/financial-management", // Updated to route path
      image: financialImage
    },
    {
      name: "Human Resource Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/human-resource-management", // Updated to route path
      image: hrImage
    },
    {
      name: "Logistics and Supply Chain Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/logistics-supply-chain-management", // Updated to route path
      image: logisticsImage
    },
    {
      name: "International Business",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/international-business", // Updated to route path
      image: internationalBusinessImage
    },
    {
      name: "Banking and Financial Services",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/banking-financial-services", // Updated to route path
      image: bankingImage
    },
    {
      name: "Digital Marketing",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/digital-marketing", // Updated to route path
      image: digitalMarketingImage
    },
    {
      name: "Innovation and Entrepreneurship",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      applyLink: "/innovation-entrepreneurship", // Updated to route path
      image: innovationImage
    }
  ];

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#135783]" data-aos="fade-up">
        BBA Admission Courses
      </h2>

      {/* Grid layout for courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#135683] via-[#208098] to-[#2A9DA2] rounded-xl transform transition-all flex flex-col justify-between relative"
            data-aos="fade-up"
            style={{
              minHeight: "350px",
              boxShadow: "0px 4px 20px rgba(19, 86, 131, 0.3), 0px 8px 30px rgba(32, 128, 152, 0.2), 0px 12px 40px rgba(42, 157, 162, 0.1)" 
            }}
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover object-top rounded-t-xl"
            />

            {/* Content section with padding */}
            <div className="px-6 py-2 flex flex-col justify-between h-full">
              <h3 className="text-xl font-semibold text-white mb-2">{course.name}</h3>
              <p className="text-sm text-[#f3f4f6]">Duration: {course.duration}</p>
              <p className="text-sm text-[#f3f4f6] mt-2">Fees: {course.fees}</p>

              <a
                href={course.applyLink}
                className="mt-auto text-center bg-[#2563EB] text-white px-3 py-2 rounded-full font-semibold transform transition-all hover:bg-[#3B82F6] hover:scale-105"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BbaAdmissionCourses;
