import { useNavigate } from "react-router-dom";
import img1 from "../../assets/case/case1.png";
import img3 from "../../assets/case/case3.png";
import img2 from "../../assets/case/case2.png";
import img4 from "../../assets/case/case4.png";
import img5 from "../../assets/case/case5.png";
import img6 from "../../assets/case/case6.png";
import img8 from "../../assets/case/case8.png";
import ContactForm from "../ContactForm";
import MoreCaseStudies from "./MoreCaseStudies";
import { useState } from "react";

const caseStudyData = [
  {
    img: img1,
    heading:
      "A gaming platform that allows gamers to earn cryptocurrency by playing on both mobile apps (iOS and Google) and the website",
    subheading: "Blockchain Game Development",
  },
  {
    img: img5,
    heading:
      " Learn how we helped an eCommerce company successfully achieve fast growth with high margins into a new (Direct-To-Consumers) D2C category with flying colors.",
    subheading: "E-Commerce Marketing",
  },
  
 
  {
    img: img4,
    heading:
      "AI-Enabled Social Networking App For Chefs- The world's first AI-enabled App connecting, enabling, and empowering chefs, enthusiasts, and the industry in food.",
    subheading: "AI-Enabled Social Networking App For Chefs",
  },

  // {
  //     img: img7,
  //     heading: 'A mobile app that offers a gamified experience for users to earn rewards while improving their fitness by completing fitness goals.',
  //     subheading: 'AI-Powered Fitness App-',
  // },
  {
    img: img8,
    heading:
      "A decentralized AI platform designed to address the challenge of ensuring intellectual property rights compliance during data usage and AI training.",
    subheading: "Decentralized AI Platform",
  },
  {
      img: img6,
      heading: 'A NextGen AI-phone calling tool that has been designed to communicate on calls just like humans do.',
      subheading: 'AI-Calling Tool',
  },
   {
      img: img3,
      heading: 'How we managed to achieve growth for the web3 project using the right strategies, focused communications, KOLs partnerships, and community initiatives.',
      subheading: 'Crypto Project Marketing',
  },
  {
      img: img2,
      heading: "A comprehensive solution that leverages blockchain's inherent characteristics to ensure anonymity, integrity, accuracy, and verifiability in the voting process.",
      subheading: 'Blockchain-Based E-Voting System',
  },
];

const CaseStudyList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 md:p-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {caseStudyData.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col mb-8 custom_bg_color transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/Maxtron/${industry.subheading.replace(/\s+/g, "-")}/${index}`)}
          >
            <img
              src={industry.img}
              alt={industry.subheading}
              className="w-full object-cover mb-4"
            />
            <b className="mb-2 text-sm md:text-[16px] w-fit p-2 md:p-4 py-0 rounded-lg">
              {industry.subheading}
            </b>
            <p className="p-2 md:p-4 py-4 md:py-8 text-sm">
              {industry.heading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseStudyPage = () => {
  const [showMoreCaseStudies, setShowMoreCaseStudies] = useState(false);

  const handleButtonClick = () => {
    setShowMoreCaseStudies(!showMoreCaseStudies); // Toggle visibility
  };

  return (
    <div>
      <div className="relative z-10 text-center mb-8 caseStudy_hero_img px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Case Studies
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4">
          Explore our case studies showcasing how we’ve leveraged AI,
          blockchain, and advanced marketing techniques across various
          industries. Our innovative tech solutions have enabled clients to
          achieve groundbreaking results, while our strategic sales and
          marketing efforts have driven substantial success and put projects on
          the fast track to growth. Discover how our expertise in cutting-edge
          technology can transform your business.
        </p>
      </div>

      <div className="relative container pt-20  mx-auto p-2 md:p-4">
        <div className="absolute inset-0 opacity-10 z-0"></div>

        <CaseStudyList />
      </div>

      <div className="relative z-10 text-center my-8">
        {!showMoreCaseStudies && (
          <button
            className="border-black border-[4px] text-sm md:text-[16px] font-bold px-5 py-3 rounded-xl"
            onClick={handleButtonClick}
          >
            Request More Case Studies
          </button>
        )}

        {showMoreCaseStudies && (
          <div>
            <MoreCaseStudies setShowMoreCaseStudies={setShowMoreCaseStudies} />
          </div>
        )}
      </div>

      <ContactForm />
    </div>
  );
};

export default CaseStudyPage;
