interface TechnologyProps {
    techs: Array<{
        name: string;
        icon: string;
      }>;
    
}

const Technology :React.FC<TechnologyProps> = ({techs}) => {
    console.log( "points", techs)
  return (
   <div className="flex flex-col md:flex-row w-full mx-auto max-w-[88rem] items-center gap-5 px-[30px] py-7 md:py-10 lg:py-12">
   <div className="w-full md:w-1/4 flex items-start justify-start self-start ">
   <p className=" text-[#B1B1B1] [font-family:Switzer] text-xl font-medium leading-[160%] uppercase">Technology used </p>
   </div>
  <div className="flex-1 flex items-start w-full flex-col gap-5">
  <div className="flex flex-wrap mb-8">
                            {techs.map((tech, index) => (
                                <div key={index} className="flex items-center mr-2 mb-4 bg-[#D9D9D9] py-1 px-2 rounded-lg">
                                    {tech.icon !== "" && (
                                        <img src={tech.icon} alt={tech.name} className="mr-2 h-6 w-6" />
                                    )}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
  </div>
   </div>
  )
}

export default Technology