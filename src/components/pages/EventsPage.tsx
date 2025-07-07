import React from "react";
import EventsList, { EventType } from "../elementalComponent/EventsList";
import EventsLastComponent from "../elementalComponent/EventsLastComponent";

import eventSpace from "../../assets/events/eventSpace.webp";
import token2049Img from "../../assets/events/tokendate.webp";
import consensusImg from "../../assets/events/ConsensusHongKong.webp";
import miamiNftImg from "../../assets/events/MiamiNFTWeek.webp";
import artBaselImg from "../../assets/events/artbasel.webp";
import nftNycImg from "../../assets/events/nftNycImg.webp";
import futuristImg from "../../assets/events/futuristconference.webp";

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
      title: "Art Basel",
      date: "June 2024",
      image: artBaselImg,
      isPlaceholder: false,
    },
    {
      id: 4,
      title: "NFT NYC",
      date: "June 2024",
      image: nftNycImg,
      isPlaceholder: false,
    },
    {
      id: 5,
      title: "Futurist Conference",
      date: "May 2024",
      image: futuristImg,
      isPlaceholder: false,
    },
    {
      id: 6,
      title: "Miami NFT Week",
      date: "April 2024",
      image: miamiNftImg,
      isPlaceholder: false,
    },
  ];

  const realEventImages = eventsData.filter((event) => !event.isPlaceholder);

  return (
    <div className="w-full max-w-[96rem] mx-auto py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
      <div
        className="w-full flex flex-col lg:flex-row mx-auto justify-between items-center p-4 sm:p-8 md:p-12 lg:p-16 gap-6 sm:gap-10 bg-cover bg-no-repeat bg-[center_10%]"
        style={{
          backgroundImage: `url(${eventSpace})`,
        }}
      >
        <div className="w-full   mt-12 flex flex-col gap-2 md:gap-4">
          <p className="text-white font-['Switzer'] text-3xl sm:text-6xl md:text-8xl lg:text-8xl font-bold tracking-tight">
            EVENT SPACE
          </p>
        </div>
      </div>

      <div className="w-full max-w-[96rem] mx-auto py-8 px-8 lg:px-16 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="md:w-[60%]">
          <h2 className="text-black font-openSansHebrew text-lg lg:text-xl font-normal mb-8">
            Maxtron turns global events into strategic playgrounds raising
            funds, showcasing digital art, and activating bold client campaigns.
            From NFT exhibits at Art Basel to investor wins at Token2049, we use
            every stage to transform ideas into real-world impact.
          </h2>
          <a href="https://experiences.maxtron.ai/" className="inline-block">
            <button className="bg-[#7A35C1] text-white px-4 py-3 rounded-lg font-semibold hover:bg-violet-500 transition-colors flex items-center gap-2">
              Experience Tech
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7105 7.22694V14.9167C17.7105 15.1653 17.6117 15.4038 17.4359 15.5796C17.2601 15.7554 17.0216 15.8542 16.773 15.8542C16.5244 15.8542 16.2859 15.7554 16.1101 15.5796C15.9343 15.4038 15.8355 15.1653 15.8355 14.9167V9.49044L7.89038 17.4356C7.71428 17.6101 7.47621 17.7077 7.22828 17.7072C6.98036 17.7066 6.74275 17.6078 6.56746 17.4325C6.39217 17.2571 6.29348 17.0195 6.29297 16.7716C6.29246 16.5237 6.39019 16.2856 6.56475 16.1096L14.5103 8.16406H9.08363C8.83499 8.16406 8.59653 8.06529 8.42072 7.88948C8.2449 7.71366 8.14613 7.4752 8.14613 7.22656C8.14613 6.97792 8.2449 6.73947 8.42072 6.56365C8.59653 6.38783 8.83499 6.28906 9.08363 6.28906H16.773C16.8347 6.28927 16.8963 6.29555 16.9568 6.30781C16.9856 6.31306 17.0123 6.32394 17.04 6.33219C17.1064 6.34665 17.1696 6.37322 17.2264 6.41056C17.2485 6.42294 17.2714 6.43231 17.2928 6.44656C17.3958 6.51534 17.4842 6.60378 17.553 6.70681C17.5676 6.72856 17.5774 6.75219 17.5901 6.77506C17.6271 6.83167 17.6534 6.89459 17.6678 6.96069C17.676 6.98844 17.6865 7.01469 17.6921 7.04319C17.7044 7.10355 17.7106 7.16497 17.7109 7.22656L17.7105 7.22694Z"
                  fill="white"
                />
              </svg>
            </button>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {" "}
          {realEventImages.slice(0, 3).map((event) => (
            <img
              key={event.id}
              src={event.image!}
              alt={event.title}
              className="w-32 h-48 object-cover rounded-lg shadow-md hover:scale-[1.02] hover:shadow-xl"
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[96rem] mx-auto py-12 px-8 lg:px-16">
        <EventsList events={eventsData} />
        <EventsLastComponent />
      </div>
    </div>
  );
};

export default EventsPage;
