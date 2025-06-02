import map from "../assets/augmentation/map.svg";
import icon1 from "../assets/augmentation/timezone.svg";
import icon2 from "../assets/augmentation/group.svg";
import icon3 from "../assets/augmentation/puzzle.svg";

const items = [
  { text: "Timezone-aligned developers", icon: icon1 },
  {
    text: "Clear communication and English proficiency",
    icon: icon2,
  },
  {
    text: "Cultural fit and agile process readiness",
    icon: icon3,
  },
];

const TimeZone = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:p-5 lg:p-16 xl:p-16 py-5 md:py-7 lg:py-10">
      <div className="flex flex-col-reverse lg:flex-row gap-6 w-full items-stretch">
        <div className="flex-1 flex justify-center items-center lg:h-auto">
          <div className="w-full  h-full bg-[#F5F5F5]">
            <img
              src={map}
              alt="Global presence"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F5] rounded-xl p-4  lg:p-5 flex flex-col items-start gap-2"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg ">
                <img
                  src={item.icon}
                  alt={`Icon for ${item.text}`}
                  className="w-full h-full"
                />
              </div>
              <div className="text-[#2A2A2A] font-[Switzer] font-medium text-base lg:text-lg">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeZone;
