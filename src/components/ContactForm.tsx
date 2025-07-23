import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ContactImg from "../../public/formimg.webp";

import "../page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RightClick } from "./VectorImage";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const sectionClassName =
    location.pathname === "/Contact"
      ? "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-36"
      : "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formObject: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("Request submitted successfully!");
        formRef.current.reset();
        setShowPopup(true);
      } catch (error) {
        toast.error("Error submitting request. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="contact-us" className={sectionClassName}>
      <div className="shadow-lg border border-[#BEBCCA] rounded-3xl p-5 md:p-8">
        <div
          className="w-full flex p-2 items-start gap-2 rounded-lg container mx-auto "
          style={{
            background:
              "linear-gradient(270deg, var(--Primary-100, #CAA8EF) 0%, var(--Primary-500, #7A35C1) 100%)",
          }}
        >
          <p className="p-2 text-white">Free 30-Minutes Consultation</p>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row bg-white items-center py-5 md:p-5 justify-between gap-6 lg:gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2 text-left lg:text-left">
            <h2 className="self-stretch text-[#1E1E1E] [font-family:Switzer] font-bold text-xl md:text-[40px] leading-[120%]">
              Fill the form & Get your project moving!
            </h2>

            <ul className="mb-8 mt-8 space-y-4">
              <li className="flex items-center space-x-3">
                <div className="md:w-8 w-6 h-6 md:h-8">
                  <RightClick />
                </div>
                <div className="text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]">
                  We will respond to you within 24 hours.
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="md:w-8 w-6 h-6 md:h-8">
                  <RightClick />
                </div>
                <div className="text-[#1E1E1E] [font-family:Inter] text-sm md:text-base font-normal leading-[120%]">
                  You'll be talking to product and tech experts (no account
                  managers).
                </div>
              </li>
            </ul>
            <img src={ContactImg} alt="Contact" className="w-full h-auto" />
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2 p-0 sm:p-6 rounded-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {["fullName", "email", "designation", "companyName"].map((id) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    {id === "fullName"
                      ? "Full Name"
                      : id === "companyName"
                      ? "Company Name"
                      : id}
                  </label>
                  <input
                    type={id === "email" ? "email" : "text"}
                    id={id}
                    name={id}
                    required={id === "fullName" || id === "email"}
                    className="w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer']"
                    placeholder={`Enter ${id
                      .replace(/([A-Z])/g, " $1")
                      .trim()}`}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-medium mb-2 font-['Switzer']"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full p-3 bg-[#DFDEE74D] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer']"
                  placeholder="Write Something"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-8 py-3 text-white font-semibold rounded-lg bg-[#7A35C1] hover:bg-[#6B2F9C] transition-transform duration-300 transform hover:scale-105 active:scale-95 font-['Switzer']"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Beautiful Framer Motion Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-2xl text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#E9D8FD] text-[#7A35C1] text-3xl rounded-full flex items-center justify-center shadow-inner animate-bounce">
                  🎉
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#1E1E1E] mb-2">
                Congratulations!
              </h2>
              <p className="text-gray-600">
                Your form has been submitted successfully.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 px-6 py-2 bg-[#7A35C1] text-white rounded-lg hover:bg-[#6B2F9C] transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer position="top-right" />
    </section>
  );
};

export default React.memo(ContactForm);
