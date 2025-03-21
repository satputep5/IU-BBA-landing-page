// src/pages/LogisticsSupplyChainManagement.jsx
import React from 'react';

function LogisticsSupplyChainManagement() {
  return (
    <div className="logistics-supply-chain-management">
      {/* Header Section */}
      <header className="bg-teal-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Logistics and Supply Chain Management - BBA Department</h1>
        <p className="mt-4 text-xl">Optimizing processes for seamless business operations.</p>
      </header>

      {/* Department Overview Section */}
      <section className="department-overview px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Department Overview</h2>
        <p className="text-lg leading-relaxed">
          The Logistics and Supply Chain Management Department provides students with the tools to manage the flow of goods and services efficiently. The curriculum focuses on inventory management, distribution strategies, and supply chain technology.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-offered px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Courses Offered</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Supply Chain Management:</strong> Introduction to the processes involved in the creation and delivery of products.</li>
          <li><strong>Logistics Planning:</strong> Efficient movement and storage of goods from suppliers to customers.</li>
        </ul>
      </section>

      {/* Faculty & Staff Section */}
      <section className="faculty-staff px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
        <p className="text-lg">
          Professor [Name], Ph.D. in Supply Chain Management, specializes in logistics strategy and operational optimization.
        </p>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Career Opportunities</h2>
        <ul className="space-y-4 text-lg">
          <li>Logistics Manager</li>
          <li>Supply Chain Analyst</li>
          <li>Inventory Control Specialist</li>
        </ul>
      </section>

      {/* Key Skills Developed Section */}
      <section className="key-skills px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills You Will Learn</h2>
        <ul className="space-y-4 text-lg">
          <li>Supply Chain Optimization</li>
          <li>Inventory & Distribution Management</li>
          <li>Logistics Technology</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Logistics and Supply Chain Management?</h2>
        <p className="text-lg">
          Our program focuses on the practical application of logistics and supply chain strategies, preparing students to handle complex operational challenges across global markets.
        </p>
      </section>

      {/* Student Testimonials Section */}
      <section className="student-testimonials px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Students Say</h2>
        <blockquote className="italic text-lg border-l-4 border-teal-600 pl-4">
          "The hands-on projects and exposure to real-world supply chain issues helped me secure a role at a leading logistics firm right after graduation." – [Student Name]
        </blockquote>
      </section>

      {/* Contact Information & Enrollment Section */}
      <section className="contact-enrollment px-6 py-12 bg-teal-600 text-white">
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

export default LogisticsSupplyChainManagement;
