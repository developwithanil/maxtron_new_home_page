import React from "react";
import { Helmet } from "react-helmet-async";
import ClientMarquee from "../elementalComponent/ClientMarquee";
import Web3HeroSection from "../Web3HeroSection";
import Web3Needs from "../elementalComponent/Web3Needs";
import Web3Offers from "../elementalComponent/Web3Offers";
import DesignSection from "../elementalComponent/DesignSection";
import UseCase from "../elementalComponent/UseCase";
import Web3Footer from "../elementalComponent/Web3Footer";
import Web3Ethos from "../elementalComponent/Web3Ethos";

const Web3 = () => {
  return (
    <>
      <Helmet>
        <title>Web3 Services | Maxtron</title>
        <meta
          name="description"
          content="Explore Maxtron's Web3 services: blockchain, decentralized apps, and next-gen digital solutions for your business."
        />
        <link rel="canonical" href="https://www.maxtron.ai/web3" />
        <meta property="og:title" content="Web3 Services | Maxtron" />
        <meta
          property="og:description"
          content="Explore Maxtron's Web3 services: blockchain, decentralized apps, and next-gen digital solutions for your business."
        />
        <meta
          property="og:image"
          content="https://www.maxtron.ai/src/assets/MaxtronLogo.png"
        />
        <meta property="og:url" content="https://www.maxtron.ai/web3" />
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
          <Web3HeroSection />

          <section id="clients" aria-label="Our Clients">
            <ClientMarquee />
          </section>
          <section id="web3-needs" aria-label="Web3 Needs">
            <Web3Needs />
          </section>
          <section id="web3-offers" aria-label="Web3 Offers">
            <Web3Offers />
          </section>
          <section id="design-section" aria-label="Design Section">
            <DesignSection />
          </section>
          <section id="web3-ethos" aria-label="Web3 Ethos">
            <Web3Ethos />
          </section>
          <section id="use-case" aria-label="Use Case">
            <UseCase />
          </section>
          <section id="web3-footer" aria-label="Web3 Footer">
            <Web3Footer />
          </section>
        </main>
      </div>
    </>
  );
};

export default Web3;
