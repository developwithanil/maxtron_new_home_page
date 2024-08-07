import ContactSection from "./ContactSection";
import BackgroundVideo from "./BackgrounsVideo";
import CaseStudy from "./CaseStudy";
import ChooseUs from "./ChooseUs";
import ClientMarquee from "./elementalComponent/ClientMarquee";
import ContactForm from "./ContactForm";
// import LatestInsights from "./elementalComponent/LatestInsights";
import Statistics from "./Statistics";
import WhatWeDo from "./WhatWeDo";
import Slider from "./Slider";
// import Footer from "./Footer";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-white to-pink-200  ">
      <BackgroundVideo />
      <ChooseUs />
      <WhatWeDo />
      <Statistics />
      <ClientMarquee />
      <CaseStudy />
      <Slider />
      {/* <LatestInsights /> */}
      <ContactForm />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
};
export default Banner;
