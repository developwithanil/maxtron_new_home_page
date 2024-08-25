import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ContactImg from "../../public/formimg.svg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "../page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const sectionClassName =
    location.pathname === "/Contact"
      ? "py-20 md:px-12 pt-36"
      : "py-20 md:px-12";

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
        const response = await fetch(
          "https://maxtron-backend.vercel.app/sendData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formObject),
          }
        );

        if (response.ok) {
          toast.success("Request submitted successfully!");
          formRef.current.reset(); 
        } else {
          const errorText = await response.text();
          toast.error(errorText);
        }
      } catch (error) {
        console.error("Failed to submit the request:", error);
        toast.error("Error submitting request. Please try again."); 
      } finally {
        setIsLoading(false); 
      }
    }
  };

  return (
    <section id="contact-us" className={sectionClassName}>
      <div
        className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="lg:w-2/5 mb-8 lg:mb-0">
          <h2 className="text-4xl font-normal text-black ">
            Talk to us and
          </h2>
          <h2 className="text-4xl font-bold text-black mb-4">
            get your project moving!
          </h2>
          <ul className="mb-8">
            <li className="flex items-center space-x-2 mb-4 ">
              <IoCheckmarkCircleOutline className="text-red-500 h-8 w-8" />
              <span className="text-sm">
                We will respond to you within 24 hours.
              </span>
            </li>
            <li className="flex items-center space-x-2 mb-4">
              <IoCheckmarkCircleOutline className="text-red-500 h-12 w-12 md:h-8 md:w-8" />
              <span className="text-sm">
                You will be talking with the domain expert pertaining to your
                requirements.
              </span>
            </li>
          </ul>
          <div className=" rounded-lg">
            <img src={ContactImg} alt="img" />
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-white p-4 shadow-md rounded-lg ">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="designation"
                className="block text-gray-700 font-bold mb-2"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Designation"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Company Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Tell Us About Your Project
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder-bg"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black bg-white hover:bg-black hover:text-white transition-colors duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

    </section>
  );
};

export default ContactForm;
