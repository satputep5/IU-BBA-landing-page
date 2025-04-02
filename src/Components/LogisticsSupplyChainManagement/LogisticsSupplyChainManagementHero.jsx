import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RightSideSection from "../RightSideSection";
import bgImage from '../../assets/Images/blur-main.png'; // Adjust the path as needed

function LogisticsManagementHero() {
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
      className="px-8 md:px-16 relative text-balck flex flex-col md:flex-row items-center min-h-[80vh] space-x-2"
      style={{
        fontFamily: "Helvetica Neue Black, sans-serif",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left side content */}
      <div className="flex flex-col items-start z-20 w-full md:w-1/2 justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-4xl text-[#070b1a] font-bold mb-4 leading-tight">
          BBA in <span className="text-[#ed6f0c]">Logistics & Supply Chain Management</span> at School of Business (Indira University)
        </h1>

        <div
          ref={formRef}
          className="p-6 max-w-md w-full shadow-md mt-6"
          style={{
            backgroundColor: "rgba(241, 121, 23, 0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261] transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobile"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261] transition duration-300"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div>
              <select
                id="course"
                className="w-full p-3 bg-gradient-to-r from-[#FFFFFF] via-[#fff7f0] to-[#ffead6] text-black rounded border border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261] transition duration-300"
                required
              >
                                <option value="logistics-supply-chain-management">
                  Logistics & Supply Chain Management
                </option>
                <option value="marketing-management">
                  Marketing Management
                </option>
                <option value="financial-management">
                  Financial Management
                </option>
                <option value="human-resource-management">
                  Human Resource Management
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
                    : "bg-[#ed6f0c] hover:bg-orange-500"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        <h1 className="text-2xl text-[#070b1a] font-medium leading-tight my-6">
          From Factory Floors to Front Doors – Be the Mastermind Behind Global{" "}
          <span className="text-[#ed6f0c] font-bold">Supply Chains.</span>
        </h1>
      </div>

      <RightSideSection
        title="Master the Art of Global Logistics"
        description="Join our Logistics & Supply Chain Management program to lead the future of efficient supply chains worldwide."
      />
    </div>
  );
}

export default LogisticsManagementHero;
