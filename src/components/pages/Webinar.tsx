import { FaLinkedin } from "react-icons/fa";

const Webinar = () => {
  return (
    <div className="flex flex-col mb-4 xl:flex-row gap-8 bg-white rounded-2xl max-w-7xl mx-auto px-6 lg:px-8 py-8 mt-4">
      <div className="flex-1 ">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 ">
            Webinar
          </span>
          <span className="px-4 py-1 rounded-full text-xs font-semibold border border-blue-200 text-blue-700 bg-blue-50  ">
            Upcoming
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Girish (Maxtron) X Hue
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
          Collateralizing Digital Assets and What Regulators Want Now
        </h2>

        <p className="text-gray-800 mb-2 text-lg ">
          Join <b>Hue H. Nguyen</b> & <b>Girish</b> for a power-packed session :
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-800 mb-4 text-lg ">
          <li>
            🧠 <b>Hue H. Nguyen</b> – Former U.S. SEC Regulatory Consultant, PWC
            Alum, Serial Entrepreneur, Activist Investor, Gold Tokenization, RWA
            & Digital Asset Compliance & Regulations.
          </li>
          <li>
            💼 <b>Girish</b> – 2X Exited Founder, Global Tech Advisor, Global
            Business Strategist, IIT Roorkee Graduate & Angel Investor
          </li>
        </ul>
        <div className="text-gray-800 mb-2 text-lg">
          In this session, we'll unpack: How to Collateralize, Tokenize and
          Scale - The Legal Way.
        </div>
        <ul className="list-disc pl-6 mt-2 text-gray-800 mb-6 text-lg ">
          <li>
            📜 New U.S. laws enabling the use of digital assets as collateral
          </li>
          <li>🪙 Tokenization of real-world assets like gold and equity</li>
          <li>
            🏛️ How to stay compliant across jurisdictions (SEC, DIFC, FATF,
            etc.)
          </li>
          <li>
            🧩 Structuring decentralized hedge funds & AI-based systems within
            legal frameworks
          </li>
          <li>
            🔐 The real risks of non-compliance and how to stay investor-ready
          </li>
        </ul>
        <div className="text-gray-800 mb-2 text-lg">
          Whether you're a Web3 Founder, Compliance Lead, VC, or FinTech Builder
          this webinar will help you prepare for what's coming - and give you
          the tools to build smarter and safer.
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 mt-4">
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
        </div> */}

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
          {/* Join Now Button */}
          <a
            href="https://lu.ma/ctt1wol7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#444CE7] text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl shadow-xl hover:shadow-purple-500/30 transition-all duration-300 text-sm sm:text-base overflow-hidden"
          >
            <span className="relative z-20">Join Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>

          {/* Date Box */}
          <div className="bg-blue-50 text-blue-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md border border-blue-200 text-sm sm:text-base">
            <span className="block text-center font-bold">
              Wednesday, 16 July
            </span>
          </div>

          {/* Time Box */}
          <div className="bg-blue-50 text-blue-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md border border-blue-200 text-sm sm:text-base">
            <span className="block text-center font-semibold">
              10:00 AM PDT | 8:30 PM GST | 6:30 PM CEST
            </span>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-96 flex-shrink-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white rounded-2xl py-6 px-6 flex flex-col items-center shadow-xl border border-blue-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-t-2xl" />
        <div className="text-lg font-semibold text-gray-900 mb-3">
          Featured Speakers
        </div>
        <div className="w-full flex flex-col md:flex-row xl:flex-col gap-3">
          <div className="flex flex-col items-center bg-white/80 rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow duration-300 relative group">
            <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold shadow">
              Featured
            </span>
            <div className="relative mb-2">
              <img
                src="/girish.webp"
                alt="Girish"
                className="rounded-full object-cover border-2 border-white shadow-lg w-28 h-28 mb-1 group-hover:scale-105 group-hover:shadow-purple-200 transition-transform duration-300"
              />
            </div>
            <div className="text-lg font-bold text-gray-900 mb-1">Girish</div>
            <div className="flex flex-wrap gap-2 justify-center mb-1">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                2X Founder, Angel Investor
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                Global Tech Advisor
              </span>
            </div>
            <p className="text-gray-700 text-sm text-center mb-1">
              2X Exited Founder, IIT Roorkee Alum, Global Strategist & Angel
              Investor empowering the next wave of Web3 Innovation.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.linkedin.com/in/girish-ahirwar/"
                target="_blank"
                aria-label="Girish LinkedIn"
                className="text-blue-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white/80 rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow duration-300 relative group">
            <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold shadow">
              Featured
            </span>
            <div className="relative mb-2">
              <img
                src="/hui.webp"
                alt="Hue H. Nguyen"
                className="rounded-full object-cover border-2 border-white shadow-lg w-28 h-28 mb-1 group-hover:scale-105 group-hover:shadow-purple-200 transition-transform duration-300"
              />
            </div>
            <div className="text-lg font-bold text-gray-900 mb-1">
              Hue H. Nguyen
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-1">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                Ex-SEC, PWC, Serial Entrepreneur
              </span>
            </div>
            <p className="text-gray-700 text-sm text-center mb-1">
              Former U.S. SEC Consultant, PWC Alum, Serial Entrepreneur,
              Activist Investor & Digital Asset Compliance & Regulations.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.linkedin.com/in/hue-h-nguyen-7027852/"
                target="_blank"
                aria-label="Hue LinkedIn"
                className="text-blue-400 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
