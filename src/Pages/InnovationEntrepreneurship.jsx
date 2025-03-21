// src/pages/InnovationEntrepreneurship.jsx
import React from 'react';

function InnovationEntrepreneurship() {
  return (
    <div className="innovation-entrepreneurship">
      {/* Header Section */}
      <header className="bg-green-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Innovation and Entrepreneurship - BBA Department</h1>
        <p className="mt-4 text-xl">Fostering entrepreneurial minds and creative solutions.</p>
      </header>

      {/* Department Overview Section */}
      <section className="department-overview px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Department Overview</h2>
        <p className="text-lg leading-relaxed">
          The Innovation and Entrepreneurship Department encourages students to explore business opportunities, create new ventures, and solve real-world problems through innovation and creative thinking.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-offered px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Courses Offered</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Entrepreneurship Development:</strong> Fundamentals of starting and running a successful business.</li>
          <li><strong>Innovation Management:</strong> Techniques for fostering innovation within organizations.</li>
        </ul>
      </section>

      {/* Faculty & Staff Section */}
      <section className="faculty-staff px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
        <p className="text-lg">
          Professor [Name], Ph.D. in Entrepreneurship, specializes in venture creation and innovation strategy.
        </p>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Career Opportunities</h2>
        <ul className="space-y-4 text-lg">
          <li>Entrepreneur</li>
          <li>Innovation Consultant</li>
          <li>Business Development Manager</li>
        </ul>
      </section>

      {/* Key Skills Developed Section */}
      <section className="key-skills px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills You Will Learn</h2>
        <ul className="space-y-4 text-lg">
          <li>Business Planning</li>
          <li>Innovative Thinking</li>
          <li>Startup Management</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Innovation and Entrepreneurship?</h2>
        <p className="text-lg">
          Our program offers a hands-on approach to developing entrepreneurial skills through workshops, startup incubation, and mentorship from industry leaders.
        </p>
      </section>

      {/* Student Testimonials Section */}
      <section className="student-testimonials px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Students Say</h2>
        <blockquote className="italic text-lg border-l-4 border-green-600 pl-4">
          "The department's support helped me launch my own business right after graduation." – [Student Name]
        </blockquote>
      </section>

      {/* Contact Information & Enrollment Section */}
      <section className="contact-enrollment px-6 py-12 bg-green-600 text-white">
        <h2 className="text-3xl font-semibold mb-4">Interested in Learning More?</h2>
        <p className="text-lg">
          For more information about our department and courses, please contact <strong>[Department Email]</strong> or call <strong>[Phone Number]</strong>.
        </p>
        <p className="mt-4">
          <a href="[Enrollment Link]" className="text-yellow-400 underline">Click here to apply</a>
        </p>
      </section>
    </div>
  );
}

export default InnovationEntrepreneurship;
