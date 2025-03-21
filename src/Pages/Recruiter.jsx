import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importing images
import logo1 from '../assets/Images/came/1.avif';
import logo2 from '../assets/Images/came/2.avif';
import logo3 from '../assets/Images/came/3.avif';
import logo21 from '../assets/Images/came/21.avif';
import logo22 from '../assets/Images/came/22.avif';
import logo6 from '../assets/Images/came/24.avif';
import logo7 from '../assets/Images/came/7.avif';
import logo8 from '../assets/Images/came/8.avif';
import logo9 from '../assets/Images/came/9.avif';
import logo10 from '../assets/Images/came/10.avif';
import logo11 from '../assets/Images/came/11.avif';
import logo12 from '../assets/Images/came/12.avif';
import logo13 from '../assets/Images/came/13.avif';
import logo15 from '../assets/Images/came/15.avif';
import logo19 from '../assets/Images/came/19.avif';
import logo20 from '../assets/Images/came/20.avif';
import logo25 from '../assets/Images/came/25.avif';
import logo29 from '../assets/Images/came/29.avif';
import logo32 from '../assets/Images/came/32.avif';
import logo34 from '../assets/Images/came/34.avif';
import logo37 from '../assets/Images/came/37.avif';
import logo39 from '../assets/Images/came/39.avif';
import logo40 from '../assets/Images/came/40.avif';
import logo41 from '../assets/Images/came/41.avif';
import logo42 from '../assets/Images/came/42.avif';
import logo43 from '../assets/Images/came/43.avif';
import logo44 from '../assets/Images/came/44.avif';
import logo46 from '../assets/Images/came/46.avif';
import logo47 from '../assets/Images/came/47.avif';
import logo48 from '../assets/Images/came/48.avif';
import logo50 from '../assets/Images/came/50.avif';
import logo51 from '../assets/Images/came/51.avif';


const sponsorsData = [
  {
    title: 'PARTICIPATING DELEGATES',
    logos: [
      logo1, logo2, logo3, logo21, logo22, logo6, logo7, logo8, logo9, 
      logo10, logo11, logo12, logo13, logo15, logo19, logo20,
    ],
  },
  {
    title: 'PARTICIPATING DELEGATES',
    logos: [
      logo25, logo29, logo32, logo34, logo37, logo39, logo40, logo41, logo42, 
      logo43, logo44, logo46, logo47, logo48, logo50, logo51,
    ],
  },
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex poppins-regular flex-col justify-center items-center py-6 md:py-12 bg-white px-0 md:px-16 font-poppins">
      {/* Heading above the slider */}
      <div className="text-xl md:text-3xl font-semibold text-gray-800 mb-6">
        Our Recruiters
      </div>
      
      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-center w-full px-4">
              <div
                className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center w-full px-6"
                style={{ gridTemplateRows: 'repeat(2, auto)' }} // Enforcing only two rows
              >
                {slide.logos.map((logo, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="rounded-none shadow-none w-auto h-auto object-contain" // Logos will scale dynamically without any background styling
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;