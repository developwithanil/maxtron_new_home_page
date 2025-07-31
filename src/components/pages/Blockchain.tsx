import React from "react";
import { Helmet } from "react-helmet";
import blockchain from "../../assets/blockchain/blockchain.webp";
import WhyBlockchain from "../elementalComponent/WhyBlockchain";
import BlockchainOffers from "../elementalComponent/BlockchainOffers";
import BlockchainBuild from "../elementalComponent/BlockchainBuild";
import BlockchainUseCase from "../elementalComponent/BlockchainUseCase";
import BlockchainTrust from "../elementalComponent/BlockchainTrust";
import BlockchainFooter from "../elementalComponent/BlockchainFooter";

const Blockchain = () => {
  return (
    <div className="w-full text-white max-w-[96rem] mx-auto">
      <Helmet>
        <title>Blockchain Development | Maxtron</title>
        <meta name="description" content="Maxtron offers expert blockchain development services for secure, scalable, and innovative solutions." />
        <link rel="canonical" href="https://www.maxtron.ai/blockchain" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <meta property="og:title" content="Blockchain Development | Maxtron" />
        <meta property="og:description" content="Maxtron offers expert blockchain development services for secure, scalable, and innovative solutions." />
        <meta property="og:image" content="https://www.maxtron.ai/src/assets/MaxtronLogo.png" />
        <meta property="og:url" content="https://www.maxtron.ai/blockchain" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-col lg:flex-row lg:items-center md:p-10 lg:p-12 xl:p-12 sm:p-10 p-5">
        <div className="w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] flex flex-col justify-center p-4">
          <h1 className="text-xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-[#2A2A2A] mb-3 sm:mb-3 font-[Switzer]">
            Blockchain Solutions That Work
          </h1>
          <p className="text-[#7A7A7A] md:text-[20px] xl:text-[20px] lg:text-[20px] sm:text-[14px] leading-relaxed mb-8 sm:mb-12 font-[Switzer] font-medium">
            Partner with forward-thinking teams and enterprises to design, build
            and deploy blockchain systems that are scalable, secure and
            business-ready.
          </p>
        </div>
        <div className="w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] flex items-center justify-center p-4">
          <img
            src={blockchain}
            alt="Developer coding on a laptop with a coffee cup nearby"
            className="w-full h-full object-cover"
            style={{
              clipPath: "ellipse(140% 75% at 110% 50%)",
            }}
          />
        </div>
      </div>
      <section id="why-blockchain" aria-label="Why Blockchain">
        <WhyBlockchain />
      </section>
      <section id="blockchain-offers" aria-label="Blockchain Offers">
        <BlockchainOffers />
      </section>
      <section id="blockchain-build" aria-label="Blockchain Build">
        <BlockchainBuild />
      </section>
      <section id="blockchain-use-case" aria-label="Blockchain Use Case">
        <BlockchainUseCase />
      </section>
      <section id="blockchain-trust" aria-label="Blockchain Trust">
        <BlockchainTrust />
      </section>
      <section id="blockchain-footer" aria-label="Blockchain Footer">
        <BlockchainFooter />
      </section>
    </div>
  );
};

export default Blockchain;
