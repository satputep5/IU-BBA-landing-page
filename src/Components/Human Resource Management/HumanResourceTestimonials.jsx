import React, { useState, useEffect, useMemo, useRef } from "react";

// Import images from the 'src' folder
import vikramImage from "../../assets/Images/user.png";
import simranImage from "../../assets/Images/user.png";
import arjunImage from "../../assets/Images/user.png";
import meeraImage from "../../assets/Images/user.png";
import karanImage from "../../assets/Images/user.png";
import nishaImage from "../../assets/Images/user.png";
import aartiImage from "../../assets/Images/user.png";

const testimonials = [
  {
    name: "Amit Kumar - Marketing Manager",
    department: "Marketing Management",
    year: "Batch-2024",
    text: '"IU provided me with invaluable insights into business strategies and marketing techniques. The curriculum was practical and prepared me well for my career!"',
    image: vikramImage,
  },
  {
    name: "Priya Sharma - HR Executive",
    department: "Human Resource Management",
    year: "Batch-2023",
    text: '"The hands-on experience and exposure to real-world HR practices at IU made me confident in my role as an HR Executive. I am grateful for the learning opportunities!"',
    image: simranImage,
  },
  {
    name: "Ravi Singh - Financial Analyst",
    department: "Financial Management",
    year: "Batch-2025",
    text: '"IU’s finance program equipped me with all the skills needed for my career as a financial analyst. The faculty were experts, and the case studies were enriching!"',
    image: arjunImage,
  },
  {
    name: "Neha Patel - Business Development Executive",
    department: "Marketing Management",
    year: "Batch-2024",
    text: '"The curriculum at IU helped me build my foundation in business development. From learning negotiation tactics to understanding market trends, it was the perfect preparation for my career!"',
    image: meeraImage,
  },
  {
    name: "Sanjay Yadav - Operations Manager",
    department: "Logistics and Supply Chain Management",
    year: "Batch-2024",
    text: '"The real-world projects and internships provided by IU were essential in developing my problem-solving skills in operations management. I am proud to be part of such a wonderful institute!"',
    image: karanImage,
  },
  {
    name: "Anjali Gupta - Entrepreneur",
    department: "Innovation and Entrepreneurship",
    year: "Batch-2025",
    text: '"IU’s focus on entrepreneurship gave me the confidence to start my own business. The business strategy and startup courses were perfect for preparing me for the challenges of running my own company."',
    image: nishaImage,
  },
  {
    name: "Vikram Mehta - Supply Chain Coordinator",
    department: "Logistics and Supply Chain Management",
    year: "Batch-2025",
    text: '"The Supply Chain Management program at IU prepared me for a dynamic and fast-paced career. The practical knowledge and internships were key in shaping my current role."',
    image: aartiImage,
  },
  {
    name: "Manish Kumar - Project Manager",
    department: "International Business",
    year: "Batch-2024",
    text: '"At IU, I learned the critical aspects of managing projects efficiently. The knowledge I gained in project planning, resource allocation, and risk management has been crucial to my role as a project manager."',
    image: arjunImage,
  },
  {
    name: "Simran Kaur - Marketing Executive",
    department: "Digital Marketing",
    year: "Batch-2024",
    text: '"IU’s marketing program provided me with the tools I needed to develop and execute marketing strategies. The exposure to industry case studies helped me land my role as a marketing executive."',
    image: meeraImage,
  },
  {
    name: "Rajesh Verma - Finance Consultant",
    department: "Banking and Financial Services",
    year: "Batch-2025",
    text: '"The finance courses at IU were extremely comprehensive, and the real-life case studies helped me develop critical thinking skills that are now essential in my role as a finance consultant."',
    image: karanImage,
  },
  {
    name: "Maya Singh - Business Analyst",
    department: "Financial Management",
    year: "Batch-2025",
    text: '"IU’s business analytics program provided me with the expertise I needed to analyze and interpret business data effectively. This program laid the foundation for my career as a business analyst."',
    image: nishaImage,
  },
  {
    name: "Rahul Desai - International Business Manager",
    department: "International Business",
    year: "Batch-2024",
    text: '"The global perspective I gained at IU has been indispensable in my career in international business. The international case studies and faculty expertise were top-notch."',
    image: aartiImage,
  },
];



const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const intervalRef = useRef(null); // To store the interval ID

  // Group testimonials into chunks of 4
  const groupedTestimonials = useMemo(() => {
    const result = [];
    for (let i = 0; i < testimonials.length; i += 4) {
      result.push(testimonials.slice(i, i + 4));
    }
    return result;
  }, [testimonials]);

  // Function to start auto-sliding
  const startAutoSlide = () => {
    if (!isHovered && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActiveDot((prevDot) => (prevDot + 1) % groupedTestimonials.length);
      }, 6000); // Change every 6 seconds
    }
  };

  // Function to clear the interval
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Auto slide effect, but paused on hover
  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide(); // Cleanup interval on component unmount
    };
  }, [groupedTestimonials.length, isHovered]); // Trigger on hover changes

  // Handle mouse enter and leave events to control auto sliding
  useEffect(() => {
    if (isHovered) {
      stopAutoSlide(); // Stop auto slide when hovered
    } else {
      startAutoSlide(); // Start auto slide when hover ends
    }
  }, [isHovered]);

  return (
    <div
      className="overflow-hidden w-full py-8 flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)} // Stop auto slide on hover
      onMouseLeave={() => setIsHovered(false)} // Resume auto slide when hover ends
    >
      {/* Testimonials Container */}
      <div className="flex space-x-8 w-full max-w-[1200px] overflow-x-hidden py-4 justify-center transition-all duration-500 ease-in-out">
        {groupedTestimonials[activeDot]?.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg flex-1 min-w-[250px] max-w-xs mx-4 flex-shrink-0 transition-all duration-300 ease-in-out border border-[#2A9D8F] hover:shadow-xl hover:border-2 hover:border-[#218F7D]" // Updated border and hover border with new color
            style={{
              boxShadow: "0 2px 4px rgba(42, 157, 143, 0.4)", // Updated with rgba for primary color shadow effect
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-1 text-[#2A9D8F]">{testimonial.name}</h3>
            <p className="text-center text-sm text-[#2A9D8F]">{testimonial.department}</p>
            <p className="text-center text-xs text-[#218F7D]">{testimonial.year}</p>
            <p className="text-center text-black mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Dots - Placed Below Testimonials */}
      <div className="flex justify-center mt-4">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              activeDot === index ? "bg-[#2A9D8F]" : "bg-[#B3D9D3]"
            } transition-all duration-300 ease-in-out`} // Updated active dot color and non-active color
            onClick={() => setActiveDot(index)}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center pt-4 text-[#2A9D8F]">
        What Our Students Say
      </h1>
      <Testimonials />
    </div>
  );
}

export default App;