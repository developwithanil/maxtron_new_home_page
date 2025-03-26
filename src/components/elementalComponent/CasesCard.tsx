import { useNavigate } from "react-router-dom";
import img1 from "../../assets/case/case1.png";
import img3 from "../../assets/case/case3.png";
import img2 from "../../assets/case/case2.png";
import img4 from "../../assets/case/case4.png";
import img5 from "../../assets/case/case5.png";
import img6 from "../../assets/case/case6.png";
import img8 from "../../assets/case/case8.png";
import img9 from "../../assets/case/case9.png";
import img10 from "../../assets/case/case10.png";

const caseStudyData = [
  {
    img: img1,
    heading:
      "A gaming platform that allows gamers to earn cryptocurrency by playing on both mobile apps (iOS and Google)...",
    subheading: "Blockchain Game Development",
    type: "APP",
  },
  {
    img: img5,
    heading:
      "Learn how we helped an eCommerce company successfully achieve fast growth...",
    subheading: "E-Commerce Marketing",
    type: "Application",
  },
  {
    img: img4,
    heading: "AI-Enabled Social Networking App For Chefs...",
    subheading: "AI-Enabled Social Networking App For Chefs",
    type: "App",
  },
  {
    img: img8,
    heading:
      "A decentralized AI platform designed to address IP rights compliance...",
    subheading: "Decentralized AI Platform",
    type: "Application",
  },
  {
    img: img6,
    heading: "A NextGen AI-phone calling tool...",
    subheading: "AI-Calling Tool",
    type: "Application",
  },
  {
    img: img3,
    heading: "How we managed to achieve growth for a web3 project...",
    subheading: "Crypto Project Marketing",
    type: "Application",
  },
  {
    img: img2,
    heading:
      "A blockchain solution to ensure anonymity and verifiability in voting...",
    subheading: "Blockchain-Based E-Voting System",
    type: "Application",
  },
  {
    img: img9,
    heading:
      "Good Standing connects organizations and volunteers through tasks and rewards...",
    subheading: "Good Standing",
    type: "Application",
  },
  {
    img: img10,
    heading:
      "Gro8 is a platform connecting investors, mentors, and startup founders...",
    subheading: "Gro8",
    type: "Application",
  },
];

const CasesCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 md:gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {caseStudyData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-[32px] aspect-[5/3] cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={item.img}
                alt={item.subheading}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Type Label */}
            <div className="absolute top-5 left-5 font-semibold bg-[#8952b6] text-lg text-white px-4 py-2 rounded-3xl z-20">
              {item.type}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-row justify-between  items-end p-3 md:p-6 gap-2 md:gap-4 z-10">
              <div className="text-white">
                <p className="text-xl md:text-2xl font-['Switzer'] font-semibold mb-1 md:mb-2">
                  {item.subheading}
                </p>
                <h3 className="text-base md:text-lg font-['Open_Sans_Hebrew'] mb-2 md:mb-4 ">
                  {item.heading}
                </h3>
              </div>

              <button
                className="bg-[#6B2F9C] md:bg-transparent relative -top-6 hover:bg-[#6B2F9C] text-white text-2xl font-extrabold px-4 py-2 rounded-full font-['Switzer'] border-2 border-white  transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(
                    `/Maxtron/${encodeURIComponent(
                      item.subheading.replace(/\s+/g, "-")
                    )}/${index}`
                  );
                }}
              >
                <p>&#8599;</p>
              </button>
            </div>

            {/* Always-visible subheading */}
            <div className="absolute bottom-0 hidden md:block left-0 right-0 group-hover:opacity-0 p-6 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 z-0">
              <h3 className="text-white text-xl md:text-2xl font-['Switzer'] font-semibold line-clamp-2">
                {item.subheading}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <button
  className=" text-white px-5 py-3 rounded-2xl font-['Switzer'] border-2 self-center  border-white font-medium transition-all duration-300 bg-[#8952b6]/60 hover:bg-[#6B2F9C] hover:shadow-lg active:scale-95"
  onClick={(e) => {
    e.stopPropagation();
    alert("Contact Us For More Use Cases")
  }}
>
  View More
</button>

    </div>
  );
};

export default CasesCard;
