import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBook,
  FaEdit,
  FaFileAlt,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

function BbaApplyNow() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const steps = [
    {
      title: "Explore the Program",
      description:
        "Read through the course details, eligibility, and career opportunities.",
      icon: <FaBook className="text-indigo-500 text-4xl" />,
    },
    {
      title: "Fill in Your Details",
      description: "Complete the inquiry form to show your interest.",
      icon: <FaEdit className="text-green-500 text-4xl" />,
    },
    {
      title: "Appear for the IU Entrance Exam",
      description: "Take the required test to qualify for admission.",
      icon: <FaFileAlt className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Check Your Score & Submit the Application",
      description: "Get your results and complete the admission form.",
      icon: <FaCheckCircle className="text-purple-500 text-4xl" />,
    },
    {
      title: "Confirm Admission & Begin Your Journey!",
      description:
        "Pay the fees, receive your welcome kit, and start your path to success.",
      icon: <FaRocket className="text-red-500 text-4xl" />,
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center px-4 md:px-16 py-4 md:py-8">
      <div className="text-center w-full" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Apply Now for the BBA Program
        </h1>
        <p
          className="text-gray-600 text-lg mb-4 md:mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Follow these simple steps to secure your admission:
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-3 md:mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="flex flex-col items-center space-y-2 md:space-y-4 bluish-glass-effect p-3 md:p-6 rounded-lg w-64"
            >
              <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-indigo-100 rounded-full">
                {step.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 text-center">{`Step ${
                index + 1
              }: ${step.title}`}</h2>
              <p className="text-gray-600 text-sm text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#135783] text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 w-48">
            Apply Now
          </button>
        </div>
      </div>

      {/* Inline CSS for Bluish Glass Effect */}
      <style>{`
.bluish-glass-effect {
  background: rgba(173, 216, 230, 0.3); /* Light bluish tint with transparency */
  backdrop-filter: blur(20px); /* Strong blur effect */
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(173, 216, 230, 0.6); /* Soft border with matching color */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); /* Deeper shadow for contrast */
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
}

.bluish-glass-effect:hover {
  transform: scale(1.07);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
}
      `}</style>
    </div>
  );
}

export default BbaApplyNow;
