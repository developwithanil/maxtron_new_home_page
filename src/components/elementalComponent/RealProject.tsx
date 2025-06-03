import realproject1 from "../../assets/case/realproject1.svg";
import realproject2 from "../../assets/case/realproject2.svg";
import { Link } from "react-router-dom";

const items = [
    {
     image: realproject1,
     title: "Tokenized Summit Trekking – Mt. Kilimanjaro Web3 Experience",
        description: [
            "Bringing the world's highest freestanding mountain to the blockchain.",
            "Backed by immersive storytelling, digital collectibles, and a DAO-driven model."
        ]
    },
    {
     image: realproject2,
     title: "Decentralized Health Utility – Tokenizing Medical Data for Ownership",
        description: [
            "Users earn crypto by sharing medical data with full control & transparency. ",
            "Built for the future of DeSci & personal health sovereignty."
        ]
    },
]

const RealProject = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto  py-6 md:py-10 lg:py-12 xl:py-16 mt-10 md:mt-12 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6  justify-between">
        {/* Left Section */}
        <div className="lg:col-span-4 flex flex-col gap-3 lg:gap-6 mt-3 md:mt-4 lg:mt-5">
          <h2 className="text-[#2A2A2A] text-start font-[Switzer]  font-bold text-2xl lg:text-3xl xl:text-4xl leading-tight">
            Real Projects We're Backing
          </h2>
          <div>

          <p className="text-[#79748A] text-base md:text-lg lg:text-xl font-openSansHebrew">
            Want to build something radical like this?
          </p>
          <Link to="#" className='self-stretch text-[#7A35C1] font-openSansHebrew text-lg font-normal leading-[160%] underline '>
            We want to hear from you.
          </Link>
          </div>
        </div>
        {/* Right Section: Cards */}
        <div className="lg:col-span-8 w-full">
          <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 w-full">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-0 w-full bg-white border border-[#DFDEE7] rounded-2xl p-4 flex flex-col gap-3 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-xl mb-2"
                />
                <h3 className="font-bold text-lg md:text-xl text-[#2A2A2A] leading-snug font-[Switzer]">
                  {item.title}
                </h3>
                <ul className="list-disc pl-5 text-[#3B3C4A] text-sm md:text-base flex flex-col gap-1 font-openSansHebrew">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealProject