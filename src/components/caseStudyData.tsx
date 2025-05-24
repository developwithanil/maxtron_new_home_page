import study1 from "../assets/study/study1.png"; // Adjust the path as necessary
import study2 from "../assets/study/study2.png"; // Adjust the path as necessary
import study3 from "../assets/study/study3.png"; // Adjust the path as necessary
import study4 from "../assets/study/study4.png"; // Adjust the path as necessary

export const ArrowUpIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
    />
  </svg>
);

export const ArrowDownIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
    />
  </svg>
);

export const ArrowRightIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

interface CaseStudyItem {
  id: string;
  image: string;
  title: string;
  tags: string[];
  description: string;
  learnMoreLink: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "ai-calling",
    image: study1,
    title: "Ai - Calling",
    tags: ["WEB DEVELOPMENT", "UX/UI", "CHAT BOT"],
    description:
      "A NextGen AI-phone calling tool that has been designed to communicate on calls just like humans do.",
    learnMoreLink: "#",
  },
  {
    id: "Token Launch",
    image: study2,
    title: "Token Launch",
    tags: ["Web APPLICATION", "UX/UI ", " MARKETING", "GRAPHIC DESIGN"],
    description:
      "Maxtron successfully helped a blockchain client launch a new cryptocurrency token - covering every aspect of the process: smart contract creation, liquidity deployment, influencer marketing, market making, and web design. The result was a well-orchestrated launch that stood out in a saturated Web3 landscape and gained immediate traction across crypto platforms.",
    learnMoreLink: "#",
  },
  {
    id: "Tawuniya",
    image: study3,
    title: "Tawuniya",
    tags: ["EVENT", "MANAGEMENT"],
    description:
      "Our recent digital activation project done for Tawuniya, an official sponsor of نادي الهلال السعودي - Al-Hilal Saudi Club during the Al-Hilal vs Al-Nassr match in the #Saudi Pro League on 4th April in Riyadh.",
    learnMoreLink: "#",
  },
  {
    id: "ICCA",
    image: study4,
    title: "ICCA",
    tags: ["UX/UI", "CHAT BOT"],
    description:
      "A world-class culinary school shaping the future of hospitality through award-winning training. Based in the heart of Dubai, ICCA empowers aspiring chefs and industry professionals with globally recognized programs, state-of-the-art facilities",
    learnMoreLink: "#",
  },
];
