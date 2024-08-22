import img1 from "../../assets/industry/industry1.png";
import img2 from "../../assets/industry/industry2.png";
import img3 from "../../assets/industry/industry3.png";
import img4 from "../../assets/industry/industry4.png";
import img5 from "../../assets/industry/industry5.png";
import img6 from "../../assets/industry/industry6.png";
import img7 from "../../assets/industry/industry7.png";
import img8 from "../../assets/industry/industry8.png";

const industryData = [
  {
    img: img1,
    heading: 'Gaming & iGaming',
    points: [
      "Mobile Game Development",
      "PC Game Development",
      "HTML5 Game Development",
      "NFT Game Development",
      "Unity Game Development",
      "Crypto Game Development",
      "AR/VR/MR Game Development",
      "Game Marketing",
    ],
  },
  {
    img: img2,
    heading: 'Banking, Financial Services & Insurance',
    points: [
      "Fintech Software Development",
      "E-Wallet Development",
      "P2P Payment App Development",
      "Crypto Coin/Token Development",
      "Decentralised Finance (DeFi) Development",
      "Digital & Web3 Wallets",
      "Business Enhancement",
    ],
  },
  {
    img: img3,
    heading: 'Food & Beverages',
    points: [
      "IT Consulting",
      "Enterprise Resource Planning (ERP) Software",
      "Supply Chain Management Tool",
      "Customer Relationship Management (CRM) Platform",
      "Custom Product Development & Software Solutions (AI, Blockchain)",
      "AI-Based Analytics",
      "Business Enhancement",
    ],
  },
  {
    img: img4,
    heading: 'Retail & E-Commerce',
    points: [
      "Strategy, Marketing, Branding, Advertising, & Communications",
      "Customer Experience Solutions",
      "UI & UX Design Services",
      "Custom Product Development",
      "Application Managed Services",
      "Applied AI Products & Services",
      "Metaverse Development",
      "Business Enhancement",
    ],
  },
  {
    img: img5,
    heading: 'Supply Chain & Logistics',
    points: [
      "Technology Consulting Solutions",
      "Fleet Management Systems",
      "Warehouse Management Solutions",
      "Custom App Development",
      "Applied AI Products & Services",
    ],
  },
  {
    img: img6,
    heading: 'Sustainable Industry',
    points: [
      "Advanced Data Analytics in Climate Tech",
      "AI-driven Energy Management",
      "Real-time Carbon Footprints Monitoring",
      "Sustainable Digital Transformation",
      "Product Engineering",
      "Business Enhancement",
    ],
  },
  {
    img: img7,
    heading: 'Construction',
    points: [
      "Digital Transformation",
      "Modern Platform Building",
      "Managed IT Services",
      "Cloud Services",
      "Experiential Tech Development",
    ],
  },
  {
    img: img8,
    heading: 'Healthcare & Pharmaceuticals',
    points: [
      "Healthcare Software Solutions",
      "Telemedicine App Development",
      "Healthcare Analytics",
      "Blockchain in Healthcare",
      "AI-powered Diagnostics",
      "Healthcare Information Systems",
    ],
  },
];


const IndustryList = () => {
  return (
    <div className="p-0 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        {industryData.map((industry, index) => (
          <div key={index} className="flex flex-col p-4">
            <img
              src={industry.img}
              alt={industry.heading}
              className="w-106 h-96 object-cover mb-4"
            />
            <h2 className="md:text-2xl font-bold mb-2">{industry.heading}</h2>
            <ul className="list-disc list-inside text-left">
              {industry.points.map((point, idx) => (
                <li key={idx} className="text-gray-700 mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


const Industries = () => {
  return (
    <div>

      <div className="relative z-10  mb-8 text-center industry_hero_img px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          All industries
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4">
          Become Industry leaders by embracing opportunities and being future-ready
        </p>
      </div>

      <div className="relative container mx-auto ">
        <div className="absolute inset-0 opacity-10 z-0"></div>

        <IndustryList  />
      </div>

    </div>
  );
};

export default Industries;
