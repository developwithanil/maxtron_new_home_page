import Web3MarketingHeroSection from "../Web3MarketingHeroSection";
import MarketingCase from "../elementalComponent/MarketingCase";
import Web3MarketingOffers from "../elementalComponent/Web3MarketingOffers";
import Web3MarketingFooter from "../elementalComponent/Web3MarketingFooter";
import Web3Speed from "../elementalComponent/Web3Speed";
import FullStackMarketing from "../elementalComponent/FullStackMarketing";
import { Helmet } from 'react-helmet-async';

const Web3Marketing = () => {
  return (
    <>
      <Helmet>
        <title>Web3 Marketing | Maxtron</title>
        <meta name="description" content="Maxtron's Web3 Marketing services accelerate your business growth with innovative blockchain and digital marketing solutions." />
        <link rel="canonical" href="https://www.maxtron.ai/web3-marketing" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <meta property="og:title" content="Web3 Marketing | Maxtron" />
        <meta property="og:description" content="Maxtron's Web3 Marketing services accelerate your business growth with innovative blockchain and digital marketing solutions." />
        <meta property="og:image" content="https://www.maxtron.ai/src/assets/MaxtronLogo.png" />
        <meta property="og:url" content="https://www.maxtron.ai/web3-marketing" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div id="Home">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
        ></a>
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
          <section id="web3marketing-footer" aria-label="Web3 Marketing Footer">
            <Web3MarketingFooter />
          </section>
        </main>
      </div>
    </>
  );
};

export default Web3Marketing;
