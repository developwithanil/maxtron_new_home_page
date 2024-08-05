import ContactSection from "./ContactSection";
import BackgroundVideo from "./elementalComponent/BackgrounsVideo";
import CaseStudy from "./elementalComponent/CaseStudy";
import ChooseUs from "./elementalComponent/ChooseUs";
import ContactForm from "./elementalComponent/ContactForm";
import LatestInsights from "./elementalComponent/LatestInsights";
import Statistics from "./elementalComponent/Statistics";
import WhatWeDo from "./elementalComponent/WhatWeDo";
// import Footer from "./Footer";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-white to-pink-200  ">
      <BackgroundVideo />
      <ChooseUs />
      <WhatWeDo />
      <Statistics />
      <CaseStudy />
      <LatestInsights />
      <ContactForm />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
};
export default Banner;
