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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[875px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            {event.isPlaceholder ? (
              <div className="absolute inset-0 w-full h-full bg-[#6d28d9]"></div>
            ) : (
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={event.image!}
                alt={event.title}
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h2 className="font-bold font-switzer text-xl lg:text-2xl xl:text-2xl">
                  {event.title}
                </h2>
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
