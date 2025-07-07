import ClientMarquee from "../elementalComponent/ClientMarquee";
import TechnologyUsed from "../elementalComponent/TechnologyUsed";
import HeroSection from "../Hero";
import WhyMaxtron from "../WhyMaxtron";
import WhoMaxtron from "../WhoMaxtron";
import Pride from "../Pride";
import CaseStudies from "../CaseStudies";
import Gallery from "../Gallery";
import Testimonials from "../Testimonials";
import ContactForm from "../ContactForm";
import Webinar from "./Webinar";

const NewHomePage = () => {
  return (
    <div id="Home" className="">
      <main>
        <h1 className="sr-only">Maxtron - Creating Winning Products</h1>
        <HeroSection />
        <ClientMarquee />
        <Webinar />
        <WhyMaxtron />
        <WhoMaxtron />
        <TechnologyUsed />
        <Pride />
        <CaseStudies />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
};

export default NewHomePage;
