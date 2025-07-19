import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import ourteamrightimage from "../../assets/case/ourteamrightimage.webp";
import gro8 from "../../assets/case/gro8.webp";
import bitangels from "../../assets/case/bitangels.webp";
import leventiscapital from "../../assets/case/leventiscapital.webp";
import agnix from "../../assets/case/agnix.webp";
import prashant from "../../assets/case/prashant.webp";
import hui from "../../assets/case/hui.webp";
import ridha from "../../assets/case/ridha.webp";
import craig from "../../assets/case/craig.webp";
import riddhi from "../../assets/case/riddhi.webp";
import ishan from "../../assets/case/ishan.webp";
import aman from "../../assets/case/aman.webp";
import vc from "../../assets/case/888vc.webp";
import team from "../../assets/case/team.webp";
import TeamLastComponent from "../elementalComponent/TeamLastComponent";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';

const items = [
  {
    title: "Gro8 CLUB",
    description: "Investment Platform",
    image: gro8,
  },
  {
    title: "888vc",
    description: "VC Syndicate",
    image: vc,
  },
  {
    title: "BitAngels",
    description: "Angel Network",
    image: bitangels,
  },
  {
    title: "Leventis Captial DIFC",
    description: "Desc",
    image: leventiscapital,
  },
  {
    title: "AgniX Capital",
    description: "Investment Group",
    image: agnix,
  },
];
const teams = [
  {
    title: "Hue H. Nguyễn",
    designation: "Regulatory & Compliance Advisor",
    image: hui,
    details: [
      "Ex- U.S. SEC",
      "Pricewaterhouse Regulatory Group",
      "Former COO of Investment Management",
      "Influential Expertise in TradFi, DeFi, SEC Regulation",
      "25+ years Experience"
    ]
  },
  {
    title: "Ridha Agarwal",
    designation: "Web3 Product Leader",
    image: ridha,
    details: [
      "5+ Years in Scaling Web3 Innovative Products",
      "Leading Tech Communities (Web3 & AI)",
      "Expanded Products to US, UAE, Europe & Asian Markets",
      "Ex- Founding Team: Create Protocol & Healaverse"
    ]
  },
  {
    title: "Craig Henderson",
    designation: "Crypto Exchange Specialist",
    image: craig,
    details: [
      "Listings Manager on top-tier crypto exchanges",
      "Advisor to multiple Web3 startups across DeFi and GameFi",
      "Expert in exchange strategy, token lifecycle, and community development",
      "Led exchange negotiations, KOL outreach, and ambassador programs"
    ]
  },
  {
    title: "Prashant",
    designation: "Co-Founder & Partner",
    image: prashant,
    details: [
      "Partner (Serial Entrepreneur)",
      "Technology & Product",
      "Selected at Draper University, Summer Program (USA)",
      "Inter IIT Technology Meet: Gold Medalist"
    ]
  },
  {
    title: "Aman Shah",
    designation: "Web3 Solutions Expert",
    image: aman,
    details: [
      "Web3 Solutions Development Expert",
      "HPE & Blockchain Startup",
      "Scalable, agile solution builder.",
      "Blends corporate and startup strengths."
    ]
  },
  {
    title: "Ishan Dwivedi",
    designation: "Design Manager & Lead",
    image: ishan, 
    details: [
      "Product & UI/UX",
      "Led 100+ UI/UX Projects Globally",
      "Experienced in user research, prototyping and creating engaging interfaces"
    ]
  },
  {
    title: "Riddhi Jaiswal",
    designation: "Project Manager & Lead",
    image: riddhi,
    details: [
      "Project Manager & Lead",
      "Led 50+ Web3 Projects",
      "Ex Wipro, Ex Swayatt Robots"
    ]
  }
];

