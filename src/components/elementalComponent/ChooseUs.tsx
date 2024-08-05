import React from "react";
import Card from "./Card";
import QuickImg from "../../../public/quick.svg";
import GeneratingImg from "../../../public/gnerating.svg";
import SmileImg from "../../../public/smile.svg";
import CuttingImg from "../../../public/cutting.svg";

const cardData = [
  {
    title: "Quick Turnaround Of Situation",
    subtitle: "Title",
    description:
      "We develop deep into your challenges, pinpointing the pains that can hinder growth. Then we tailor solutions are designed to tackle these head-on, paving the way for rapid business acceleration.",
    // icon: <FaMedal className="text-purple-500" />,
    imageUrl: QuickImg,
  },
  {
    title: "Generating Concrete Value",
    subtitle: "Title",
    description:
      "At every business touchpoint, we deliver tangible value through tailored solutions that address specific use cases comprehensively, leaving no gap unaddressed.",
    // icon: <FaLightbulb className="text-purple-500"
    imageUrl: GeneratingImg,
  },
  {
    title: "Approachable And Responsive",
    subtitle: "Title",
    description:
      "We think good communication is super important to make something great. That's why we're easy to talk to, always here when you need us, and quick to respond. Think of us as part of your team, ready to keep the conversation flowing smoothly to make sure we create something amazing together.",
    // icon: <FaUsers className="text-purple-500" />,
    imageUrl: SmileImg,
  },
  {
    title: "Cutting-Edge Products and Passionate Experts",
    subtitle: "Title",
    description:
      "We ensure that you have access to the latest and most advanced tools, techniques, and platforms available to drive your growth forward. Our dedicated team approaches each project with passion and commitment, constantly refining their skills to deliver precisely tuned solutions catering to your needs.",
    // icon: <FaUsers className="text-purple-500" />,
    imageUrl: CuttingImg,
  },
];

const ChooseUs: React.FC = () => {
  return (
    <section
      // style={{ backgroundImage: "url(/gradient-bg.svg)" }}
      className="relative py-12 inset-0 min-h-screen  text-center"
    >
      <div
      // style={{ backgroundImage: "url(/gradient-bg.svg)" }}
      // className=" absolute inset-0 z-30 bg-cover bg-center "
      >
        <div className="p-4 ">
          <h2 className="text-4xl font-bold text-black mb-4">Why Maxtron ?</h2>
          <p className="mb-12 text-[#757575] font-OpenSans">
            We go beyond simply serving the industry; we forge enduring
            relationships built on trust and mutual success.
          </p>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                // icon={card.icon}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
          {/* <div className="mt-8">
          <Link to="/posts" className="text-blackunderline">
            View All Posts &gt;
          </Link>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
