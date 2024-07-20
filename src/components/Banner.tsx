import BackgroundVideo from "./elementalComponent/BackgrounsVideo";
// import CaseStudy from "./elementalComponent/CaseStudy";
import ChooseUs from "./elementalComponent/ChooseUs";
import ContactForm from "./elementalComponent/ContactForm";
import LatestInsights from "./elementalComponent/LatestInsights";
import WhatWeDo from "./elementalComponent/WhatWeDo";

const Banner = () => {
  return (
    <div>
      <BackgroundVideo />
      <ChooseUs />
      <WhatWeDo />
      {/* <CaseStudy /> */}
      <LatestInsights />
      <ContactForm />
    </div>
  );
};
export default Banner;
