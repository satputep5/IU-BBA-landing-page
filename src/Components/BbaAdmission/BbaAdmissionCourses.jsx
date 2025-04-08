import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing images
import marketingImage from "../../assets/Images/mm.avif";
import financialImage from "../../assets/Images/fm.avif";
import hrImage from "../../assets/Images/hrm.avif";
import logisticsImage from "../../assets/Images/logi-sup.avif";
import internationalBusinessImage from "../../assets/Images/infor-bus.avif";
import bankingImage from "../../assets/Images/finance.avif";
import digitalMarketingImage from "../../assets/Images/dm-modern.avif";
import innovationImage from "../../assets/Images/ie.avif";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NPFWidget from '../../Components/NPFWidget';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BbaAdmissionCourses() {
  const courses = [
    {
      name: "Marketing Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: marketingImage,
    },
    {
      name: "Financial Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: financialImage,
    },
    {
      name: "Human Resource Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: hrImage,
    },
    {
      name: "Logistics and Supply Chain Management",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: logisticsImage,
    },
    {
      name: "International Business",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: internationalBusinessImage,
    },
    {
      name: "Banking and Financial Services",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: bankingImage,
    },
    {
      name: "Digital Marketing",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: digitalMarketingImage,
    },
    {
      name: "Innovation and Entrepreneurship",
      duration: "3 Years",
      fees: "₹1,25,000/year",
      image: innovationImage,
    },
  ];

  // Handle Apply button click (scroll & toast)
  const handleApplyClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    toast.info("Kindly fill the form.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="px-8 md:px-16 py-2 md:py-8 bg-[#f3f4f6] poppins-regular">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-[#135783]"
        data-aos="fade-up"
      >
        BBA Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#135683] via-[#208098] to-[#2A9DA2] rounded-xl transform transition-all flex flex-col justify-between relative"
            data-aos="fade-up"
            style={{
              minHeight: "350px",
              boxShadow:
                "0px 4px 20px rgba(19, 86, 131, 0.3), 0px 8px 30px rgba(32, 128, 152, 0.2), 0px 12px 40px rgba(42, 157, 162, 0.1)",
            }}
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover object-top rounded-t-xl"
            />

            <div className="px-6 py-2 flex flex-col justify-between h-full">
              <h3 className="text-xl font-semibold text-white mb-2">
                {course.name}
              </h3>
              <p className="text-sm text-[#f3f4f6]">
                Duration: {course.duration}
              </p>
              <p className="text-sm text-[#f3f4f6] mt-2">Fees: {course.fees}</p>

              {/* Apply Now Button */}
              <button
                // onClick={handleApplyClick}
                onClick={handleOpen}
                className="mt-auto text-center bg-[#2563EB] text-white px-4 py-2 rounded-full font-semibold border-2 border-[#FBBF24] transform transition-all hover:bg-[#3B82F6] hover:scale-105 hover:border-[#FBBF24] hover:shadow-lg"
                style={{
                  boxShadow: "0px 4px 15px rgba(37, 99, 235, 0.3)",
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        < NPFWidget />
        </Box>
      </Modal>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default BbaAdmissionCourses;
