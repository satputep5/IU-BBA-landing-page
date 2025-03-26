import { FaBullhorn, FaHandshake, FaChartLine, FaRegCalendarAlt, FaUniversity, FaBriefcase, FaRobot, FaMicrophoneAlt, FaCertificate } from 'react-icons/fa';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FinanceManagementOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.1 });
        gsap.to(icon, { rotationY: 0, duration: 0.1 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.1 });
        gsap.to(icon, { rotationY: 180, duration: 0.1 });
      });
    });
  }, []);

  const cardData = [
    {
      color: '#007BFF',
      icon: <FaUniversity size={50} className="text-white mb-4 icon" />,
      title: 'Live Stock Market Trading Labs',
      description: 'Learn how to analyze real-time markets!',
    },
    {
      color: '#28A745',
      icon: <FaBriefcase size={50} className="text-white mb-4 icon" />,
      title: 'Internships in Top Banks',
      description: 'Work with the best investment firms.',
    },
    {
      color: '#17A2B8',
      icon: <FaRobot size={50} className="text-white mb-4 icon" />,
      title: 'AI-Powered Finance Tools',
      description: 'Hands-on training with Bloomberg, Reuters, and Algo Trading.',
    },
    {
      color: '#FFC107',
      icon: <FaMicrophoneAlt size={50} className="text-white mb-4 icon" />,
      title: 'Exclusive Guest Lectures',
      description: 'Learn from CFOs, Fund Managers, and Banking Experts.',
    },
    {
      color: '#DC3545',
      icon: <FaCertificate size={50} className="text-white mb-4 icon" />,
      title: 'Certification Courses in Banking & Finance',
      description: 'Boost your resume with certifications in Financial Modeling, Investment Banking, and Risk Management.',
    },
  ];

  return (
    <div className="px-8 md:px-16 py-6 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#1D3557]" data-aos="fade-up">
        Why Indira University ?
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-4 shadow-xl flex flex-col items-start text-left relative rounded-xl transform transition-transform duration-300 hover:scale-105 max-w-[250px]"
            style={{ backgroundColor: card.color }}
            data-aos="fade-up"
          >
            {card.icon}
            <p className="text-lg font-semibold text-white">{card.title}</p>
            <p className="text-sm text-white mt-2">{card.description}</p>
            <div className="circle absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-white opacity-0 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinanceManagementOfferings;
