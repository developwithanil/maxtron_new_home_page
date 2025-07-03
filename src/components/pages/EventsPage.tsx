import React from "react";
import EventsList, { EventType } from "../elementalComponent/EventsList";

import eventSpace from "../../assets/events/eventSpace.png";
import token2049Img from "../../assets/events/tokendate.png";
import consensusImg from "../../assets/events/ConsensusHongKong.png";
import miamiNftImg from "../../assets/events/MiamiNFTWeek.png";

const EventsPage: React.FC = () => {
  const eventsData: EventType[] = [
    {
      id: 1,
      title: "Token 2049 Dubai",
      date: "March 2025",
      image: token2049Img,
      isPlaceholder: false,
    },
    {
      id: 2,
      title: "Consensus Hong Kong",
      date: "February 2025",
      image: consensusImg,
      isPlaceholder: false,
    },
    {
      id: 3,
      title: "Miami NFT Week",
      date: "April 2024",
      image: miamiNftImg,
      isPlaceholder: false,
    },
  ];

  const realEventImages = eventsData.filter((event) => !event.isPlaceholder);

  return (
    <div className="bg-white">
      <div
        className="w-full flex flex-col items-start p-8 md:p-12 lg:p-24"
        style={{
          background: `url(${eventSpace}) center/cover no-repeat`,
          minHeight: "50vh",
        }}
      >
        <p className="text-white font-['Switzer'] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mt-12">
          EVENT SPACE
        </p>
      </div>

      <div className="w-full max-w-[96rem] mx-auto py-12 px-8 lg:px-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="md:w-[60%]">
          <h2 className="text-black font-openSansHebrew text-lg lg:text-xl font-normal mb-8">
            Lorem ipsum dolor sit amet consectetur. Feugiat nibh magnis neque ut
            facilisi gravida cras. Egestas nisi metus id id nibh senectus.
            Porttitor turpis cursus ipsum enim blandit venenatis.
          </h2>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Experience Tech
          </button>
        </div>

        <div className="md:w-[40%] flex gap-4 overflow-hidden justify-center">
          {realEventImages.map((event) => (
            <img
              key={event.id}
              src={event.image!}
              alt={event.title}
              className="w-36 h-full object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[96rem] mx-auto py-12 px-8 lg:px-16">
        <EventsList events={eventsData} />
      </div>
    </div>
  );
};

export default EventsPage;
