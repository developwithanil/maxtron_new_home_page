import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative md:px-28 z-10 flex items-center justify-start w-full h-full bg-white ">
        <div>
          <h1 className="text-[#4E009C] text-4xl font-black">
            Empowering Your Business <br /> with Cutting-Edge Technology.
          </h1>{" "}
          <div className="py-4 space-x-4">
            <button className="bg-[#F9CEC0] p-2 text-[#55308D] rounded-xl">
              Learn More
            </button>
            <button className="bg-[#55308D] p-2 text-[#F5F5F5] rounded-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
