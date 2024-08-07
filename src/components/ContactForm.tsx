import React, { useRef } from "react";
import ContactImg from "../../public/formimg.svg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formObject: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });

      try {
        const response = await fetch(
          "https://sheet.best/api/sheets/ef2a5ec3-6306-4ecc-9425-36e51da1a457",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              // "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(formObject),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Success:", data);
        } else {
          const errorText = await response.text();
          console.log("Error:", errorText);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  return (
    <section className="py-20 md:px-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/5 mb-8 lg:mb-0">
          <h2 className="text-4xl font-normal text-black mb-4">
            Talk to us and
          </h2>
          <h2 className="text-4xl font-bold text-black mb-4">
            Get your project moving!
          </h2>
          <ul className="mb-8">
            <li className="flex items-center space-x-2 mb-4">
              <IoCheckmarkCircleOutline className="text-red-500" />
              <span>We will respond to you within 24 hours.</span>
            </li>
            <li className="flex items-center space-x-2 ">
              <IoCheckmarkCircleOutline className="text-red-500" />
              <span>
                You’ll be talking to product and tech experts (no account
                managers).
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
                className="w-full p-3 border border-gray-300 rounded-lg"
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
                className="w-full p-3 border border-gray-300 rounded-lg"
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
                className="w-full p-3 border border-gray-300 rounded-lg"
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
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Company Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Tell Us About Your Project."
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
