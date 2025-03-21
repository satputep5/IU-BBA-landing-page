// src/pages/InternationalBusiness.jsx
import React from 'react';

function InternationalBusiness() {
  return (
    <div className="international-business">
      {/* Header Section */}
      <header className="bg-blue-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold">International Business - BBA Department</h1>
        <p className="mt-4 text-xl">Equipping students for success in the global business environment.</p>
      </header>

      {/* Department Overview Section */}
      <section className="department-overview px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Department Overview</h2>
        <p className="text-lg leading-relaxed">
          The International Business Department offers a global perspective on business. Students develop a comprehensive understanding of international markets, cross-cultural management, global trade, and foreign investment.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-offered px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Courses Offered</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Global Trade & Economics:</strong> Study of international trade policies, exchange rates, and global economic systems.</li>
          <li><strong>Cross-Cultural Management:</strong> Managing teams and businesses across different cultural environments.</li>
        </ul>
      </section>

      {/* Faculty & Staff Section */}
      <section className="faculty-staff px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
        <p className="text-lg">
          Professor [Name], Ph.D. in International Business, specializes in global market strategy and international business law.
        </p>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Career Opportunities</h2>
        <ul className="space-y-4 text-lg">
          <li>International Trade Analyst</li>
          <li>Global Marketing Manager</li>
          <li>International Business Consultant</li>
        </ul>
      </section>

      {/* Key Skills Developed Section */}
      <section className="key-skills px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills You Will Learn</h2>
        <ul className="space-y-4 text-lg">
          <li>Cross-Cultural Communication</li>
          <li>Global Market Analysis</li>
          <li>International Negotiations</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose International Business?</h2>
        <p className="text-lg">
          Our International Business program prepares students for successful careers in global markets with a curriculum focused on practical international business strategies and real-world case studies.
        </p>
      </section>

      {/* Student Testimonials Section */}
      <section className="student-testimonials px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Students Say</h2>
        <blockquote className="italic text-lg border-l-4 border-blue-800 pl-4">
          "This program gave me a competitive edge in my international career, helping me secure a position at a global company." – [Student Name]
        </blockquote>
      </section>

      {/* Contact Information & Enrollment Section */}
      <section className="contact-enrollment px-6 py-12 bg-blue-800 text-white">
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

export default InternationalBusiness;
