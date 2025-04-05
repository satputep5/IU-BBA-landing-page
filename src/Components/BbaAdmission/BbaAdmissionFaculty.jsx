import React, { useState, useEffect } from 'react';

const facultyData = [
  { image: 'https://via.placeholder.com/300x200', name: 'Dr. John Doe', description: 'Expert in Business Strategy' },
  { image: 'https://via.placeholder.com/300x200', name: 'Prof. Jane Smith', description: 'Marketing Specialist' },
  { image: 'https://via.placeholder.com/300x200', name: 'Dr. Mike Brown', description: 'Finance Guru' },
  { image: 'https://via.placeholder.com/300x200', name: 'Prof. Lisa White', description: 'Economics Expert' },
  { image: 'https://via.placeholder.com/300x200', name: 'Dr. Emily Clark', description: 'Operations Management' },
  { image: 'https://via.placeholder.com/300x200', name: 'Mr. David Lee', description: 'HR Specialist' },
  { image: 'https://via.placeholder.com/300x200', name: 'Dr. Sarah Kim', description: 'Entrepreneurship Mentor' },
  { image: 'https://via.placeholder.com/300x200', name: 'Prof. James Wilson', description: 'International Business' },
  { image: 'https://via.placeholder.com/300x200', name: 'Dr. Anna Taylor', description: 'Supply Chain Expert' },
];

function BbaAdmissionFaculty() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 3) % facultyData.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index * 3);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">BBA Admission Faculty</h2>

      <div className="flex justify-center space-x-4 mb-4">
        {facultyData.slice(currentSlide, currentSlide + 3).map((faculty, index) => (
          <div key={index} className="w-80 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-500 ease-in-out transform">
            <img src={faculty.image} alt={faculty.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{faculty.name}</h3>
              <p className="text-gray-600 mt-2">{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-3 mt-4">
        {Array.from({ length: Math.ceil(facultyData.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition duration-300 transform ${
              currentSlide === index * 3
                ? 'bg-green-500 scale-110' // Active Dot (Green)
                : 'bg-gray-400 hover:bg-green-400' // Inactive Dot (Gray with hover effect)
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default BbaAdmissionFaculty;
