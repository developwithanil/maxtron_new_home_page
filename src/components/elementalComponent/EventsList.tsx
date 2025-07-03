import React from "react";

export interface EventType {
  id: number;
  title: string;
  date: string;
  image: string | null;
  isPlaceholder: boolean;
}

interface EventsListProps {
  events: EventType[];
}

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <div className="w-full">
      <h1 className="font-switzer font-bold text-5xl sm:text-6xl text-black mb-12">
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl  overflow-hidden flex flex-col"
          >
            <div className={`w-full h-full`}>
              {event.isPlaceholder ? (
                <div className="w-full h-full bg-[#6d28d9]"></div>
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src={event.image!}
                  alt={event.title}
                />
              )}
            </div>
            <div className="p-4">
              <div className="p-4 -mt-32 bg-white rounded-lg">
                <h3 className="font-bold font-switzer text-2xl">
                  {event.title}
                </h3>
                <p className="text-[#2A2A2A] mt-1 text-base font-switzer">
                  {event.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
