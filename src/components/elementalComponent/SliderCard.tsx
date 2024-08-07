interface SliderCardProps {
  image: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  image,
  name,
  title,
  category,
  description,
}) => {
  return (
    <div className="bg-white p-4 py-8 md:py-10 space-y-2 md:space-y-4 max-w-96 text-left rounded-3xl shadow-lg">
      <div className="flex item-center">
        <div className="pr-4">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>
        <div>
          <h3 className="mt-4 text-left md:text-xl font-medium font-OpenSans text-[#4E009C]">
            {name}
          </h3>{" "}
          <p className="text-sm text-[#4E009C]">{title}</p>
        </div>
      </div>

      <p className="p-2 mx-4 rounded text-xs md:text-sm font-OpenSans font-medium text-[#4B6BFB] bg-[#4B6BFB0D] max-w-fit">
        {category}
      </p>
      <p className="text-left px-4 text-xs md:text-sm font-semibold font-OpenSans text-[#4E009C]">
        {description}
      </p>
    </div>
  );
};

export default SliderCard;
