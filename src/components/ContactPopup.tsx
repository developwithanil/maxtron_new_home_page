import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CrossIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Close"
    className="absolute top-4 right-4 text-[#7A35C1] hover:text-purple-800 text-2xl font-bold z-10 focus:outline-none"
    tabIndex={0}
  >
    ×
  </button>
);

const popupVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const CongratulationPopup = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1100]"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={overlayVariants}
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
      <p className="text-gray-500 text-sm">We will connect with you soon.</p>
      <button
        onClick={onClose}
        className="mt-6 px-6 py-2 bg-[#7A35C1] text-white rounded-lg hover:bg-[#6B2F9C] transition-all"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

const ContactPopup = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (formRef.current) {
      // const formData = new FormData(formRef.current);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        formRef.current.reset();
        setShowCongrats(true);

        setTimeout(() => {
          setOpen(false);
        }, 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open && popupRef.current) {
      popupRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            <motion.div
              ref={popupRef}
              tabIndex={-1}
              className="relative w-[90%] max-w-lg px-8 py-10 flex flex-col items-center focus:outline-none bg-white border-2 border-[#7A35C1] shadow-2xl rounded-3xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CrossIcon onClick={() => setOpen(false)} />
              <h2 className="text-3xl font-extrabold text-[#7A35C1] mb-6 text-center drop-shadow-lg">
                Contact Us
              </h2>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer']"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer']"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer']"
                    placeholder="Enter Phone Number"
                  />
                </div>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Congratulation Popup */}
      <AnimatePresence>
        {showCongrats && (
          <CongratulationPopup onClose={() => setShowCongrats(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactPopup;
