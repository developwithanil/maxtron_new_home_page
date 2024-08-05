import ContactSection from "./ContactSection";
import BackgroundVideo from "./elementalComponent/BackgrounsVideo";
import CaseStudy from "./elementalComponent/CaseStudy";
import ChooseUs from "./elementalComponent/ChooseUs";
import ClientMarquee from "./elementalComponent/ClientMarquee";
import ContactForm from "./elementalComponent/ContactForm";
import LatestInsights from "./elementalComponent/LatestInsights";
import Statistics from "./elementalComponent/Statistics";
import WhatWeDo from "./elementalComponent/WhatWeDo";
// import Slider from "./elementalComponent/Slider";
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
      {/* <Slider /> */}
      <LatestInsights />
      <ContactForm />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
};
export default Banner;
