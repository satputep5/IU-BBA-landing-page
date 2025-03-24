import React from "react";
import MyImage from "../../assets/Images/iu-campus.png"; // Import your image
import Image1 from "../../assets/Images/mm-study.png"; // Import your 3D-style image
import CircleImage from "../../assets/Images/green-circle.png"; // Import your tiny circle PNG image
import SmallCircleImage from "../../assets/Images/green-circle.png"; // Import your smaller circle PNG image

function MarketingManagementStudying() {
  return (
       <div className="flex px-6 md:px-16 py-16 bg-[#ffffff]">
         {/* Left Section: Image and Floating Elements */}
         <div className="w-full md:w-1/2 bg-white rounded-lg relative overflow-hidden">
           {/* Main Campus Image */}
           <img
             src={MyImage}
             alt="Marketing Management Campus"
             className="w-auto h-full object-cover absolute top-0 right-24 rounded-t-lg"
           />
   
           {/* 3D Image at the bottom-right */}
           <img
             src={Image1}
             alt="3D Study Image"
             className="w-60 h-48 object-cover absolute bottom-8 right-8 transform shadow-lg rounded-lg"
           />
   
           {/* Floating Large Circle */}
           <img
             src={CircleImage}
             alt="Floating Large Circle"
             className="absolute top-[25%] right-[20%] w-16 h-16 animation-float"
           />
   
           {/* Floating Small Circle */}
           <img
             src={SmallCircleImage}
             alt="Floating Small Circle"
             className="absolute bottom-[10%] left-[5%] w-12 h-12 animation-float-slow"
           />
         </div>
   
         {/* Right Section: Text Content */}
         <div className="w-full md:w-1/2 pl-8 flex flex-col justify-center space-y-6">
           <h1 className="text-3xl md:text-4xl font-semibold text-left text-[#1f2937] mb-4">
           Why International Business?
           </h1>
           <h2 className="text-2xl font-light text-left text-[#6C5CE7] mb-6">
           International Business Program
           </h2>
   
<p className="text-lg text-gray-600 tracking-wide">In today’s interconnected world, businesses no longer operate within a single country—they expand across global markets, navigate international trade policies, and engage in cross-border investments. If you dream of a career in global business management, this program equips you with export-import expertise, foreign exchange knowledge, and international marketing strategies to thrive in the global economy.</p>

         </div>
       </div>
  );
}

export default MarketingManagementStudying;
