import React, { useEffect } from "react";
import logo from "../assets/Images/IU-Logo.jpg";
import blogImage1 from "../assets/Images/post1.png";
import blogImage2 from "../assets/Images/post2.png";

function Footer() {
  useEffect(() => {
    // Dynamically inject Font Awesome CDN
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);

    // Cleanup when the component is unmounted
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-baskerville-regualr flex flex-col">
      <div className="bg-gray-100 px-8 md:px-16 text-black py-2 rounded-tl-4xl rounded-tr-4xl flex-grow">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-6">
          {/* Left Column */}
          <div className="space-y-1">
            <div className="flex flex-col justify-between h-full">
              {/* Logo Section */}
              <div className="flex mb-4 items-center justify-center">
                <img src={logo} alt="ICEM Logo" className="w-full" />
              </div>

              {/* Rest of the Content */}
              <div className="text-sm space-y-6">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-xl hover:text-blue-500"></i>
                  <div>
                    <p>85/5 A, Tapasya, New Mumbai Pune Highway,</p>
                    <p>Tathawade, Pune - 411033</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone-alt text-xl hover:text-green-500"></i>
                  <div>
                    <p>02114 – 661500 / 666</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-xl hover:text-gray-500"></i>
                  <div>
                    <p>ibba.admissions@indiraiimp.edu.in</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-xl mb-4">
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="hover:text-blue-600"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="hover:text-pink-600"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="hover:text-blue-700"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="hover:text-blue-400"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    aria-label="YouTube"
                    className="hover:text-red-600"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Middle Column */}
          <div className="space-y-6">
            <h3 className="text-2xl text-[#023b5e] font-bold">
              Important Links
            </h3>
            {/* Grid layout for links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-8">
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Staff Grievance Form
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Women Welfare Policy
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Anti Ragging Policy
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  Faculty Application Form
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  SPPU
                </a>
              </div>
              <div className="space-y-8">
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  AICTE
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  DTE
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  MahaDBT
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  MANDATORY DISCLOSURE
                </a>
                <a href="#" className="block text-gray-500 hover:text-gray-400">
                  AICTE APPROVAL
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#023b5e]">Popular Posts</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <a
                  href="https://indiraiimp.edu.in/blog/bba-in-logistics-and-supply-chain-management-course-at-iimp-bba-pune/" // Add your actual link here
                  className="flex items-center space-x-4 cursor-pointer" // Added cursor-pointer to make both image and text clickable
                   target="_blank"
                >
                  <img
                    src={blogImage1}
                    alt="Investment Opportunities for Women Blog Image"
                    className="w-36 h-24 object-contain rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      BBA in Logistics and Supply Chain Management Course at
                      IIMP BBA Pune
                    </h4>
                    <p className="text-sm text-gray-400">July 12, 2022</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://indiraiimp.edu.in/blog/why-study-bba-after-12th/" // Add your actual link here
                  className="flex items-center space-x-4 cursor-pointer"
                  target="_blank" // Added cursor-pointer to make both image and text clickable
                >
                  <img
                    src={blogImage2}
                    alt="Blog Post 2"
                    className="w-36 h-24 object-contain rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Why Study BBA after 12th?
                    </h4>
                    <p className="text-sm text-gray-400">July 12, 2022</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#023b5e] py-4 px-8 md:px-16 text-left text-white text-sm mt-auto">
        <p>© 2025. Indira University.</p>
      </div>
    </div>
  );
}

export default Footer;
