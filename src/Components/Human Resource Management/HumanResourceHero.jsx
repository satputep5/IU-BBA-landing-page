import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RightSideSection from "../RightSideSection";

function HumanResourceHero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // GSAP floating animation for stats
    gsap.to(".stat-box", {
      y: "-10px",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    // Form entrance animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted successfully!");
      formRef.current.reset();
    }, 2000);
  };

  return (
    <div
      className="px-8 md:px-16 relative bg-cover bg-[#b8dde3] bg-right md:bg-center bg-no-repeat text-white flex flex-col md:flex-row items-center min-h-[80vh] space-x-4"
      style={{ fontFamily: "Helvetica Neue Black, sans-serif" }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center text-center md:text-left">
        <h2 className="text-3xl md:text-4xl text-[#0e1133] font-bold mb-4">
          BBA in <span className="text-[#2A9D57]">Human Resource Management</span> at School of Business (Indira University)
        </h2>

        <div
          ref={formRef}
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(42, 157, 85, 0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57] transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57] transition duration-300"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#2A9D57] focus:outline-none focus:ring-2 focus:ring-[#2A9D57] transition duration-300"
                required
              >
                   <option value="human-resource-management">
                  Human Resource Management
                </option>
                <option value="marketing-management">
                  Marketing Management
                </option>
                <option value="financial-management">
                  Financial Management
                </option>
             
                <option value="logistics-supply-chain-management">
                  Logistics & Supply Chain Management
                </option>
                <option value="international-business">
                  International Business
                </option>
                <option value="banking-financial-services">
                  Banking & Financial Services
                </option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="innovation-entrepreneurship">
                  Innovation & Entrepreneurship
                </option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-white rounded-lg transition duration-300 ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#2A9D57] hover:bg-[#237a46]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        <p className="italic text-black my-4 text-xl">
          30 Years of Excellence in Education | 8 Specializations | 100% Placement Assistance
        </p>

        <h1 className="text-2xl text-[#0e1133] font-medium leading-tight mb-4">
          Empowering People. Building <span className="text-[#2A9D57] font-bold">Leaders</span>. Driving Success.
        </h1>
      </div>

      <RightSideSection
        title="Shape the Future of HR"
        description="Join our HR program to develop essential skills in leadership, talent management, and organizational development."
      />
    </div>
  );
}

export default HumanResourceHero;
