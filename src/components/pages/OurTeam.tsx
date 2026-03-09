import affiliaterightlanding from "../../assets/case/affiliaterightlanding.webp";
import ourteamrightimage from "../../assets/case/ourteamrightimage.webp";
import gro8 from "../../assets/case/gro8.webp";
import bitangels from "../../assets/case/bitangels.webp";

import prashant from "../../assets/case/prashant.webp";
import hui from "../../assets/case/hui.webp";
import ridha from "../../assets/case/ridha.webp";
import girish from "/girish.webp";
import craig from "../../assets/case/craig.webp";
import riddhi from "../../assets/case/riddhi.webp";
import ishan from "../../assets/case/ishan.webp";
import harshita from "../../assets/case/harshita.webp";
import laxmi from "../../assets/case/laxmi.webp";
import anil from "../../assets/case/anil.webp";
import kamal from "../../assets/case/kamal.webp";
import garvit from "../../assets/case/garvit.webp";
import mahesh from "../../assets/case/mahesh.webp";
import paras from "../../assets/case/paras.webp";
import boby from "../../assets/case/boby.webp";
import mehak from "../../assets/case/mehak.webp";

import dog from "../../assets/case/dog.webp";
import geeta from "../../assets/case/geeta.webp";
import pooran from "../../assets/case/pooran.webp";
import rishikesh from "../../assets/case/rishikesh.webp";
import trish from "../../assets/case/trish.webp";
import vc from "../../assets/case/888vc.webp";
import team from "../../assets/case/team.webp";
import TeamLastComponent from "../elementalComponent/TeamLastComponent";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { AiFillLinkedin } from "react-icons/ai";

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
  // {
  //   title: "Leventis Captial DIFC",
  //   description: "",
  //   image: leventiscapital,
  // },
  // {
  //   title: "AgniX Capital",
  //   description: "Investment Group",
  //   image: agnix,
  // },
];
const teams = [
  {
    title: "Girish Ahirwar",
    subtitle: "General Partner",
    designation: "CEO & Founder",
    image: girish,
    details: [
      "Partner & Ex-CBO, Tagbin",
      "Pitched, won, and delivered digital & experiential projects worth $500mn+",
      "Fundraising and partnerships",
      "10+ years of experience in emerging tech",
      "IIT Roorkee"
    ],
    linkedin: "https://www.linkedin.com/in/girish-ahirwar/"
  },
  {
    title: "Hue H. Nguyễn",
    subtitle: "General Partner",
    designation: "Regulatory & Compliance",
    image: hui,
    details: [
      "Ex-U.S. SEC",
      "Pricewaterhouse Regulatory Group",
      "Former CCO of Investment Management",
      "Influential expertise in TradFi, DeFi, and SEC regulation",
      "25+ years of experience"
    ],
    linkedin: "https://www.linkedin.com/in/hue-h-nguyen-7027852/"
  },
  {
    title: "Robert D. Sudon",
    subtitle: "General Partner",
    designation: "Business & Strategy",
    image: boby,
    details: [

      "Business & sales strategist across multiple industries",
      "Scaled family office and construction ventures",
      "Architect-minded industry leader",
      "Growth-focused and deal-driven professional"
    ],
    linkedin: ""
  },
  {
    title: "Prashant",
    designation: "Co-Founder & Partner",
    image: prashant,
    details: [
      "Partner (serial entrepreneur)",
      "Technology and product",
      "Selected at Draper University Summer Program (USA)",
      "Inter IIT Technology Meet: Gold medalist"
    ],
    linkedin: "https://www.linkedin.com/in/prashant-kumar-939327ab/"
  },
   {
    title: "Ridha Agarwal",
    designation: "Web3 Product Leader",
    image: ridha,
    details: [
      "5+ years of experience in scaling innovative Web3 products",
      "Leading tech communities (Web3 & AI)",
      "Expanded products to US, UAE, Europe, and Asian markets",
      "Ex-founding team: Create Protocol & Healaverse"
    ],
    linkedin: "https://www.linkedin.com/in/ridha-agarwal-549ba9187/"

  },
  {
    title: "Pooran Singh",
    designation: "Partner",
    image: pooran,
    details: [
      "20+ years in government infrastructure & procurement",
      "Former Advisor in Ministry of Finance (GoI)",
      "Expert in public-private partnerships & regulatory strategy",
      "Guides Maxtron’s smart city and clean energy initiatives",
      "Key advisor for government relations in India and Africa",
    ],
    linkedin: "https://www.linkedin.com/in/pooran-singh-ahirwar-409b0932/"
  },
  {
    title: "Trish Kane",
    designation: "Director of Business, USA",
    image: trish,
    details: [
      "20+ Years Disruptive Technologies, Sales & Startups",
      "Tech & Motivational Keynote Speaker",
      "Ex: Wall Street, Aflac & Informa Tech",
      "3.5 years CTO & Project Manager, Healerverse (2022-2025)",
      "Awarded Woman of the Year Web3 & Tech, 2024, UAE"
    ],
    linkedin: "https://www.linkedin.com/in/trishmkane"
  },
  {
    title: "Rishikesh Trivedi",
    designation: "Director of Business, MENA Region",
    image: rishikesh,
    details: [
      "Market acceleration specialist and investor with 20+ years of experience driving global growth",
      "Co-founder of Enabler ONE",
      "President at SCLG ExCom",
      "Managing Partner at 888vc and strategy advisor at PitchMatter"
    ],
    linkedin: "https://www.linkedin.com/in/rishikeshtrivedi/"
  },

 
 
  {
    title: "Geeta Vali",
    designation: "Partner",
    image: geeta,
    details: [

    ],
    linkedin: ""
  },
   {
    title: "Riddhi Jaiswal",
    designation: "Project Manager & Lead",
    image: riddhi,
    details: [
      "Led technology projects across USA, Dubai, India and Asian markets",
      "Specialized in Blockchain, AI, Healthcare, Finance, and Trading platform solutions",
      "Ex Wipro, Ex Swayatt Robots"
    ],
    linkedin: "https://www.linkedin.com/in/ritz-jais/"
  },
  {
    title: "Laxmi Pandey",
    designation: "Head of Marketing & Operations",
    image: laxmi,
    details: [
      "Operations Lead managing 360°",
      "Penetrated North American, Europe & Middle-East Geographies",
      "8+ Years Experience in Management",

    ],
    linkedin: "https://www.linkedin.com/in/pandey-laxmi-183061260/"
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
    ],
    linkedin: "https://www.linkedin.com/in/craig-henderson-5a7509bb/"
  },

  // {
  //   title: "Aman Shah",
  //   designation: "Web3 Solutions Expert",
  //   image: aman,
  //   details: [
  //     "Web3 Solutions Development Expert",
  //     "HPE & Blockchain Startup",
  //     "Scalable, agile solution builder.",
  //     "Blends corporate and startup strengths."
  //    ],
  //   linkedin:"https://www.linkedin.com/in/shah-aman/"
  // },
  {
    title: "Ishan Dwivedi",
    designation: "Design Manager & Lead",
    image: ishan,
    details: [
      "Product & UI/UX",
      "Led 100+ UI/UX Projects Globally",
      "Experienced in user research, prototyping and creating engaging interfaces"
    ],
    linkedin: "https://www.linkedin.com/in/ishan-dwivedi-2021a9376"
  },
 
  {
    title: "Kamal Nayan",
    designation: "Tech Lead",
    image: kamal,
    details: [
      "Leading scalable Web2 & Web3 systems",
      "Building secure blockchain & smart contract solutions",
      "Developing AI-driven automation systems",
      "Engineering embedded hardware solutions",
      "Managing cybersecurity & server infrastructure",
    ],
    linkedin: "https://www.linkedin.com/in/saka015/"
  },
  {
    title: "Anil Kumar",
    designation: "Mobile Application Expert (iOS & Android)",
    image: anil,
    details: [
      "Led end-to-end mobile app strategy from concept to global launch",
      "Specialized in cross-platform technologies, cloud integration and system optimization",
      "Driving seamless, secure and user-centric mobile experiences",
      "Architected scalable, high-performance mobile platforms",
    ],
    linkedin: "https://www.linkedin.com/in/anil-kumar-668324273/"
  },
  {
    title: "Mehak Gaur",
    designation: "Head of Technical Operations",
    image: mehak,
    details: [
      "Leading cross-functional tech execution and delivery",
      "Overseeing product development & sprint planning",
      "Aligning engineering with business and growth goals",
      "Managing task delegation, timelines, and workflows",
      "Ensuring smooth deployment, infrastructure & performance",
    ],
    linkedin: "https://www.linkedin.com/in/mehak-45a190245/"
  },

  {
    title: "Mahesh Tripathi",
    designation: "Mobile App Expert (iOS & Android)",
    image: mahesh,
    details: [
      "Senior Flutter (Android & iOS) developer with Native Android app development skills",
      "Proficient in integrating AI tools into applications",
      "Skilled in making automation using AI agents"
    ],
    linkedin: "https://www.linkedin.com/in/maheshtripathimail1"
  },
   {
    title: "Harshita Kaushik",
    designation: "Business Analyst",
    image: harshita,
    details: [
      "Strategic Execution Arm of the Founder",
      "Cross-Functional Coordination & Decision Support",
      "Growth, Partnerships & Special Projects",
      "Governance, Reporting & Operational Excellence",
     
    ],
    linkedin: "https://www.linkedin.com/in/harshita-kaushik-6726a6279/"
  },
  {
    title: "Paras ",
    designation: "AI Marketer & Creator",
    image: paras,
    details: [
      "Edits videos in minutes with automated cuts, captions and transitions",
      "Detects highlights, removes silences, and optimizes pacing automatically",
      "Generates subtitles, voiceovers, and effects using AI tools",
      "Managing task delegation, timelines, and workflows",
      "Cost-effective and scalable for bulk content production",
    ],
    linkedin: "https://www.linkedin.com/in/paras-sharma-59462b395/"
  },
 
  // {
  //   title: "Crypto",
  //   designation: "Chief Happiness Officer",
  //   image: dog,
  //   details: [
  //     "He may not write code, but he debugs stress better than anyone.",
  //     "His playful presence brings smiles, laughter, and a stress-free atmosphere",
  //     "Crypto reminds us to enjoy the little moments."
  //   ],
  //   linkedin: ""
  // }
];

