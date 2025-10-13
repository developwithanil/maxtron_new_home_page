import Web3MarketingHeroSection from "../Web3MarketingHeroSection";
import MarketingCase from "../elementalComponent/MarketingCase";
import Web3MarketingOffers from "../elementalComponent/Web3MarketingOffers";
import Web3MarketingFooter from "../elementalComponent/Web3MarketingFooter";
import Web3Speed from "../elementalComponent/Web3Speed";
import FullStackMarketing from "../elementalComponent/FullStackMarketing";
import Web3MarketingFAQ from "../elementalComponent/Web3MarketingFAQ";

import ProofOfValue from "../elementalComponent/ProofOfValue";
// import WhyMaxtron from "../elementalComponent/WhyMaxtron";
import { Helmet } from "react-helmet-async";

const Web3Marketing = () => {
  return (
    <>
      <Helmet>
        <title>Maxtron - Crypto & Web3 Marketing for Builder</title>
        <meta
          name="description"
          content="Maxtron is a crypto & Web3 growth partner providing PR, SEO, KOL, community, and paid performance"
        />
        <link
          rel="canonical"
          href="https://www.maxtron.ai/web3-crypto-marketing-agency"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <meta property="og:title" content="Web3 Marketing | Maxtron" />
        <meta
          property="og:description"
          content="Maxtron's Web3 marketing services help you grow your blockchain project with innovative strategies and global reach."
        />
        <meta
          property="og:image"
          content="https://www.maxtron.ai/src/assets/MaxtronLogo.png"
        />
        <meta
          property="og:url"
          content="https://www.maxtron.ai/web3-crypto-marketing-agency"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web3 Marketing | Maxtron" />
        <meta
          name="twitter:description"
          content="Maxtron's Web3 marketing services help you grow your blockchain project with innovative strategies and global reach."
        />
        <meta
          name="twitter:image"
          content="https://www.maxtron.ai/src/assets/MaxtronLogo.png"
        />
        <meta
          name="keywords"
          content="best crypto pr agency, crypto pr agencies, crypto marketing company, crypto marketing agency, blockchain marketing agency, best crypto marketing agency, cryptocurrency marketing agency, crypto ad agency, crypto advertising company, crypto digital marketing agency"
        />
        <meta name="publisher" content="Maxtron Innovations" />
        <meta name="language" content="en" />
      </Helmet>
      <div id="Home">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
        >
          Skip to main content
        </a>
        <main id="main-content" role="main">
          <Web3MarketingHeroSection />

          <section id="full-stack-marketing" aria-label="Full Stack Marketing">
            <FullStackMarketing />
          </section>

          <section id="web3marketing-offers" aria-label="Web3 Offers">
            <Web3MarketingOffers />
          </section>

          <section id="marketing-case" aria-label="Marketing Case">
            <MarketingCase />
          </section>

          <section id="web3-speed" aria-label="Web3 Speed">
            <Web3Speed />
          </section>

          <section id="proof-of-value" aria-label="Proof of Value">
            <ProofOfValue />
          </section>

          {/* <section id="why-maxtron" aria-label="Why Maxtron">
            <WhyMaxtron />
          </section> */}

          <section id="web3-marketing-faq" aria-label="Web3 Marketing FAQ">
            <Web3MarketingFAQ />
          </section>
          <section id="web3marketing-footer" aria-label="Web3 Marketing Footer">
            <Web3MarketingFooter />
          </section>
        </main>
      </div>
    </>
  );
};

export default Web3Marketing;
