// // import React from "react";

// // const ContactForm: React.FC = () => {
// //   function Submit(e: React.FormEvent<HTMLFormElement>) {
// //     const formEle = document.querySelector("form");
// //     e.preventDefault();
// //     console.log("submitted");
// //     const formData = new FormData(formEle);
// //     fetch(
// //       "https://script.google.com/macros/s/AKfycbyJzWjaj6eZJSSevNEG4zqKwXK2hRXXaVTG7VBJ905lfz9TBWPS0hu_cdO5SiXO-a4/exec",
// //       {
// //         method: "POST",
// //         body: formData,
// //       }
// //     );
// //   }
// //   return (
// //     <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100 px-12">
// //       <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
// //         <div className="lg:w-2/5 mb-8 lg:mb-0">
// //           <h2 className="text-4xl font-normal text-black mb-4">
// //             Talk to us and
// //           </h2>
// //           <h2 className="text-4xl font-bold text-black mb-4">
// //             Get your project moving!
// //           </h2>
// //           <ul className="mb-8">
// //             <li className="flex items-center mb-4">
// //               <svg
// //                 className="w-6 h-6 text-red-500 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M18.364 5.636l-1.414-1.414m-3.536 3.536L7.05 1.93m-5.657 5.657l3.536 3.536M10 14.828l-3.536-3.536M21 12h-3M3 12H0m6 6h3m-6 6h3m3-3h3"
// //                 ></path>
// //               </svg>
// //               <span>We will respond to you within 24 hours.</span>
// //             </li>
// //             <li className="flex items-center">
// //               <svg
// //                 className="w-6 h-6 text-red-500 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M18.364 5.636l-1.414-1.414m-3.536 3.536L7.05 1.93m-5.657 5.657l3.536 3.536M10 14.828l-3.536-3.536M21 12h-3M3 12H0m6 6h3m-6 6h3m3-3h3"
// //                 ></path>
// //               </svg>
// //               <span>
// //                 You’ll be talking to product and tech experts (no account
// //                 managers).
// //               </span>
// //             </li>
// //           </ul>
// //           <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
// //         </div>
// //         <div className="lg:w-1/3 bg-white p-8 shadow-md rounded-lg">
// //           <form onSubmit={(e) => Submit(e)}>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="fullName"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="A..."
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="email"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Work Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="number"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 number
// //               </label>
// //               <input
// //                 type="text"
// //                 id="number"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="companyName"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Company Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="companyName"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="description"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Description
// //               </label>
// //               <textarea
// //                 id="description"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               ></textarea>
// //             </div>
// //             <div className="text-right">
// //               <button
// //                 type="submit"
// //                 className="px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black"
// //               >
// //                 Submit
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactForm;
// // import React, { useRef } from "react";

// // const ContactForm: React.FC = () => {
// //   const formRef = useRef<HTMLFormElement>(null);

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     console.log("submited");
// //     if (formRef.current) {
// //       const formData = new FormData(formRef.current);
// //       fetch(
// //         "https://script.google.com/macros/s/AKfycbyJzWjaj6eZJSSevNEG4zqKwXK2hRXXaVTG7VBJ905lfz9TBWPS0hu_cdO5SiXO-a4/exec",
// //         {
// //           method: "POST",
// //           mode: "no-cors",
// //           body: formData,
// //         }
// //       )
// //         .then((response) => response.json())
// //         .then((data) => {
// //           console.log("Success:", data);
// //         })
// //         .catch((error) => {
// //           console.error("Error:", error);
// //         });
// //     }
// //   };