const OurTeam = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Team | Maxtron</title>
        <meta name="description" content="Meet the Maxtron team: experts in blockchain, AI, product, and marketing, driving innovation and business growth." />
        <link rel="canonical" href="https://www.maxtron.ai/our-team" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
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
         
          <div className="w-full  mt-9 md:mt-14 lg:mt-20 xl:mt-24 pr-4 md:pr-6 lg:pr-10 ">
            <img
              src={team}
              alt={"team"}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* === TOP 3 FOUNDER CARDS === */}
          <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start">
            <div className="w-full text-left">
              <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl font-bold leading-[140%] text-center">
                Leadership
              </h1>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {teams.slice(0, 3).map((member, idx) => (
                <div className="w-full flex justify-center" key={idx}>
                  <div
                    className="relative flex flex-col items-center bg-white rounded-3xl shadow-3xl p-4 md:p-6 lg:p-7 max-w-xl w-full mx-auto border border-violet-100 founder-card h-full"
                    style={{
                      background:
                        'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
                    }}
                  >
                    {/* Animated Glowing Gradient Border */}
                    <div className="relative mt-2 mb-3">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a084e8] via-[#58269A] to-[#a084e8] blur-xl opacity-70 animate-pulse z-10" />
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 flex items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-xl bg-white z-10 founder-img-glow">
                        <img
                          src={member.image}
                          alt={member.title}
                          className="object-cover w-full h-full rounded-full border-4 border-[#a084e8] shadow-lg animate-fadeIn"
                        />
                      </div>
                    </div>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#a084e8] via-[#58269A] to-[#a084e8] mb-3 animate-pulse" />
                    <h2 className="text-2xl sm:text-3xl  lg:text-3xl xl:text-4xl font-extrabold mt-2 mb-1 text-[#58269A] text-center tracking-tight drop-shadow-lg">
                      {member.title}
                    </h2>
                    <h2 className="text-xl sm:text-2xl  lg:text-2xl xl:text-3xl font-medium mt-2 mb-1 text-[#58269A] text-center tracking-tight drop-shadow-lg">
                      {member.subtitle}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#7c3aed] text-center mb-2">
                      {member.designation}
                    </p>

                    <ul className="flex flex-col gap-1 text-sm sm:text-base md:text-sm lg:text-base text-gray-800 w-full max-w-md mx-auto mb-4 mt-4">
                      {member.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 bg-[#f3e8ff] rounded-lg px-3 py-2">
                          <span className="text-[#7c3aed] mt-1 shrink-0">✔️</span> {detail}
                        </li>
                      ))}
                    </ul>

                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4">
                        <AiFillLinkedin className="w-8 h-8 text-[#0A66C2] hover:opacity-80 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <div className="w-full flex flex-col gap-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20 pr-4 md:pr-5 lg:pr-10 items-start">
           
            <div className="w-full text-left ">
              <h1 className="text-[#2A2A2A] font-[Switzer] text-4xl lg:text-5xl xl:text-5xl mb-3 lg:mb-5 xl:mb-6 font-bold leading-[140%] text-start">
                Our Team and Partners
              </h1>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 justify-start items-stretch">
              {teams.slice(3).map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 group cursor-pointer overflow-hidden team-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-violet-300 border border-transparent h-full"
                  style={{
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
                  }}
                  onClick={() => setSelected(index + 3)}
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
                  <div className="flex items-center gap-3 mt-auto pt-4 z-10">
                    <button
                      className="px-5 py-2 bg-gradient-to-r from-[#58269A] to-[#a084e8] text-white rounded-full font-semibold shadow hover:from-[#6d3bbd] hover:to-[#b39ddb] transition-all duration-300 scale-100 group-hover:scale-105 group-hover:shadow-lg"
                    >
                      Read More
                    </button>

                  </div>
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
                      <ul className="list-disc pl-5 space-y-1 text-left text-gray-700">
                        {teams[selected].details.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      {teams[selected].linkedin && (
                        <div className="flex justify-center mt-4">
                          <a href={teams[selected].linkedin} target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin className="w-8 h-8 text-[#0A66C2] hover:opacity-80 transition-opacity" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
           <div className="w-full flex flex-col gap-8 mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-4 md:pr-5 lg:pr-10 items-start">
           
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

          <TeamLastComponent />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
