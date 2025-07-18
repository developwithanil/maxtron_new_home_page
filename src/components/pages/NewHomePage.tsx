import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Maxtron | Product Development & Marketing Company | AI, Blockchain, Web3, Emerging Technologies, IT Services, Sales & Marketing</title>
        <meta name="description" content="Transform your business and growth with Maxtron’s IT and marketing solutions. We are a trusted IT product development company to enable rapid development and deployment of cutting-edge solutions, empowering your business to achieve its goals." />
        <link rel="canonical" href="https://www.maxtron.ai/" />
        <meta property="og:title" content="Maxtron | Product Development & Marketing Company | AI, Blockchain, Web3, Emerging Technologies, IT Services, Sales & Marketing" />
        <meta property="og:description" content="Transform your business and growth with Maxtron’s IT and marketing solutions. We are a trusted IT product development company to enable rapid development and deployment of cutting-edge solutions, empowering your business to achieve its goals." />
        <meta property="og:image" content="https://www.maxtron.ai/src/assets/MaxtronLogo.png" />
        <meta property="og:url" content="https://www.maxtron.ai/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div id="Home">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
        >
          Skip to main content
        </a>
        <main id="main-content" role="main">
          <h1 className="sr-only">Maxtron - Creating Winning Products</h1>
          <HeroSection />
          <nav aria-label="Page sections" className="sr-only">
            <ul>
              <li>
                <a href="#clients">Our Clients</a>
              </li>
              <li>
                <a href="#webinar">Webinar</a>
              </li>
              <li>
                <a href="#why-maxtron">Why Maxtron</a>
              </li>
              <li>
                <a href="#who-maxtron">Who We Are</a>
              </li>
              <li>
                <a href="#technology">Technology</a>
              </li>
              <li>
                <a href="#pride">Our Pride</a>
              </li>
              <li>
                <a href="#case-studies">Case Studies</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <section id="clients" aria-label="Our Clients">
            <ClientMarquee />
          </section>
          <section id="webinar" aria-label="Webinar">
            <Webinar />
          </section>
          <section id="why-maxtron" aria-label="Why Choose Maxtron">
            <WhyMaxtron />
          </section>
          <section id="who-maxtron" aria-label="Who We Are">
            <WhoMaxtron />
          </section>
          <section id="technology" aria-label="Technologies We Use">
            <TechnologyUsed />
          </section>
          <section id="pride" aria-label="Our Pride">
            <Pride />
          </section>
          <section id="case-studies" aria-label="Case Studies">
            <CaseStudies />
          </section>
          <section id="gallery" aria-label="Gallery">
            <Gallery />
          </section>
          <section id="testimonials" aria-label="Testimonials">
            <Testimonials />
          </section>
          <section id="contact" aria-label="Contact Form">
            <ContactForm />
          </section>
        </main>
      </div>
    </>
  );
};

export default NewHomePage;
