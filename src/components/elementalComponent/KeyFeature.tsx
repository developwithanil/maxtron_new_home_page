interface KeyFeatureProps {
    keyFeatures: Array<string | { title: string; details: string[] }>;
    
}

const KeyFeature :React.FC<KeyFeatureProps> = ({keyFeatures}) => {
    console.log( "points", keyFeatures)
  return (
   <div className="flex flex-col  w-full mx-auto max-w-[88rem] items-center gap-5 md:gap-8 px-[30px] py-7 md:py-10 lg:py-12">
   <div className="w-full flex items-start justify-start self-start ">
   <p className=" text-[#B1B1B1] [font-family:Switzer] text-xl font-medium leading-[160%] uppercase">key features </p>
   </div>
   <div className="grid grid-cols-1 lg:grid-cols-3  w-full">
  
</div>

   </div>
  )
}

export default KeyFeature