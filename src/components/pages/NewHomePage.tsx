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
import ContactAndSubscribe from "../elementalComponent/ContactAndSubscribe";

const NewHomePage = () => {
  return (
    <div id="Home" className="">
      <HeroSection />
      <ClientMarquee />
      <WhyMaxtron />
      <WhoMaxtron />
      <TechnologyUsed />
      <Pride />
      <CaseStudies />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <ContactAndSubscribe />
    </div>
  );
};

export default NewHomePage;
