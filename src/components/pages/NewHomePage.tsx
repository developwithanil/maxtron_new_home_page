import ClientMarquee from "../elementalComponent/ClientMarquee"
import TechnologyUsed from "../elementalComponent/TechnologyUsed"
import HeroSection from "../Hero"
import WhyMaxtron from "../WhyMaxtron"

const NewHomePage = () => {
  return (
     <div id="Home" className="">
          <HeroSection />
          <ClientMarquee/>
          <WhyMaxtron/>
          <TechnologyUsed/>
     </div>
  )
}

export default NewHomePage