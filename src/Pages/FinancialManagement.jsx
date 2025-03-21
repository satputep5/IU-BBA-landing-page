// src/pages/FinancialManagement.jsx
import React from 'react';

function FinancialManagement() {
  return (
    <div className="financial-management">
      {/* Header Section */}
      <header className="bg-green-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Financial Management - BBA Department</h1>
        <p className="mt-4 text-xl">Empowering students to manage and optimize financial resources.</p>
      </header>

      {/* Department Overview Section */}
      <section className="department-overview px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Department Overview</h2>
        <p className="text-lg leading-relaxed">
          The Financial Management Department provides students with the critical financial knowledge necessary to thrive in the world of business and investment. The program equips students with skills in financial analysis, investment management, and corporate finance.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-offered px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Courses Offered</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Financial Accounting:</strong> Introduction to accounting principles and financial statements.</li>
          <li><strong>Investment Management:</strong> Analyzing and managing investment portfolios.</li>
          {/* Add more courses here */}
        </ul>
      </section>

      {/* Faculty & Staff Section */}
      <section className="faculty-staff px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
        <p className="text-lg">
          Professor [Name], Ph.D. in Finance, has over 20 years of experience working in corporate finance and investment analysis.
        </p>
        {/* Add more faculty members here */}
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Career Opportunities</h2>
        <ul className="space-y-4 text-lg">
          <li>Financial Analyst</li>
          <li>Investment Banker</li>
          <li>Financial Planner</li>
        </ul>
      </section>

      {/* Key Skills Developed Section */}
      <section className="key-skills px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills You Will Learn</h2>
        <ul className="space-y-4 text-lg">
          <li>Financial Forecasting</li>
          <li>Investment Strategy Development</li>
          <li>Risk Management</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Financial Management?</h2>
        <p className="text-lg">
          Our Financial Management program offers hands-on learning experiences through real-world case studies and internship opportunities, providing students with the practical skills necessary to succeed in finance.
        </p>
      </section>

      {/* Student Testimonials Section */}
      <section className="student-testimonials px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Students Say</h2>
        <blockquote className="italic text-lg border-l-4 border-green-600 pl-4">
          "The Financial Management program helped me land an internship at a top financial firm, which turned into a full-time position after graduation." – [Student Name]
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

export default FinancialManagement;
