import Slider from "react-slick";
import SliderCard from "../components/elementalComponent/SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Antony from "../../public/customer/anthony-perkins.svg";
import Grant from "../../public/customer/grant.svg";
import Joyce from "../../public/customer/joice.svg";
import Michel from "../../public/customer/michel.svg";
import Sambhav from "../../public/customer/sambhavJain.svg";
import Lalit from "../../public/customer/lalit.svg";

const cardData = [
  {
    image: Antony,
    name: "Anthony Perkins",
    title: "Founder and Editor - Cryptonite",
    description:
      "The founder works one-on-one. His breadth of experience in digital media ensures his ability to navigate multiple hurdles seamlessly.",
    category: "Media & Entertainment",
  },
  {
    image: Joyce,
    name: "Joyce Chow",
    title: "Producer | Actress | Writer - Hollywood",
    description:
      "Metaverse creativity is integral with mainstream growth in the Metaverse. Her experience as a writer and creator adds a unique twist to each project.",
    category: "Movies & Film",
  },
  {
    image: Michel,
    name: "Michael Terpin",
    title: '"Godfather of Crypto" by CNBC',
    description:
      "The Metaverse has successfully utilized blockchain technology, and he has been integral in bridging this digital gap with real-world blockchain advancements.",
    category: "Technology",
  },
  {
    image: Lalit,
    name: "Lalit Mangal",
    title: "Co-founder - Airmeet",
    description:
      "Experienced founder who fosters exceptional user experiences through advanced events technology. He drives growth through strategic insights.",
    category: "Events SaaS Tech",
  },
  {
    image: Sambhav,
    name: "Sambhav Jain",
    title: "Co-founder - FamPay (YC-backed)",
    description:
      "Metaverse has been intertwined with our work at scale, providing a bank for the teen generation. His focus on youth engagement is unmatched.",
    category: "Fintech",
  },
  {
    image: Grant,
    name: "Grant Gunderson",
    title: "Founder & CEO - Quantum Agency",
    description:
      "Maxim has an outstanding work culture that fosters creativity and innovation, integrating seamlessly into the everyday business landscape.",
    category: "Private Equity & Venture Capital",
  },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto py-20 p-4 text-center capitalize">
      <div className="container px-4 space-y-4 md:px-8 mx-auto">
        <h2 className="text-4xl font-bold text-black mb-16">
          What our Customers Say.
        </h2>
        <div>
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="p-4">
                <SliderCard
                  image={card.image}
                  name={card.name}
                  title={card.title}
                  category={card.category}
                  description={card.description}
                  subtitle={""}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
