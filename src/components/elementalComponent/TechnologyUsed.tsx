import tech1 from "../../assets/case/tech1.jpg"
import tech2 from "../../assets/case/tech2.jpg"
import tech3 from "../../assets/case/tech3.jpg"
import tech4 from "../../assets/case/tech4.jpg"

const cardData =[
    {
        title:"Experiential Tech",
        desc:"Beyond Screens, Into Senses",
        link:"https://experiences.maxtron.ai/",
        tag:"New",
        image:tech1
    },
    {
        title:"Tokenization",
        desc:"Own Everything, Digitally",
        link:"https://experiences.maxtron.ai/",
        tag:"New",
        image:tech2
    },
    {
        title:"Affiliate Program",
        desc:"Built to Go Viral",
        link:"https://experiences.maxtron.ai/",
        tag:"Coming Soon",
        image:tech3
    },
    {
        title:"Blog",
        desc:"Feel the Flow",
        link:"https://experiences.maxtron.ai/",
        tag:"Coming Soon",
        image:tech4
    },
]


const TechnologyUsed = () => {
  return (
   <section
          id=""
        
          className="relative py-4 md:py-8 lg:py-11 xl:py-12 inset-0  text-center"
        >
          <div
          
          >
            <div className="p-4 ">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2A2A2A] mb-4 text-[Switzer]">State-of-the-art Technology Trends</h2>
             
              <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4">
                 {cardData.map((card, index) => (
                    <div key={index} className="relative rounded-lg ">
                        <img src={card.image} alt={card.title} className="w-full object-cover rounded-2xl"/>
                        <div className="flex absolute top-2 right-2 justify-center items-center gap-2.5 [background:var(--Primary-0,#F3EBFC)] p-2 rounded-lg">
                           <p className="text-[#7A35C1] font-[Switzer] text-sm font-normal leading-[120%]">

                            {card.tag}
                           </p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-700 text-base">{card.desc}</p>
                            <div className="flex justify-end mt-4">
                                <a href={card.link} className="text-purple-600 hover:text-purple-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                 ))}
              </div>
           
            </div>
          </div>
        </section>
  )
}

export default TechnologyUsed