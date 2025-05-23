
const cardData =[
    "Quick Turnaround Of Situation","Generating Concrete Value","Approchable and Responsive","Cutting-Edge Products and Passionate Expert"
] 
const WhyMaxtron = () => {
  return (
      <section
          id="about-us"
        
          className="relative py-4 md:py-8 lg:py-11 xl:py-12 inset-0  text-center"
        >
          <div
          
          >
            <div className="p-4 ">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2A2A2A] mb-4 text-[Switzer]">Why Maxtron</h2>
              <p className="mb-8 md:mb-10 lg:mb-14 xl:mb-16  text-[#79748A] font-openSansHebrew">
                We go beyond simply serving the industry; we forge enduring relationships built on trust and mutual success.
              </p>
              <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4">
                {cardData.map((card, index) => (
                  <div key={index} className='bg-[#F3EBFC] border border-solid border-[#DFDEE7] rounded-xl p-4  lg:p-5 flex flex-col items-start gap-2'>
              <div className='flex items-center font-mono justify-center w-8 h-8 rounded-lg bg-[#CAA8EF] text-[#363348] font-bold text-lg'>
                {`0${index + 1}`}
              </div>
              <div className='text-[#2A2A2A] font-[Switzer] font-medium text-base lg:text-lg text-start'>{card}</div>
            </div>
                ))}
              </div>
              
            </div>
          </div>
        </section>
  )
}

export default WhyMaxtron