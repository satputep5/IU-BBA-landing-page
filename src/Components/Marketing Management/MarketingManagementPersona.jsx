import { FaPaintBrush, FaChartBar, FaShareAlt, FaBriefcase } from 'react-icons/fa';  // You can use different icons for each persona
import { useState } from 'react';

function MarketingPersonas() {
  const [selectedPersona, setSelectedPersona] = useState(null);

  const handlePersonaClick = (persona) => {
    setSelectedPersona(persona);
  };

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#1f2937]" data-aos="fade-up">
        💼 Find Your Marketing Persona!
      </h2>

      <div className="text-center mb-6">
        <p className="text-lg text-gray-700">An engaging quiz-like section that categorizes students based on their skills and interests!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {/* Creative Genius Card */}
        <div
          className="bg-[#388A86] p-6 shadow-xl flex flex-col items-center text-center rounded-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handlePersonaClick("Creative Genius")}
          data-aos="fade-up"
        >
          <FaPaintBrush size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">The Creative Genius?</p>
          <p className="text-sm text-white mt-2">→ Brand Manager, Ad Director</p>
        </div>

        {/* Data-Driven Thinker Card */}
        <div
          className="bg-[#388A86] p-6 shadow-xl flex flex-col items-center text-center rounded-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handlePersonaClick("Data-Driven Thinker")}
          data-aos="fade-up"
        >
          <FaChartBar size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">The Data-Driven Thinker?</p>
          <p className="text-sm text-white mt-2">→ Market Research Analyst, Growth Marketer</p>
        </div>

        {/* Digital Disruptor Card */}
        <div
          className="bg-[#388A86] p-6 shadow-xl flex flex-col items-center text-center rounded-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handlePersonaClick("Digital Disruptor")}
          data-aos="fade-up"
        >
          <FaShareAlt size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">The Digital Disruptor?</p>
          <p className="text-sm text-white mt-2">→ Social Media Manager, Performance Marketer</p>
        </div>

        {/* Business Brain Card */}
        <div
          className="bg-[#388A86] p-6 shadow-xl flex flex-col items-center text-center rounded-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handlePersonaClick("Business Brain")}
          data-aos="fade-up"
        >
          <FaBriefcase size={50} className="text-white mb-4" />
          <p className="text-lg font-semibold text-white">The Business Brain?</p>
          <p className="text-sm text-white mt-2">→ Product Marketing, Business Development</p>
        </div>
      </div>

      {/* Selected Persona */}
      {selectedPersona && (
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-[#1f2937]">✨ Your Marketing Persona: {selectedPersona}</h3>
          <p className="text-lg text-gray-700 mt-4">Explore the world of {selectedPersona} roles and discover the exciting opportunities ahead!</p>
        </div>
      )}

      <div className="text-center mt-8">
        <p className="text-xl font-semibold text-[#1f2937]">Marketing: Towards a world of possibilities!</p>
      </div>
    </div>
  );
}

export default MarketingPersonas;
