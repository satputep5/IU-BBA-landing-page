import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NPFWidget from '../Components/NPFWidget';
 

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

function ApplyNowButton() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top

    // Toast notification after scrolling to the top
    toast.info("Kindly fill the form.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="fixed right-[-48px] top-1/2 transform -translate-y-1/2 z-50">
      <button
        // onClick={scrollToTop}
        onClick={handleOpen}

        className="bg-gradient-to-b from-[#018699] to-[#003c84] text-white py-1 px-6 shadow-lg transition duration-300 flex items-center justify-center transform -rotate-90 hover:bg-blue-700 hover:underline hover:scale-105 cursor-pointer"
      >
        Apply Now
      </button>

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

export default ApplyNowButton;
