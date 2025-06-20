import React from "react";

const tiers = [
  {
    name: "Starter",
    bg: "#A16EDA",
    commission: "Up to 20% per deal",
    referrals: "1–4",
    perks: ["Access to affiliate toolkit"],
  },
  {
    name: "Pro",
    bg: "#8E52CA",
    commission: "Up to 25% per deal",
    referrals: "5–9",
    perks: ["Co-branded content", "Optimization tips"],
  },
  {
    name: "Elite",
    bg: "#7A35C1",
    commission: "Up to 30% per deal",
    referrals: "10+",
    perks: [
      "Dedicated manager",
      "Exclusive bonuses",
      "Early access to new products",
    ],
  },
];

const AffiliateTiers = () => {
  return (
    <section className="w-full mt-14 md:mt-20 lg:mt-28 xl:mt-36 pr-3 md:pr-4 lg:pr-8">
      <div className="w-full text-center">
        <h2 className="text-[#2A2A2A] font-[Switzer] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-[140%] mb-2 mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          Affiliate Tiers
        </h2>
        <p className="text-[#2A2A2A] font-openSansHebrew text-lg lg:text-xl font-normal leading-8">
          We believe you should always have room to grow.
        </p>
      </div>

   
      <div className="grid grid-cols-1 gap-8 mt-12 lg:hidden">
        {tiers.map((tier, idx) => (
          <article
            key={tier.name}
            className="flex flex-col gap-6 rounded-2xl shadow-md border border-[#DFDEE7] bg-white overflow-hidden"
            aria-label={`Affiliate tier: ${tier.name}`}
          >
            <header
              className="flex justify-center items-center p-4 rounded-t-2xl"
              style={{ background: tier.bg }}
            >
              <h3 className="text-white text-center font-[Switzer] text-2xl font-semibold leading-[140%]">
                {tier.name}
              </h3>
            </header>
            <div className="flex flex-row gap-4 justify-start px-4">
              <span className="flex-1 font-semibold text-[#2A2A2A]">Commission Rate</span>
              <span className="flex-1 text-right">{tier.commission}</span>
            </div>
            <div className="flex flex-row gap-4 justify-start px-4">
              <span className="flex-1 font-semibold text-[#2A2A2A]">Monthly Referrals</span>
              <span className="flex-1 text-right">{tier.referrals}</span>
            </div>
            <div className="flex flex-col gap-2 px-4 pb-4">
              <span className="font-semibold text-[#2A2A2A]">Bonus Perks</span>
              <ul className="list-disc list-inside space-y-1">
                {tier.perks.map((perk, i) => (
                  <li key={i} className="text-[#2A2A2A] text-base font-normal leading-[140%]">
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

    
    </section>
  );
};

export default AffiliateTiers;