// //   return (
// //     <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100 px-12">
// //       <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
// //         <div className="lg:w-2/5 mb-8 lg:mb-0">
// //           <h2 className="text-4xl font-normal text-black mb-4">
// //             Talk to us and
// //           </h2>
// //           <h2 className="text-4xl font-bold text-black mb-4">
// //             Get your project moving!
// //           </h2>
// //           <ul className="mb-8">
// //             <li className="flex items-center mb-4">
// //               <svg
// //                 className="w-6 h-6 text-red-500 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M3 10h1M3 14h1M4 12h16M21 12h1M3 12a9 9 0 100 0h0"
// //                 />
// //               </svg>
// //               <span>We will respond to you within 24 hours.</span>
// //             </li>
// //             <li className="flex items-center">
// //               <svg
// //                 className="w-6 h-6 text-red-500 mr-2"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M3 10h1M3 14h1M4 12h16M21 12h1M3 12a9 9 0 100 0h0"
// //                 />
// //               </svg>
// //               <span>
// //                 You’ll be talking to product and tech experts (no account
// //                 managers).
// //               </span>
// //             </li>
// //           </ul>
// //           <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
// //         </div>
// //         <div className="lg:w-1/3 bg-white p-8 shadow-md rounded-lg">
// //           <form ref={formRef} onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="fullName"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Full Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="fullName"
// //                 name="fullName"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="A..."
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="email"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Work Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="number"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 number
// //               </label>
// //               <input
// //                 type="text"
// //                 id="number"
// //                 name="number"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="companyName"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Company Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="companyName"
// //                 name="companyName"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label
// //                 htmlFor="description"
// //                 className="block text-gray-700 font-bold mb-2"
// //               >
// //                 Description
// //               </label>
// //               <textarea
// //                 id="description"
// //                 name="description"
// //                 className="w-full p-3 border border-gray-300 rounded-lg"
// //                 placeholder="Value"
// //               ></textarea>
// //             </div>
// //             <div className="text-right">
// //               <button
// //                 type="submit"
// //                 className="px-6 py-3 text-black font-bold rounded-lg border-[2px] border-black"
// //               >
// //                 Submit
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactForm;

// // ------------------

// //

// //----------------------------------------------------------//
// import React, { useRef } from "react";

// const ContactForm: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (formRef.current) {
//       const formData = new FormData(formRef.current);
//       try {
//         const response = await fetch(
//           "https://script.google.com/macros/s/AKfycbyAXvbGmNBt_9Vxo74gCANf2s0Pj0RxSuW39Wl7_DN4x6rJsl2caYsOKZK-fVWAkyPZ/exec",
//           {
//             method: "POST",
//             mode: "no-cors",
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: new URLSearchParams(formData as unknown as string).toString(),
//           }
//         );
//         if (response.ok) {
//           console.log("Form submitted successfully");
//         } else {
//           console.error("Error:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//   };

//   return (
//     <section className="py-12 bg-gradient-to-r from-pink-100 to-purple-100 px-12">
//       <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
//         <div className="lg:w-2/5 mb-8 lg:mb-0">
//           <h2 className="text-4xl font-normal text-black mb-4">
//             Talk to us and
//           </h2>
//           <h2 className="text-4xl font-bold text-black mb-4">
//             Get your project moving!
//           </h2>
//           <ul className="mb-8">
//             <li className="flex items-center mb-4">
//               <svg
//                 className="w-6 h-6 text-red-500 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 10h1M3 14h1M4 12h16M21 12h1M3 12a9 9 0 100 0h0"
//                 />
//               </svg>
//               <span>We will respond to you within 24 hours.</span>
//             </li>
//             <li className="flex items-center">
//               <svg
//                 className="w-6 h-6 text-red-500 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 10h1M3 14h1M4 12h16M21 12h1M3 12a9 9 0 100 0h0"
//                 />
//               </svg>
//               <span>
//                 You’ll be talking to product and tech experts (no account
//                 managers).
//               </span>
//             </li>
//           </ul>
//           <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
//         </div>
//         <div className="lg:w-1/3 bg-white p-8 shadow-md rounded-lg">
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
//                 placeholder="A..."
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
//                 placeholder="Value"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="number"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Number
//               </label>
//               <input
//                 type="text"
//                 id="number"
//                 name="number"
//                 className="w-full p-3 border border-gray-300 rounded-lg"
//                 placeholder="Value"
//               />
//             </div>
//             {/* <div className="mb-4">
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
//                 placeholder="Value"
//               />
//             </div> */}
//             {/* <div className="mb-4">
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
//                 placeholder="Value"
//               ></textarea>
//             </div> */}
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
import React, { useRef } from "react";
import ContactImg from "../../../public/formimg.svg";
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
    <section className="py-12 md:px-12">
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
        <div className="w-full lg:w-2/5 bg-white p-4 shadow-md rounded-lg">
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
