// import Mercedes from "../../../public/client/mercedes.svg";
// import Fitburn from "../../../public/client/fitburn.svg";
// import Create from "../../../public/client/createProtocol.svg";
// import IndiaToday from "../../../public/client/indiaToday.svg";
// import Convival from "../../../public/client/convival.svg";
// import Uber from "../../../public/client/uber.svg";
// import Cryptonite from "../../../public/client/cryptonite.svg";
// import Tenup from "../../../public/client/tenup.svg";
// import PmIndia from "../../../public/client/pmIndia.svg";
// import Sc from "../../../public/client/sc.svg";
// import Ministry from "../../../public/client/ministry.svg";
// import FoodVerse from "../../../public/client/foodVerse.svg";
// import GovtHy from "../../../public/client/govtHyryana.svg";

// const clients = [
//   { name: "Client 1", logo: Mercedes },
//   { name: "Client 2", logo: Fitburn },
//   { name: "Client 3", logo: Create },
//   { name: "Client 4", logo: IndiaToday },
//   { name: "Client 5", logo: Convival },
//   { name: "Client 6", logo: Uber },
//   { name: "Client 7", logo: Cryptonite },
//   { name: "Client 8", logo: Tenup },
//   { name: "Client 5", logo: PmIndia },
//   { name: "Client 6", logo: Sc },
//   { name: "Client 7", logo: Ministry },
//   { name: "Client 8", logo: FoodVerse },
//   { name: "Client 8", logo: GovtHy },
// ];

// const ClientMarquee = () => {
//   return (
//     <div className="py-12 my-12 ">
//       <div className="container mx-auto px-4 md:px-20 space-y-8">
//         <h2 className="text-4xl text-center font-bold text-black mb-8">
//           Our Clients
//         </h2>
//         <p className="mb-12 text-center text-black font-OpenSans">
//           Driving <span className="font-bold">IMPACT</span> for leading brands
//         </p>
//         <div className=" container flex animate-marquee gap-8">
//           {clients.map((client, index) => (
//             <img
//               key={index}
//               src={client.logo}
//               alt={client.name}
//               className="inline-block h-32 w-60 p-4"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientMarquee;

// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Mercedes from "../../../public/client/mercedes.svg";
import Fitburn from "../../../public/client/fitburn.svg";
import Create from "../../../public/client/createProtocol.svg";
import IndiaToday from "../../../public/client/indiaToday.svg";
import Convival from "../../../public/client/convival.svg";
import Uber from "../../../public/client/uber.svg";
import Cryptonite from "../../../public/client/cryptonite.svg";
import Tenup from "../../../public/client/tenup.svg";
import PmIndia from "../../../public/client/pmIndia.svg";
import Sc from "../../../public/client/sc.svg";
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
  { name: "Cryptonite", logo: Cryptonite },
  { name: "Tenup", logo: Tenup },
  { name: "PM India", logo: PmIndia },
  { name: "SC", logo: Sc },
  { name: "Ministry", logo: Ministry },
  { name: "FoodVerse", logo: FoodVerse },
  { name: "Govt Haryana", logo: GovtHy },
];

const ClientMarquee = () => {
  return (
    <div className="py-12 my-12">
      <div className="container mx-auto px-4 md:px-20 space-y-8">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-black mb-4 md:mb-8">
          Our Clients
        </h2>
        <p className="mb-8 md:mb-12 text-center text-bleck font-OpenSans">
          Driving <span className="font-bold">IMPACT</span> for leading brands
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className=" h-40 w-80 p-2 md:p-4"
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
