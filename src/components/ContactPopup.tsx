import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[6-9]\d{9}$/, "Phone number must be 10 digits and valid"),
  description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

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
  const [showCongrats, setShowCongrats] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  console.log("Current form errors:", errors);

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
            className="fixed inset-0 max-h-screen bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            <motion.div
              ref={popupRef}
              tabIndex={-1}
              className="relative w-[90%] max-w-lg max-h-[90%] px-8 py-10 flex flex-col items-center overflow-y-scroll focus:outline-none bg-white border-2 border-[#7A35C1] shadow-2xl rounded-3xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              exit="exit"
            >
              <CrossIcon onClick={() => setOpen(false)} />
              <h2 className="text-3xl font-extrabold text-[#7A35C1] mb-6 text-center drop-shadow-lg">
                Contact Us
              </h2>
              <form
                onSubmit={handleSubmit(async () => {
                  try {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    reset();
                    setShowCongrats(true);
                    setTimeout(() => setOpen(false), 5000);
                  } catch (error) {
                    console.error("Error submitting form:", error);
                  }
                })}
                className="w-full flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("fullName", {
                      onChange: (e) => {
                        console.log("Full name changed:", e.target.value);
                      },
                    })}
                    type="text"
                    id="fullName"
                    required
                    className={`w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${
                      errors.fullName ? "border-2 border-red-500" : ""
                    }`}
                    placeholder="Enter Full Name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1 font-normal">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email", {
                      onChange: (e) => {
                        console.log("Email changed:", e.target.value);
                      },
                    })}
                    type="email"
                    id="email"
                    required
                    className={`w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${
                      errors.email ? "border-2 border-red-500" : ""
                    }`}
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 font-normal">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    required
                    className={`w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${
                      errors.phone ? "border-2 border-red-500" : ""
                    }`}
                    placeholder="Enter Phone Number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 font-normal">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer']"
                  >
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("description")}
                    id="description"
                    rows={4}
                    required
                    className={`w-full p-3 bg-[#DFDEE74D] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${
                      errors.description ? "border-2 border-red-500" : ""
                    }`}
                    placeholder="Write Something"
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1 font-normal">
                      {errors.description.message}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-8 py-3 text-white font-semibold rounded-lg bg-[#7A35C1] hover:bg-[#6B2F9C] transition-transform duration-300 transform hover:scale-105 active:scale-95 font-['Switzer']"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
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

      <AnimatePresence>
        {showCongrats && (
          <CongratulationPopup onClose={() => setShowCongrats(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactPopup;
