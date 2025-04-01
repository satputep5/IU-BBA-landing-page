import React, { useState, useEffect, useMemo, useRef } from "react";

// Import real images from URLs
import ankitImage from "../../assets/Images/Ankit_Jain.jpg";
import misbahImage from "../../assets/Images/Misbah_Aryan.png";
import akankshaImage from "../../assets/Images/Akanksha_Jain.png";
import tanishaImage from "../../assets/Images/Tanisha_B.png";
import salilImage from "../../assets/Images/Salil_Deshpande.jpg";
import krishnaImage from "../../assets/Images/Krishna-prajapat.png";
import giteshImage from "../../assets/Images/Gitesh-Agarwal.png";

// Real testimonials
const testimonials = [
  {
    name: "Ankit Jain - JP Morgan Chase, Associate",
    text: `"ICCS is fantastic college and provides you with an excellent faculty and extracurricular activities throughout your journey. The teaching-learning structure is designed with a mix balance of theory and practical learning, which gives you a strong platform to grow further."`,
    image: ankitImage,
  },
  {
    name: "Misbah Afshari - DOT, CEO",
    text: `"Fun loving moments I spent at ICCS. ICCS provided me the best memories in the campus, classroom, and in real life with events too. Only because of this I created my own stand in this competitive world. I never felt like an outsider, foreigner student. Faculties and students were very cooperative and taught me good lessons when I was at ICCS. I would like to thank all the faculties of ICCS for understanding us and treating us like their own children."`,
    image: misbahImage,
  },
  {
    name: "Akanksha Jain - Central Convoy, Founder & CEO",
    text: `"ICCS has opened me to my fullest potential making me eligible to avail the opportunities out there. Throughout my time here, I have been entrusted with various responsibilities and tasks that have molded my personality and leadership skills. The teachers at ICCS embody purposefulness and prioritize students' growth."`,
    image: akankshaImage,
  },
  {
    name: "Tanisha Barnwal - Northern Trust, Hedge Fund Analyst",
    text: `"The flourishing 3-year journey of ICCS BBA has helped me improvise my skills, gain confidence, and focus on self-development. Right from numerous presentations, academic activities, college fests, cultural events, and industrial visits, I have gained immense learning, greater knowledge, and exciting experiences."`,
    image: tanishaImage,
  },
  {
    name: "Salil Deshpande - Deutsche Bank, Senior Analyst",
    text: `"ICCS has helped me develop a love for learning. It has given me a platform to build myself as well as my career. Every individual needs a platform to enrich their personality to face the world, and ICCS has given me that platform."`,
    image: salilImage,
  },
  {
    name: "Krishna Prajapat - Anand Rathi Wealth Limited, Vice President",
    text: `"ICCS provides career guidance and campus placements which help build an inspired career and make students competent in the world of high competition. ICCS provides numerous opportunities for placements and has highly qualified and experienced faculty members who are very supportive."`,
    image: krishnaImage,
  },
  {
    name: "Gitesh Agarwal - Vennplay, CEO and Founder",
    text: `"ICCS has a great and huge campus. The infrastructure is amazing, and there are different buildings for BBA, BBA IB, BBA CA, and B.Sc. Faculty members are the best for the course, and they have good knowledge about the subjects they teach. The teaching quality is the best, and they provide a wide perspective about the subjects."`,
    image: giteshImage,
  },
];

const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const groupedTestimonials = useMemo(() => {
    return testimonials.map((testimonial) => [testimonial]);
  }, []);

  const startAutoSlide = () => {
    if (!isHovered && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setActiveDot((prevDot) => (prevDot + 1) % groupedTestimonials.length);
      }, 6000);
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [groupedTestimonials.length]);

  useEffect(() => {
    if (isHovered) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  }, [isHovered]);

  return (
    <div
      className="w-auto py-2 md:py-4 flex flex-col justify-center items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row space-x-8 w-full max-w-[1200px] overflow-x-hidden py-2 md:py-4 justify-center transition-all duration-500 ease-in-out px-8">
        {groupedTestimonials[activeDot]?.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg flex flex-col sm:flex-row w-full max-w-[800px] mx-4 flex-shrink-0 transition-all duration-300 ease-in-out border border-[#F26F08] hover:shadow-xl hover:border-2 hover:border-[#F26F08]"
            style={{
              boxShadow: "0 2px 4px rgba(242, 111, 8, 0.4)",
            }}
          >
            <div className="flex-shrink-0 justify-center flex mb-1">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <p className="text-sm md:text-lg text-black mb-4">{testimonial.text}</p>
              <div className="mt-4 text-right text-sm sm:text-base text-gray-600">
                <p>{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              activeDot === index ? "bg-[#F26F08]" : "bg-gray-300"
            } transition-all duration-300 ease-in-out`}
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
      <h1 className="text-3xl sm:text-4xl font-bold text-center pt-4 text-[#F26F08]">
        What Our Alumni Say
      </h1>
      <Testimonials />
    </div>
  );
}

export default App;
