import map from "../../assets/augmentation/map.svg";
import icon1 from "../../assets/augmentation/timezone.svg";
import icon2 from "../../assets/augmentation/group.svg";
import icon3 from "../../assets/augmentation/puzzle.svg";
import pin from "../../assets/augmentation/pin.svg";

const items = [
  { text: "<strong>Timezone-aligned</strong> developers", icon: icon1 },
  {
    text: "<strong>Clear</strong> communication and English <strong>proficiency</strong>",
    icon: icon2,
  },
  {
    text: "<strong>Cultural</strong> fit and <strong>agile</strong> process readiness",
    icon: icon3,
  },
];

const TimeZone = () => {
  return (
    <div className="w-full max-w-[96rem] mx-auto flex flex-col gap-5 md:gap-9 lg:gap-12 px-4 sm:p-5 lg:p-16 xl:p-16 py-5 md:py-7 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
        <div className="flex-1 relative flex   overflow-hidden rounded-xl bg-[#F5F5F5]">
          <img
            src={map}
            alt="Global presence"
            className="absolute inset-0  z-0 opacity-20"
          />
          <img
            src={pin}
            alt="Pin"
            className="absolute top-[16%] left-[80%] w-4 h-6"
          />
          <img
            src={pin}
            alt="Pin"
            className="absolute top-[25%] left-[90%] w-4 h-6"
          />
          <img
            src={pin}
            alt="Pin"
            className="absolute top-[40%] left-[85%] w-4 h-6"
          />
          <img
            src={pin}
            alt="Pin"
            className="absolute top-[45%] left-[75%] w-4 h-6"
          />
          <img
            src={pin}
            alt="Pin"
            className="absolute top-[62%] left-[82%] w-4 h-6"
          />

          <div className="relative z-10 p-4 sm:p-8 md:p-8 max-w-[85%]">
            <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-[#2A2A2A] mb-4 leading-tight">
              Global Delivery <span className="italic font-normal">With</span>
              <br />
              <span className="italic font-normal">Local Sensitivity</span>
            </h2>
            <p className="text-[#2A2A2A] text-[14px] sm:text-base  max-w-[85%]">
              From{" "}
              <strong>
                India's top tech hubs (Bangalore, Pune, Noida, Hyderabad)
              </strong>{" "}
              to global clients across the{" "}
              <strong>US, UK, MENA, and Australia</strong>, our model ensures
              you get:
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1 order-2 lg:order-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F5] rounded-xl p-4 lg:p-5 flex flex-col items-start gap-2"
            >
              <div className="flex items-center justify-center w-8 h-8">
                <img
                  src={item.icon}
                  alt={`Icon for ${item.text}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className="text-[#2A2A2A] font-[Switzer] font-medium text-base lg:text-lg"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeZone;
