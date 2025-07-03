import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

const Webinar = () => {
  return (
    <div className="flex flex-col-reverse mb-4 lg:flex-row gap-8 bg-white rounded-2xl max-w-7xl mx-auto px-6 lg:px-8 py-8 mt-4">
      {/* Left: Event Details */}
      <div className="flex-1 ">
        {/* Badges */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 ">Webinar</span>
          <span className="px-4 py-1 rounded-full text-xs font-semibold border border-blue-200 text-blue-700 bg-blue-50  ">Upcoming</span>
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Girish (Maxtron) X Hue</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Collateralizing Digital Assets and What Regulators Want Now</h2>
        {/* Description */}
        <p className="text-gray-800 mb-2 text-lg ">
          Join <b>Hue H. Nguyen</b> (Ex-SEC, PwC, Serial Entrepreneur) and <b>Girish</b> (2X Founder, Angel Investor, Global Tech Advisor) for a power-packed session on:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-800 mb-4 text-lg ">
          <li>🧠 <b>Hue H. Nguyen</b> – Former U.S. SEC regulatory consultant, PwC alum, serial entrepreneur, and activist investor</li>
          <li>💼 <b>Girish</b> – 2X exited founder, IIT Roorkee graduate, global business strategist, and angel investor</li>
        </ul>
        <div className="text-gray-800 mb-2 text-lg">
          In this session, we'll unpack:
        </div>
        <ul className="list-disc pl-6 mt-2 text-gray-800 mb-6 text-lg ">
          <li>📜 New U.S. laws enabling the use of digital assets as collateral</li>
          <li>🪙 Tokenization of real-world assets like gold and equity</li>
          <li>🏛️ How to stay compliant across jurisdictions (SEC, DIFC, FATF, etc.)</li>
          <li>🧩 Structuring decentralized hedge funds & AI-based systems within legal frameworks</li>
          <li>🔐 The real risks of non-compliance and how to stay investor-ready</li>
        </ul>
        <div className="text-gray-800 mb-2 text-lg">
          Whether you're a Web3 founder, compliance lead, VC, or FinTech builder, this webinar will help you prepare for what's coming—and give you the tools to build smarter and safer.
        </div>
        {/* Event Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 mt-4">
          <div className="flex items-center gap-3 bg-blue-50 rounded-lg px-3 py-3">
            <FaCalendarAlt className="w-5 h-5 text-blue-600 " />
            <div>
              <div className="text-xs text-gray-700 ">Date</div>
              <div className="font-medium text-gray-900 ">4th July 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 rounded-lg px-3 py-3">
            <FaClock className="w-5 h-5 text-blue-600 " />
            <div>
              <div className="text-xs text-gray-700 ">Time & Duration</div>
              <div className="font-medium text-gray-900 ">4.00 - 5.00 PM PDT</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 rounded-lg px-3 py-3">
            <FaMapMarkerAlt className="w-5 h-5 text-blue-600 " />
            <div>
              <div className="text-xs text-gray-700 ">Location</div>
              <div className="font-medium text-gray-900 ">Virtual Event</div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
            href="https://linktr.ee/maxtron.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#444CE7] text-white font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.0] transition-all duration-300 overflow-hidden text-xs sm:text-sm"
          >
            <span className="relative z-20">Register / Learn More</span>
            <FaArrowRightLong className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
      {/* Right: Speaker Card */}
     <div className="w-full lg:w-96 flex-shrink-0 bg-blue-50 rounded-2xl py-4 px-5 flex flex-col items-center shadow-md border border-blue-100">
  <div className="text-base font-semibold text-gray-900 mb-3">Featured Speakers</div>

  {/* Girish Section */}
  <div className="flex flex-col items-center mb-6">
    <img src="/girish.webp" alt="Girish" className="rounded-xl object-cover border border-white shadow-lg w-24 h-24 mb-2" />
    <div className="text-lg font-bold text-gray-900 mb-2">Girish</div>
    <div className="flex flex-wrap gap-2 justify-center mb-2">
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">2X Founder, Angel Investor</span>
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Global Tech Advisor</span>
    </div>
    <p className="text-gray-800 text-[12px] text-center">
      <b>Girish</b> – 2X exited founder, IIT Roorkee graduate, global business strategist, and angel investor.
    </p>
  </div>

  {/* Hue Section */}
  <div className="flex flex-col items-center">
    <img src="/hui.webp" alt="Hue H. Nguyen" className="rounded-xl object-cover border border-white shadow-lg w-24 h-24 mb-2" />
    <div className="text-lg font-bold text-gray-900 mb-2">Hue H. Nguyen</div>
    <div className="flex flex-wrap gap-2 justify-center mb-2">
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Ex-SEC, PwC, Serial Entrepreneur</span>
    </div>
    <p className="text-gray-800 text-[12px] text-center">
      <b>Hue H. Nguyen</b> – Former U.S. SEC regulatory consultant, PwC alum, serial entrepreneur, and activist investor.
    </p>
  </div>

  {/* Social Links */}
  <div className="flex items-center gap-5 mt-5">
    <a
      href="https://www.linkedin.com/company/maxtronai/"
      target="_blank"
      aria-label="Maxtron LinkedIn"
      className="flex items-center gap-2 text-blue-300 hover:text-blue-600 transition-colors"
    >
      <FaLinkedin className="w-5 h-5" />
    </a>
    <a
      href="https://twitter.com/maxtronai"
      target="_blank"
      aria-label="Maxtron Twitter"
      className="flex items-center gap-2 text-blue-300 hover:text-blue-600 transition-colors"
    >
      <FaTwitter className="w-5 h-5" />
    </a>
  </div>
</div>

    </div>
  );
};

export default Webinar; 