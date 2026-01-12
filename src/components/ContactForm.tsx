import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactImg from "../../public/formimg.webp";
import "../page.css";
import "react-toastify/dist/ReactToastify.css";
import { RightClick } from "./VectorImage";
import { Helmet } from "react-helmet-async";

const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[6-9]\d{9}$/, "Phone number must be 10 digits and valid"),
  designation: z
    .string()
    .min(1, "Designation is required")
    .min(2, "Designation must be at least 2 characters"),
  companyName: z
    .string()
    .min(1, "Company Name is required")
    .min(2, "Company Name must be at least 2 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

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

  const sectionClassName =
    location.pathname === "/contact"
      ? "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 md:pt-36"
      : "py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12";

  return (
    <>
      {location.pathname === "/contact" && (
        <Helmet>
          <title>Contact Us | Maxtron Innovations</title>
          <meta
            name="description"
            content="Get in touch with Maxtron Innovations for AI, Blockchain, Web3 and product development services."
          />
          <link rel="canonical" href="https://www.maxtron.ai/contact" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        </Helmet>
      )}
      <section id="contact-us" className={sectionClassName}>
        <div className="shadow-lg border border-[#BEBCCA] rounded-3xl p-5 md:p-8">
          <div
            className="w-full flex p-2 items-start gap-2 rounded-lg container mx-auto "
            style={{
              background:
                "linear-gradient(270deg, var(--Primary-100, #CAA8EF) 0%, var(--Primary-500, #7A35C1) 100%)",
            }}
          >
            <p className="p-2 text-white">Fill the Form & Get Your Project Moving</p>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row bg-white items-center py-5 md:p-5 justify-between gap-6 lg:gap-8">
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

            <div className="w-full lg:w-1/2 p-0 sm:p-6 rounded-2xl">
              <form
                onSubmit={handleSubmit(async () => {
                  try {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    reset();
                    setShowPopup(true);
                  } catch (error) {
                    console.error("Error submitting form:", error);
                  }
                })}
                className="space-y-4"
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
                    htmlFor="phoneNumber"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("phoneNumber")}
                    type="tel"
                    id="phoneNumber"
                    required
                    className={`w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${
                      errors.phoneNumber ? "border-2 border-red-500" : ""
                    }`}
                    placeholder="Enter Phone Number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1 font-normal">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="designation"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("designation")}
                    type="text"
                    id="designation"
                    required
                    className={`w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${
                      errors.designation ? "border-2 border-red-500" : ""
                    }`}
                    placeholder="Enter Designation"
                  />
                  {errors.designation && (
                    <p className="text-red-500 text-sm mt-1 font-normal">
                      {errors.designation.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-gray-700 font-medium mb-2 font-['Switzer'] capitalize"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("companyName")}
                    type="text"
                    id="companyName"
                    required
                    className={`w-full p-3 rounded-lg placeholder-gray-400 bg-[#DFDEE74D] focus:outline-none focus:ring-2 focus:ring-[#7A35C1] transition-all font-['Switzer'] ${
                      errors.companyName ? "border-2 border-red-500" : ""
                    }`}
                    placeholder="Enter Company Name"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1 font-normal">
                      {errors.companyName.message}
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
            </div>
          </div>
        </div>

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
        {/* <ToastContainer position="top-right" /> */}
      </section>
    </>
  );
};

export default React.memo(ContactForm);
