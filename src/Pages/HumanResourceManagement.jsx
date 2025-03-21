// src/pages/HumanResourceManagement.jsx
import React from 'react';

function HumanResourceManagement() {
  return (
    <div className="human-resource-management">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Human Resource Management - BBA Department</h1>
        <p className="mt-4 text-xl">Shaping the future of organizational success through people.</p>
      </header>

      {/* Department Overview Section */}
      <section className="department-overview px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Department Overview</h2>
        <p className="text-lg leading-relaxed">
          The Human Resource Management Department offers a comprehensive curriculum designed to provide students with the skills needed to manage talent, develop organizational culture, and lead in a competitive business environment.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-offered px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Courses Offered</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Organizational Behavior:</strong> Understanding how individuals and groups behave in organizations.</li>
          <li><strong>Talent Management:</strong> Developing strategies for recruitment, training, and performance management.</li>
        </ul>
      </section>

      {/* Faculty & Staff Section */}
      <section className="faculty-staff px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
        <p className="text-lg">
          Professor [Name], Ph.D. in HRM, has 10 years of experience working in organizational development and leadership training.
        </p>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Career Opportunities</h2>
        <ul className="space-y-4 text-lg">
          <li>HR Manager</li>
          <li>Recruitment Specialist</li>
          <li>Employee Relations Manager</li>
        </ul>
      </section>

      {/* Key Skills Developed Section */}
      <section className="key-skills px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills You Will Learn</h2>
        <ul className="space-y-4 text-lg">
          <li>Conflict Resolution</li>
          <li>Employee Training & Development</li>
          <li>Leadership & Communication</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Human Resource Management?</h2>
        <p className="text-lg">
          Our HRM program focuses on nurturing leadership, enhancing teamwork, and preparing students to manage diverse and complex organizational needs.
        </p>
      </section>

      {/* Student Testimonials Section */}
      <section className="student-testimonials px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Students Say</h2>
        <blockquote className="italic text-lg border-l-4 border-blue-600 pl-4">
          "The HRM department provided me with all the tools I needed to pursue a rewarding career in human resources, and the practical experiences were invaluable." – [Student Name]
        </blockquote>
      </section>

      {/* Contact Information & Enrollment Section */}
      <section className="contact-enrollment px-6 py-12 bg-blue-600 text-white">
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

export default HumanResourceManagement;
