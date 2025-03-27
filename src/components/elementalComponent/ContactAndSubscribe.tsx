import { Link } from "react-router-dom";
import {  WhiteLogo } from "../VectorImage";


const ContactAndSubscribe = () => {
  return (
   <div className="w-full relative -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 xl:-bottom-12 bg-gradient-to-r from-[#D77DD4] via-[#481658] to-[#69348F] pb-10">
     <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 py-10">
       
       {/* Logo */}
       <div className="w-full md:w-1/2 flex justify-center md:justify-start">
         <WhiteLogo/>
       </div>
   
       {/* Buttons */}
       <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-center md:justify-end items-center gap-4 ">
         <Link to="/Contact">
           <button className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-black hover:text-white hover:bg-transparent border-2 bprder-solid border-white font-['Open_Sans'] font-bold transition hover:bg-white shadow-md">
             Contact Us
           </button>
         </Link>
         <button
           onClick={() =>
             window.open("https://calendly.com/business-maxtron/30min", "_blank")
           }
           className="text-sm px-5 py-2 rounded-lg bg-[#F5F5F5] text-black font-['Open_Sans'] hover:text-white hover:bg-transparent border-2 bprder-solid border-white font-bold transition hover:bg-white shadow-md"
         >
           Book a Call
         </button>
       </div>
   
     </div>
   </div>
  )
}

export default ContactAndSubscribe