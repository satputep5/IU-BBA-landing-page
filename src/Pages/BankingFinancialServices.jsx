// src/pages/BankingFinancialServices.jsx
import React from 'react';

function BankingFinancialServices() {
  return (
    <div className="banking-financial-services">
      {/* Header Section */}
      <header className="bg-blue-900 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Banking and Financial Services - BBA Department</h1>
        <p className="mt-4 text-xl">Shaping the future of banking professionals in a dynamic financial world.</p>
      </header>

      {/* Department Overview Section */}
      <section className="department-overview px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Department Overview</h2>
        <p className="text-lg leading-relaxed">
          The Banking and Financial Services Department is focused on providing students with an in-depth understanding of banking operations, financial markets, investment strategies, and risk management.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-offered px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Courses Offered</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Banking Operations:</strong> Study of core banking activities and regulations.</li>
          <li><strong>Investment Analysis:</strong> Techniques for assessing and managing investment portfolios.</li>
        </ul>
      </section>

      {/* Faculty & Staff Section */}
      <section className="faculty-staff px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
        <p className="text-lg">
          Professor [Name], Ph.D. in Banking & Finance, has over 20 years of experience in the banking sector and teaches advanced investment strategies.
        </p>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Career Opportunities</h2>
        <ul className="space-y-4 text-lg">
          <li>Investment Banker</li>
          <li>Financial Analyst</li>
          <li>Risk Manager</li>
        </ul>
      </section>

      {/* Key Skills Developed Section */}
      <section className="key-skills px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills You Will Learn</h2>
        <ul className="space-y-4 text-lg">
          <li>Financial Risk Management</li>
          <li>Investment Strategy</li>
          <li>Banking Regulations</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Banking and Financial Services?</h2>
        <p className="text-lg">
          Our program offers students hands-on exposure to banking technologies, financial markets, and global finance, preparing them for a successful career in the rapidly evolving financial industry.
        </p>
      </section>

      {/* Student Testimonials Section */}
      <section className="student-testimonials px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Students Say</h2>
        <blockquote className="italic text-lg border-l-4 border-blue-900 pl-4">
          "The comprehensive curriculum and expert faculty gave me the tools I needed to secure a job in a top financial institution right after graduation." – [Student Name]
        </blockquote>
      </section>

      {/* Contact Information & Enrollment Section */}
      <section className="contact-enrollment px-6 py-12 bg-blue-900 text-white">
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

export default BankingFinancialServices;
