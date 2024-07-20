import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="py-12 bg-white px-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            Talk to us and
          </h2>
          <h2 className="text-4xl font-bold text-purple-600 mb-4">
            Get your project moving!
          </h2>
          <ul className="mb-8">
            <li className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-1.414-1.414m-3.536 3.536L7.05 1.93m-5.657 5.657l3.536 3.536M10 14.828l-3.536-3.536M21 12h-3M3 12H0m6 6h3m-6 6h3m3-3h3"
                ></path>
              </svg>
              <span>We will respond to you within 24 hours.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-1.414-1.414m-3.536 3.536L7.05 1.93m-5.657 5.657l3.536 3.536M10 14.828l-3.536-3.536M21 12h-3M3 12H0m6 6h3m-6 6h3m3-3h3"
                ></path>
              </svg>
              <span>
                You’ll be talking to product and tech experts (no account
                managers).
              </span>
            </li>
          </ul>
          <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="lg:w-1/2 bg-white p-8 shadow-md rounded-lg">
          <form>
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
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="A..."
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
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Value"
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
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Value"
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
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Value"
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
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Value"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700"
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
