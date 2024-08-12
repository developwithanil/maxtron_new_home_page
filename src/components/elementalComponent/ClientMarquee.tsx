import "react-lazy-load-image-component/src/effects/blur.css";

import Mercedes from "../../../public/client/mercedes.svg";
import Fitburn from "../../../public/client/fitburn.svg";
import Create from "../../../public/client/createProtocol.svg";
import IndiaToday from "../../../public/client/indiaToday.svg";
import Convival from "../../../public/client/convival.svg";
import Uber from "../../../public/client/uber.svg";
// import Cryptonite from "../../../public/client/cryptonite.svg";
import Tenup from "../../../public/client/tenup.svg";
import PmIndia from "../../../public/client/pmIndia.svg";
// import Sc from "../../../public/client/sc.svg";
import Ministry from "../../../public/client/ministry.svg";
import FoodVerse from "../../../public/client/foodVerse.svg";
import GovtHy from "../../../public/client/govtHyryana.svg";

const clients = [
  { name: "Mercedes", logo: Mercedes },
  { name: "Fitburn", logo: Fitburn },
  { name: "Create Protocol", logo: Create },
  { name: "India Today", logo: IndiaToday },
  { name: "Convival", logo: Convival },
  { name: "Uber", logo: Uber },
  // { name: "Cryptonite", logo: Cryptonite },
  { name: "Tenup", logo: Tenup },
  { name: "PM India", logo: PmIndia },
  // { name: "SC", logo: Sc },
  { name: "Ministry", logo: Ministry },
  { name: "FoodVerse", logo: FoodVerse },
  { name: "Govt Haryana", logo: GovtHy },
];

const ClientMarquee = () => {
  return (
    <div className="py-12 my-20">
      <div className="container mx-auto px-4 md:px-20 space-y-4">
        <h2 className="text-center md:mb-4 text-4xl font-bold text-black mb-16">
          Our Clients
        </h2>
        <p className="mb-16 md:mb-12 text-center text-bleck font-OpenSans">
          Driving <span className="font-bold">IMPACT</span> for leading brands
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className=" h-40 w-40 p-2 md:p-4"
                // effect="blur"
                // placeholderSrc={client.logo} // Optional: Placeholder image for better UX
                // threshold={100} // Load images 100px before they are in view
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
