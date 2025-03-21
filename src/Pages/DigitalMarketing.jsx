// src/pages/DigitalMarketing.jsx
import React from 'react';

function DigitalMarketing() {
  return (
    <div className="digital-marketing">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Digital Marketing - BBA Department</h1>
        <p className="mt-4 text-xl">Empowering students with cutting-edge skills for the digital world.</p>
      </header>

      {/* Department Overview Section */}
      <section className="department-overview px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Department Overview</h2>
        <p className="text-lg leading-relaxed">
          The Digital Marketing Department prepares students for the fast-paced world of online marketing, covering social media, SEO, PPC, content strategy, and web analytics.
        </p>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-offered px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Courses Offered</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Social Media Marketing:</strong> Leveraging social platforms for branding and customer engagement.</li>
          <li><strong>SEO & SEM:</strong> Optimizing websites and digital ads to rank higher in search engines.</li>
        </ul>
      </section>

      {/* Faculty & Staff Section */}
      <section className="faculty-staff px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Experts</h2>
        <p className="text-lg">
          Professor [Name], Ph.D. in Digital Marketing, brings real-world experience in online brand strategies and campaign optimization.
        </p>
      </section>

      {/* Career Opportunities Section */}
      <section className="career-opportunities px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Career Opportunities</h2>
        <ul className="space-y-4 text-lg">
          <li>Digital Marketing Manager</li>
          <li>SEO Specialist</li>
          <li>Social Media Strategist</li>
        </ul>
      </section>

      {/* Key Skills Developed Section */}
      <section className="key-skills px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills You Will Learn</h2>
        <ul className="space-y-4 text-lg">
          <li>Search Engine Optimization</li>
          <li>Social Media Strategy</li>
          <li>Web Analytics</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Digital Marketing?</h2>
        <p className="text-lg">
          Our Digital Marketing program provides students with the skills required to design and implement digital marketing strategies, creating immediate value in the digital marketplace.
        </p>
      </section>

      {/* Student Testimonials Section */}
      <section className="student-testimonials px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">What Our Students Say</h2>
        <blockquote className="italic text-lg border-l-4 border-blue-600 pl-4">
          "I learned the practical skills that helped me land a digital marketing job at a leading tech company." – [Student Name]
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

export default DigitalMarketing;
