// import React, { useRef } from "react";
// import ContactImg from "../../../public/formimg.svg";
// import { IoCheckmarkCircleOutline } from "react-icons/io5";

// const ContactForm: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (formRef.current) {
//       const formData = new FormData(formRef.current);
//       const formObject: { [key: string]: string } = {};
//       formData.forEach((value, key) => {
//         formObject[key] = value.toString();
//       });

//       try {
//         const response = await fetch(
//           "https://sheet.best/api/sheets/ef2a5ec3-6306-4ecc-9425-36e51da1a457",
//           {
//             method: "POST",
//             mode: "cors",
//             headers: {
//               "Content-Type": "application/json",
//               // "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify(formObject),
//           }
//         );

//         if (response.ok) {
//           const data = await response.json();
//           console.log("Success:", data);
//         } else {
//           const errorText = await response.text();
//           console.log("Error:", errorText);
//         }
//       } catch (error) {
//         console.log("Error:", error);
//       }
//     }
//   };

//   return (
//     <section className="py-12 md:px-12">
//       <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
//         <div className="lg:w-2/5 mb-8 lg:mb-0">
//           <h2 className="text-4xl font-normal text-black mb-4">
//             Talk to us and
//           </h2>
//           <h2 className="text-4xl font-bold text-black mb-4">
//             Get your project moving!
//           </h2>
//           <ul className="mb-8">
//             <li className="flex items-center space-x-2 mb-4">
//               <IoCheckmarkCircleOutline className="text-red-500" />
//               <span>We will respond to you within 24 hours.</span>
//             </li>
//             <li className="flex items-center space-x-2 ">
//               <IoCheckmarkCircleOutline className="text-red-500" />
//               <span>
//                 You’ll be talking to product and tech experts (no account
//                 managers).
//               </span>
//             </li>
//           </ul>
//           <div className=" rounded-lg">
//             <img src={ContactImg} alt="img" />
//           </div>
//         </div>
//         <div className="w-full lg:w-2/5 bg-white p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
//           <form ref={formRef} onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="fullName"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Full Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Work Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="designation"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Designation
//               </label>
//               <input
//                 type="text"
//                 id="designation"
//                 name="designation"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Designation"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="companyName"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 name="companyName"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Company Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Tell Us About Your Project."
//               ></textarea>
//             </div>
//             <div className="text-right">
//               <button
//                 type="submit"
//                 className="px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import { useRef, useState } from "react";
import ContactImg from "../../../public/formimg.svg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    designation: "",
    companyName: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    designation: "",
    companyName: "",
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formValues.fullName) errors.fullName = "Full Name is required";
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formValues.designation) errors.designation = "Designation is required";
    if (!formValues.companyName)
      errors.companyName = "Company Name is required";
    if (!formValues.description) errors.description = "Description is required";
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // const resetForm = () => {
  //   setFormValues({
  //     fullName: "",
  //     email: "",
  //     designation: "",
  //     companyName: "",
  //     description: "",
  //   });
  //   setFormErrors({
  //     fullName: "",
  //     email: "",
  //     designation: "",
  //     companyName: "",
  //     description: "",
  //   });
  //   setSuccessMessage("");
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0 && formRef.current) {
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
            },
            body: JSON.stringify(formObject),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Success:", data);
          setSuccessMessage("Your message has been successfully sent!");
          resetForm();
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
    <section className="py-12 md:px-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/5 mb-8 lg:mb-0">
          <h2 className="text-4xl font-normal text-black mb-4">
            Talk to us and
          </h2>
          <h2 className="text-4xl font-bold text-black mb-4">
            get your project moving!
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
          <div className="rounded-lg">
            <img src={ContactImg} alt="img" />
          </div>
        </div>
        <div className="w-full lg:w-2/5 bg-white p-4 shadow-md rounded-lg ">
          {successMessage && (
            <div className="mb-4 text-green-500 text-center font-bold">
              {successMessage}
            </div>
          )}
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
                value={formValues.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Full Name"
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.fullName}
                </p>
              )}
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
                value={formValues.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
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
                value={formValues.designation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Designation"
              />
              {formErrors.designation && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.designation}
                </p>
              )}
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
                value={formValues.companyName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Company Name"
              />
              {formErrors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.companyName}
                </p>
              )}
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
                value={formValues.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Description"
              ></textarea>
              {formErrors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.description}
                </p>
              )}
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black"
              >
                Submit
              </button>
              {/* <button
                type="button"
                onClick={resetForm}
                className="ml-4 px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black"
              >
                Reset
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
function resetForm() {
  throw new Error("Function not implemented.");
}
