const services = [
  {
    title: "Web3 Custom Solutions",
    description: "Building scalable blockchain solutions...",
    points: ["Blockchain Development", "Smart Contracts", "DApps", "Security"],
    image: "url-to-your-image-1",
  },
  {
    title: "Applied AI Products & Services",
    description: "Innovative AI solutions for businesses...",
    points: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Consulting",
    ],
    image: "url-to-your-image-2",
  },
  {
    title: "Experiential Development",
    description: "Creating immersive experiences...",
    points: [
      "AR/VR Solutions",
      "Metaverse Development",
      "Gamification",
      "Interactive Content",
    ],
    image: "url-to-your-image-3",
  },
  {
    title: "Business Enhancement",
    description: "Driving business growth through technology...",
    points: [
      "Business Process Automation",
      "Data Analytics",
      "CRM Solutions",
      "ERP Systems",
    ],
    image: "url-to-your-image-4",
  },
];

const Services = () => {
  return (
    <div
      className="relative container mx-auto p-4"
      //   style={{
      //     backgroundImage: "url(/gradient-bg.svg)",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //   }}
    >
      <div className="absolute inset-0 opacity-10 z-0"></div>
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl font-bold">Our Services At A Glance</h1>
        <p className="text-lg text-gray-600">
          Your tech partner in the digital world...
        </p>
      </div>
      {services.map((service, index) => (
        <div
          key={index}
          className="relative z-10 flex flex-col md:flex-row items-center mb-8 rounded-lg shadow-lg p-4"
        >
          <div className="w-full md:w-1/2 p-4">
            {/* <img
              src={service.image}
              alt={service.title}
              className="rounded-lg w-full"
            /> */}
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <ul className="list-disc pl-5">
              {service.points.map((point, idx) => (
                <li key={idx} className="text-gray-600 mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="relative z-10 text-center mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
          Get in Touch
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Book a Consultation
        </button>
      </div>
    </div>
  );
};

export default Services;
