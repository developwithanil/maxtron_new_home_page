import Web3MarketingHeroSection from "../Web3MarketingHeroSection";
import MarketingCase from "../elementalComponent/MarketingCase";
import Web3MarketingOffers from "../elementalComponent/Web3MarketingOffers";
import Web3MarketingFooter from "../elementalComponent/Web3MarketingFooter";
import Web3Speed from "../elementalComponent/Web3Speed";
import FullStackMarketing from "../elementalComponent/FullStackMarketing";

const Web3Marketing = () => {
  return (
    <>
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
