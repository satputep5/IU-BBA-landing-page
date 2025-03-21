import React, { useState, useEffect } from 'react';

// Import images from the 'src' folder
import vikramImage from '../../assets/Images/user.png';
import simranImage from '../../assets/Images/user.png';
import arjunImage from '../../assets/Images/user.png';
import meeraImage from '../../assets/Images/user.png';
import karanImage from '../../assets/Images/user.png';
import nishaImage from '../../assets/Images/user.png';
import aartiImage from '../../assets/Images/user.png';

const testimonials = [
  {
    name: "Vikram Singh - Junior Mechanical Engineer",
    department: "Mechanical Engineering",
    year: "Batch-24",
    text: '"ICEM provided me with the skills and knowledge I needed to succeed in the engineering world. The faculty and resources are top-notch!"',
    image: vikramImage,
  },
  {
    name: "Simran Kaur - Mechanical Engineer Trainee",
    department: "Mechanical Engineering",
    year: "Batch-23",
    text: '"The exposure to real-world projects and internships helped me land a job at a leading manufacturing firm straight out of college! The curriculum is well-structured."',
    image: simranImage,
  },
  {
    name: "Arjun Rao - Junior Mechanical Engineer",
    department: "Mechanical Engineering",
    year: "Batch-25",
    text: '"ICEM is a fantastic place to study, with the best infrastructure and an extremely supportive environment! From well-equipped labs to knowledgeable professors."',
    image: arjunImage,
  },
  {
    name: "Meera Patel - Mechanical Engineering Intern",
    department: "Mechanical Engineering",
    year: "Batch-24",
    text: '"The practical experience I gained at ICEM really helped me adapt quickly in the engineering industry! The focus on real-world applications and exposure to emerging technologies was invaluable."',
    image: meeraImage,
  },
  {
    name: "Karan Desai - CAD Design Intern",
    department: "Mechanical Engineering",
    year: "Batch-24",
    text: '"I had access to top-tier resources and mentorship, making my learning journey smooth and enriching! ICEM\'s environment encouraged creativity and collaboration."',
    image: karanImage,
  },
  {
    name: "Nisha Gupta - Junior Design Engineer",
    department: "Mechanical Engineering",
    year: "Batch-25",
    text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
    image: nishaImage,
  },
  {
    name: "Aarti Sharma - Junior Mechanical Engineer",
    department: "Mechanical Engineering",
    year: "Batch-25",
    text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
    image: aartiImage,
  },
  {
    name: "Arjun Rao - Junior Mechanical Engineer",
    department: "Mechanical Engineering",
    year: "Batch-25",
    text: '"ICEM is a fantastic place to study, with the best infrastructure and an extremely supportive environment! From well-equipped labs to knowledgeable professors."',
    image: arjunImage,
  },
  {
    name: "Meera Patel - Mechanical Engineering Intern",
    department: "Mechanical Engineering",
    year: "Batch-24",
    text: '"The practical experience I gained at ICEM really helped me adapt quickly in the engineering industry! The focus on real-world applications and exposure to emerging technologies was invaluable."',
    image: meeraImage,
  },
  {
    name: "Karan Desai - CAD Design Intern",
    department: "Mechanical Engineering",
    year: "Batch-24",
    text: '"I had access to top-tier resources and mentorship, making my learning journey smooth and enriching! ICEM\'s environment encouraged creativity and collaboration."',
    image: karanImage,
  },
  {
    name: "Nisha Gupta - Junior Design Engineer",
    department: "Mechanical Engineering",
    year: "Batch-25",
    text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
    image: nishaImage,
  },
  {
    name: "Aarti Sharma - Junior Mechanical Engineer",
    department: "Mechanical Engineering",
    year: "Batch-25",
    text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends."',
    image: aartiImage,
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);

  // Divide testimonials into groups of 4
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 4) {
    groupedTestimonials.push(testimonials.slice(i, i + 4));
  }

  // Set up automated sliding of testimonials every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDot((prevDot) => (prevDot + 1) % groupedTestimonials.length);
    }, 3000); // Change every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [groupedTestimonials.length]);

  return (
    <div className="overflow-hidden w-full py-8">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      {/* Testimonials */}
      <div className="flex space-x-8 w-full overflow-x-auto py-4">
        {groupedTestimonials[activeDot].map((testimonial, index) => (
            <div
  key={index}
  className="bg-white p-6 rounded-lg flex-1 min-w-[250px] max-w-xs mx-4 flex-shrink-0"
  style={{
    boxShadow: "0 2px 4px rgba(34, 197, 94, 0.4)", // Reduced blur and opacity for a tighter shadow
  }}
>
  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
  <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
  <p className="text-center text-sm text-green-700">{testimonial.department}</p>
  <p className="text-center text-sm text-green-400">{testimonial.year}</p>
  <p className="text-center text-black mt-4">{testimonial.text}</p>
</div>

    
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-4 mt-2">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${activeDot === index ? 'bg-blue-500' : 'bg-gray-300'}`}
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
      <h1 className="text-4xl font-bold text-center pt-4 text-green-700">What Our Students Say</h1>
      <Testimonials />
    </div>
  );
}

export default App;
