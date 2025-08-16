import React from "react";
import { Helmet } from "react-helmet-async";
import webinar from "../../assets/events/webinar_22.webp";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Webinar = () => {
  return (
    <>
      <Helmet>
        <title>Maxtron | Web3, AI, Blockchain & IT Product Development</title>
        <meta
          name="description"
          content="Maxtron delivers innovative IT and marketing solutions to accelerate your business growth with cutting-edge technology."
        />
        <link rel="canonical" href="https://www.maxtron.ai/" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <meta
          property="og:title"
          content="Maxtron | Web3, AI, Blockchain & IT Product Development"
        />
        <meta
          property="og:description"
          content="Maxtron delivers innovative IT and marketing solutions to accelerate your business growth with cutting-edge technology."
        />
        <meta
          property="og:image"
          content="https://www.maxtron.ai/src/assets/MaxtronLogo.png"
        />
        <meta property="og:url" content="https://www.maxtron.ai/webinar" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="flex flex-col xl:flex-row gap-8 bg-white rounded-2xl shadow-2xl max-w-7xl mx-auto overflow-hidden">
          <div className="flex-1 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 tracking-wide">
                Webinar
              </span>
              <span className="px-4 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 tracking-wide animate-pulse">
                Upcoming
              </span>
            </div>

            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How to Build, Launch, and Market Your Web3 Vision.
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-600 mb-6">
              Unlock the secrets to successfully bringing your Web3 projects to
              life. This session is your roadmap to navigating the future of the
              decentralized web.
            </h2>

            <p className="text-gray-700 mb-8">
              📺 We’ll be broadcasting live on{" "}
              <span className="font-semibold">
                X, LinkedIn, Facebook, Instagram, and YouTube.
              </span>
              <p>
                ✨ Follow our channels to get notified and join the
                conversation!
              </p>
              <a
                href="https://linktr.ee/maxtron_innovations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline"
              >
                👉 https://linktr.ee/maxtron_innovations
              </a>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <InfoCard
                icon={<FaCalendarAlt className="w-6 h-6 text-purple-600" />}
                label="Date"
                value="22nd August 2025"
              />
              <InfoCard
                icon={<FaClock className="w-6 h-6 text-purple-600" />}
                label="Time & Duration"
                value="10.00 PM IST"
              />
              <InfoCard
                icon={<FaMapMarkerAlt className="w-6 h-6 text-purple-600" />}
                label="Location"
                value="Virtual Event"
              />
            </div>

            <a
              href="https://lu.ma/ucllnqhl"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-purple-700 hover:bg-purple-800  text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <span>Register Now!</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
            </a>
          </div>

          <div className="w-full xl:w-[450px] flex-shrink-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-white flex items-center justify-center p-8">
            <img
              src={webinar}
              alt="Webinar on Web3 Vision"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
    <div className="bg-purple-100 p-3 rounded-full">{icon}</div>
    <div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="font-bold text-gray-900">{value}</div>
    </div>
  </div>
);

export default Webinar;
