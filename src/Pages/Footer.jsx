import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/IU Logo Cobine Final.avif";

function Footer() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-baskerville-regualr flex flex-col">
      <div className="bg-gray-100 px-8 md:px-16 text-black py-6 rounded-tl-4xl rounded-tr-4xl flex-grow footer">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-6">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-8">
            <Link to="/">
              <img
                src={logo}
                alt="Indira University Logo"
                className="w-48 h-auto"
              />
            </Link>

            <div className="text-sm space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-2xl hover:text-blue-500"></i>
                <div>
                  <p>‘Dhruv’, 89/2A, New Pune-Mumbai Highway,</p>
                  <p>Tathwade, Pune – 411033, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-phone-alt text-2xl hover:text-green-500"></i>
                <p>020 6675 9523 / +91 77589 22688</p>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-globe text-2xl hover:text-blue-500"></i>
                <a
                  href="https://www.indirauniversity.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-800"
                >
                  www.indirauniversity.edu.in
                </a>
              </div>
            </div>

            <div className="flex space-x-6 text-2xl">
              <a
                href="https://www.facebook.com/IndiraGroup/"
                aria-label="Facebook"
                className="transform transition-transform duration-300 hover:scale-110 relative z-10 icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-blue-600 hover:text-blue-800 transition-all duration-300"></i>
              </a>
              <a
                href="https://www.instagram.com/indiragroupofinstitutespune/"
                aria-label="Instagram"
                className="transform transition-transform duration-300 hover:scale-110 relative z-10 icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-pink-500 hover:text-pink-700 transition-all duration-300"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/indiragroup/"
                aria-label="LinkedIn"
                className="transform transition-transform duration-300 hover:scale-110 relative z-10 icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-blue-600 hover:text-blue-900 transition-all duration-300"></i>
              </a>
              <a
                href="https://x.com/igipune"
                aria-label="Twitter"
                className="transform transition-transform duration-300 hover:scale-110 relative z-10 icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-blue-400 hover:text-blue-600 transition-all duration-300"></i>
              </a>
              <a
                href="https://www.youtube.com/c/indiracollege/videos"
                aria-label="YouTube"
                className="transform transition-transform duration-300 hover:scale-110 relative z-10 icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube text-red-500 hover:text-red-700 transition-all duration-300"></i>
              </a>
            </div>
          </div>

          {/* Important Links Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#023b5e]">Important Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <a
                  href="https://www.indirauniversity.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Home
                </a>
                <a
                  href="https://www.indirauniversity.edu.in/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  About Us
                </a>
  
                <a
                  href="https://www.indirauniversity.edu.in/admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Admissions
                </a>
              </div>
              <div className="space-y-4">
              <a
                  href="https://www.indirauniversity.edu.in/school/schoollisting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Our Schools
                </a>
                <a
                  href="https://www.indirauniversity.edu.in/admissions#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.indirauniversity.edu.in/admissions#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Terms of Services
                </a>
              </div>
            </div>
          </div>

          {/* Schools Column */}
{/* Schools Column */}
<div className="space-y-8">
  <h3 className="text-2xl font-bold text-[#023b5e]">Schools</h3>
  <div className="space-y-4">
    <a
      href="https://www.indirauniversity.edu.in/school/schoollisting/school-of-business"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-600 hover:text-gray-400 text-lg"
    >
      School of Business
    </a>
    <a
      href="https://www.indirauniversity.edu.in/school/schoollisting/school-of-commerce-and-economics"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-600 hover:text-gray-400 text-lg"
    >
      School of Commerce and Economics
    </a>
    <a
      href="https://www.indirauniversity.edu.in/school/schoollisting/school-of-information-technology"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-600 hover:text-gray-400 text-lg"
    >
      School of Information Technology
    </a>
    <a
      href="https://www.indirauniversity.edu.in/school/schoollisting/school-of-liberal-arts"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-600 hover:text-gray-400 text-lg"
    >
      School of Liberal Arts
    </a>
    <a
      href="https://www.indirauniversity.edu.in/school/schoollisting/school-of-pharmacy"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-600 hover:text-gray-400 text-lg"
    >
      School of Pharmacy
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
