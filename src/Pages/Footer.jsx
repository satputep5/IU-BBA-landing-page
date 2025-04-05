import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/IU Logo Cobine Final.png";

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
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-6">
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
  <p>0211 466 1593 / 7020 512 131</p>
</div>


              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-2xl hover:text-gray-500"></i>
                <a
                  href="mailto:ibba.admissions@indiraiimp.edu.in"
                  className="text-black hover:text-gray-800"
                >
                  ibba.admissions@indiraiimp.edu.in
                </a>
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

          {/* Right Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#023b5e]">Important Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <a
                  href="https://indiraedu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Home
                </a>
                <a
                  href="https://indiraedu.com/index.php?/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  About Us
                </a>
                <a
                  href="https://indiraedu.com/index.php?/institutes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Institutes
                </a>
                <a
                  href="https://indiraedu.com/index.php?/admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Admissions
                </a>
              </div>
              <div className="space-y-4">
                <a
                  href="https://indiraedu.com/index.php?/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Contact Us
                </a>
                <a
                  href="https://indiraedu.com/index.php?/accreditations-and-recognition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Accreditations
                </a>
                <a
                  href="https://indiraedu.com/index.php?/PrivacyPolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  Privacy Policy
                </a>
                <a
                  href="http://www.unipune.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-400 text-lg"
                >
                  SPPU
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#023b5e] py-2 px-8 md:px-16 text-white text-center text-sm mt-auto">
        <p>© 2025. Indira University.</p>
      </div>
    </div>
  );
}

export default Footer;