const OurTeam = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Team | Maxtron</title>
        <meta name="description" content="Meet the Maxtron team: experts in blockchain, AI, product, and marketing, driving innovation and business growth." />
        <link rel="canonical" href="https://www.maxtron.ai/our-team" />
        <meta property="og:title" content="Our Team | Maxtron" />
        <meta property="og:description" content="Meet the Maxtron team: experts in blockchain, AI, product, and marketing, driving innovation and business growth." />
        <meta property="og:image" content="https://www.maxtron.ai/src/assets/MaxtronLogo.png" />
        <meta property="og:url" content="https://www.maxtron.ai/our-team" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="w-full">
        <div className="w-full max-w-[96rem] mx-auto pl-5 sm:pl-6 md:pl-14 xl:pl-16 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 ">
          <div className="flex flex-row gap-7">
            <div className="w-[32%] hidden lg:flex flex-col justify-start items-start">
              <img
                src={ourteamrightimage}
                alt="Affiliate team"
                className="w-full h-[25rem] lg:h-[27rem] xl:h-[34rem] object-fit"
              />
            </div>

            <div className="flex-1 flex items-start pr-0">
              <img
                src={affiliaterightlanding}
                alt="Affiliate team"
                className="w-full h-full  lg:h-[27rem] xl:h-[34rem] object-fit filter grayscale"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start">
            {/* Left Section - Heading and Paragraph */}
            <div className="w-full text-left ">
              <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start">
                Our Partners
              </h1>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 xl:grid-cols-4 gap-7 lg:gap-8 justify-start items-start">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col items-start ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 md:w-36 lg:w-40 xl:w-44 h-32 md:h-36 lg:h-40 xl:h-44 object-contain rounded-md"
                  />
                  <p className="text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl font-semibold text-left mt-3">
                    {item.title}
                  </p>
                  <p className="text-xl lg:text-2xl text-[#363348] text-left mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full  mt-9 md:mt-14 lg:mt-20 xl:mt-24 pr-4 md:pr-6 lg:pr-10 ">
            <img
              src={team}
              alt={"team"}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start">
            <div className="w-full text-left ">
              <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl font-bold leading-[140%] text-center">
                About The Founder
              </h1>
            </div>

            <div className="w-full flex justify-center">
              <div
                className="relative flex flex-col items-center bg-white rounded-3xl shadow-3xl p-8 md:p-14 max-w-xl w-full mx-auto border border-violet-100 founder-card"
                style={{
                  background:
                    'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
                }}
              >
                {/* Animated Glowing Gradient Border */}
                <div className="relative mt-2 mb-4">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a084e8] via-[#58269A] to-[#a084e8] blur-xl opacity-70 animate-pulse z-10" />
                  <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-xl bg-white z-10 founder-img-glow">
                    <img
                      src="/girish.webp"
                      alt="Girish Ahirwar"
                      className="object-cover w-full h-full rounded-full border-4 border-[#a084e8] shadow-lg animate-fadeIn"
                    />
                  </div>
                </div>
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#a084e8] via-[#58269A] to-[#a084e8] mb-3 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-1 text-[#58269A] text-center tracking-tight drop-shadow-lg">
                  Girish Ahirwar
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-[#7c3aed] text-center mb-2">
                  CEO & Founder
                </p>
              
                <ul className="flex flex-col gap-2 text-base md:text-lg text-gray-800 w-full max-w-md mx-auto mb-4 mt-4">
                  <li className="flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2"><span className="text-[#7c3aed] mt-1">✔️</span> Partner & Ex- CBO Tagbin</li>
                  <li className="flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2"><span className="text-[#7c3aed] mt-1">✔️</span> Pitched, Won & Delivered Digital & Experiential Projects Worth $500mn+</li>
                  <li className="flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2"><span className="text-[#7c3aed] mt-1">✔️</span> Fundraising And Partnerships</li>
                  <li className="flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2"><span className="text-[#7c3aed] mt-1">✔️</span> IIT Roorkee</li>
                  <li className="flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2"><span className="text-[#7c3aed] mt-1">✔️</span> 10+ Years Experience in Emerging Tech</li>
                </ul>
                <blockquote className="italic text-center text-gray-500 text-lg border-l-4 border-[#a084e8] pl-4 mt-2">
                  "Innovation is not just about technology, it's about creating impact."
                </blockquote>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start">
            {/* Left Section - Heading and Paragraph */}
            <div className="w-full text-left ">
              <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start">
                Our Team
              </h1>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 justify-start items-start">
              {teams.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 group cursor-pointer overflow-hidden team-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-violet-300 border border-transparent"
                  style={{
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
                  }}
                  onClick={() => setSelected(index)}
                >
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#58269A] to-[#a084e8] opacity-10 rounded-full z-0 group-hover:opacity-20 transition-all duration-300" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-full border-4 border-violet-200 shadow-md z-10 group-hover:scale-110 transition-transform duration-300 team-img-glow"
                  />
                  <p className="text-[#58269A] font-[Switzer] text-xl lg:text-2xl font-bold text-center mt-4 z-10">
                    {item.title}
                  </p>
                  <p className="text-[#7c3aed] text-base lg:text-lg font-medium text-center mt-1 z-10">
                    {item.designation}
                  </p>
                  <button
                    className="mt-4 px-5 py-2 bg-gradient-to-r from-[#58269A] to-[#a084e8] text-white rounded-full font-semibold shadow hover:from-[#6d3bbd] hover:to-[#b39ddb] transition-all duration-300 scale-100 group-hover:scale-105 group-hover:shadow-lg"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
            <AnimatePresence>
              {selected !== null && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelected(null)}
                >
                  <motion.div
                    className="bg-white rounded-3xl shadow-2xl p-0 max-w-md w-full relative overflow-hidden animate-fadeIn"
                    initial={{ scale: 0.7, opacity: 0, y: 80 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.7, opacity: 0, y: 80 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="w-full h-32 bg-gradient-to-r from-[#58269A] to-[#a084e8] flex items-center justify-center relative">
                      <img
                        src={teams[selected].image}
                        alt={teams[selected].title}
                        className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 bg-white animate-fadeIn"
                      />
                      <button
                        className="absolute top-3 right-3 text-3xl text-white bg-black bg-opacity-20 hover:bg-opacity-40 rounded-full w-10 h-10 flex items-center justify-center leading-none  transition-all z-30 aspect-square"
                        onClick={() => setSelected(null)}
                        aria-label="Close"
                      >
                        <span className="flex items-center text-center justify-center w-full h-full">&times;</span>
                      </button>
                    </div>
                    <div className="pt-16 pb-8 px-8">
                      <h2 className="text-2xl font-bold text-center mb-1 text-[#58269A]">
                        {teams[selected].title}
                      </h2>
                      <p className="text-lg font-semibold text-center text-[#7c3aed] mb-4">
                        {teams[selected].designation}
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-left text-gray-700">
                        {teams[selected].details.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <TeamLastComponent />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
