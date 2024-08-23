import hero from '../../assets/internal/hero.png';
import react from '../../assets/internal/react.png';
import db from '../../assets/internal/db.png';
import nestjs from '../../assets/internal/nestjs.png';
import mysql from '../../assets/internal/mysql.png';
import star from '../../assets/internal/star.png';
import mobile from '../../assets/internal/mobile.png';
import node from '../../assets/internal/node.png';
import php from '../../assets/internal/php.png';
import figma from '../../assets/internal/figma.png';
import solidity from '../../assets/internal/Solidity.png';
import ContactForm from '../ContactForm';

const firstBoxData = [
    {
        heading: 'INDUSTRY',
        detail: 'Gaming, iGaming, Crypto Gaming.',
    },
    {
        heading: 'PROJECT DURATION',
        detail: '4 Months',
    },
];

const secondBoxData = [
    {
        heading: 'Problem',
        points: [
            'Increase Tenup Token (TUP) adoption and build gaming utilities for the Tenup Ecosystem and Community. The Tenup token can be used on the App Store (iOS) and Play Store (Android) for the Tenup Gaming Platform.',
            'App Store and Play Store have implemented restrictions on transactions involving cryptocurrencies within mobile apps. This means players are unable to use crypto TUP tokens directly through apps downloaded from these stores.',

        ]
    },
    {
        heading: 'Solution',
        points: [
            'Bridging the web and mobile app for a seamless experience for players to play mobile games with crypto, making it easy for players to use crypto as digital value on the mobile platform.',
            'Players have the option to conduct transactions using crypto TUP tokens through the web platform and convert them into game points to be used on the mobile applications.',
            'Despite the mobile app restrictions, the web platform of the game remains interconnected with the apps login system using the same database to maintain the point system on mobile apps and the crypto conversion for all individual players. This smooth synchronization ensures that the number of TUP tokens held is well synchronized with the Game Points using a single master database, providing a seamless experience for players to use their crypto TUP tokens on the mobile apps.'
        ]
    },
    {
        heading: 'Result',
        points: [
            'In response to the app store policies, players can now purchase points using their crypto TUP tokens via the web platform. These transactions provide players with game points, which can be used for gameplay. Notably, the App Store and Play Store are unable to discern whether these game points are tied to crypto TUP tokens, preserving player privacy.',
            'This setup offers players the flexibility to engage with the game in multiple ways. They can play through the apps and also convert their game points into crypto TUP tokens on the web platform.',
            'In conclusion, despite restrictions on in-app crypto transactions imposed by major app stores, players can still utilize crypto through the web platform of the game. This integration maintains consistency between app and web logins while providing players with the freedom to interact with the game in varied ways, including converting game points into crypto assets for seamless transactions on their own.'
        ]
    }
];

const processSteps = [
    {
        title: 'Product Scope',
        description:
            'Maxtron started by understanding the business vision and creating a detailed plan for the project. This involved researching the market, analyzing competitors, and gathering all necessary information. We then had a deep discussion with the client to develop a value proposition and establish the main assumptions to test. Finally, we outlined the key user stories and features needed to validate these assumptions in the Minimum Viable Product (MVP).'
    },
    {
        title: 'Product Rationale and Tech Scope',
        description:
            'After an in-depth session with all the stakeholders, we gathered all the information needed to compile the definitive list of User Stories and features for testing the main assumptions in a Proof of Concept (POC). Our experts in Gaming, Blockchain, Product, UX/UI, and Tech Architecture concentrated on addressing all the challenges that arose during the scope preparation.'
    },
    {
        title: 'Prototype',
        description:
            'We created a non-functional prototype to simulate user interactions, closely resembling the final product. This phase was ideal for testing the information architecture, the user experience (UX), and, importantly, providing all stakeholders with a tangible preview of the final product.'
    },
    {
        title: 'Final Development',
        description:
            'With the decisions closed in the previous steps, we proceeded with developing the product through agile cycles (methodology).'
    }
];

const techs = [
    { name: 'MySQL DB', icon: mysql },
    { name: 'PHP', icon: php },
    { name: 'NestJS', icon: nestjs },
    { name: 'MongoDB', icon: db },
    { name: 'Node', icon: node },
    { name: 'Solidity', icon: solidity },
    { name: 'Figma', icon: figma },
    { name: 'React', icon: react }
];

const InternalPage = () => {
    return (
        <div>
            <div className="relative z-10 pt-32 lg:pt-16 text-center internal_page_hero_img px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    Ludo Love
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mt-2">
                    Ready To Roll The Dice
                </p>
                <img src={hero} alt="hero" className="lg:w-[40%] w-[100%] h-auto" />
            </div>

            <div className="container mx-auto mt-8 flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-[34%] lg:m-0 p-4 bg-[#F2EEEF] rounded-lg h-fit mx-4 lg:mr-8">
                    {firstBoxData.map((item, index) => (
                        <div key={index} className="py-2">
                            <h2 className="text-xl font-bold mb-2">{item.heading}</h2>
                            <p className="text-lg">{item.detail}</p>
                        </div>
                    ))}

                    <div className="py-2">
                        <h2 className="text-xl font-bold mb-2">CLIENT SATISFACTION</h2>
                        <p className="text-lg flex items-center">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            5.0
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-[66%] p-4 lg:p-0">
                    {secondBoxData.map((item, index) => (
                        <div key={index} className="mb-8 p-4 lg:p-0">
                            <h2 className="text-2xl font-bold mb-4">{item.heading}</h2>
                            <p className="text-sm font-OpenSans">
                                {item.points.map((point, idx) => (
                                    <span key={idx} className="block pb-4">{point}</span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto  py-12">
                <div className="flex mx-4 flex-wrap lg:flex-nowrap items-center justify-between">
                <div className="w-full lg:w-1/3  justify-center lg:justify-end flex lg:hidden">
                        <img src={mobile} alt="Process Overview" className="  h-auto" />
                    </div>

                    <div className="w-full lg:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">Tech used</h2>
                        <div className="flex flex-wrap mb-8  ">
                            {techs.map((tech, index) => (
                                <div key={index} className="flex items-center mr-2 mb-4 bg-[#D9D9D9] py-1 px-2 rounded-lg">
                                    <img src={tech.icon} alt={tech.name} className="mr-2 " />
                                    <span className="">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-3xl font-bold mb-6">The Process</h2>
                        <div className=' border-l border-[#D9D9D9]'>
                            {processSteps.map((step, index) => (
                                <div key={index} className="mb-6 pl-4 ">
                                    <h3 className="text-2xl relative font-semibold mb-2">
                                        <span className="text-purple-500 absolute left-[-23px]  ">&#x25cf;</span>
                                        <span className=''>{step.title}</span>
                                    </h3>
                                    <p className="text-sm font-OpenSans pl-6 leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3  justify-center lg:justify-end hidden lg:flex">
                        <img src={mobile} alt="Process Overview" className="  h-auto" />
                    </div>
                </div>
            </div>


            <div className="container mx-auto pt-4 px-4 lg:px-0 flex flex-wrap lg:flex-nowrap items-center justify-between">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                    <img src={mobile} alt="Ludo Love App Preview" className="" />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-8 lg:pr-4">
    <h2 className="text-3xl font-bold mb-6">Key Feature</h2>
    <div className="leading-relaxed">
        {[
            "Functional Requirement Documentation",
            "Technical Architecture Planning",
            "Unity Game Development",
            "Proper Backend Development",
            "Integration of Initial Blockchain Functionalities Like Connecting Crypto Wallet, Withdrawal, and Deposits, Native Crypto Token",
            "Workaround to Build a Seamless Experience on Both Website and App Using Native Crypto Token",
            "Leader Board for Tournaments",
            "NFT Integrated with Leaderboard System Development (Top Winners to Get NFTs Minted)"
        ].map((text, index) => (
            <p key={index} className="flex items-start text-sm font-OpenSans">
                <span className="mr-2 text-xl">&#8226;</span> {/* Unicode for bullet point */}
                {text}
            </p>
        ))}
    </div>
</div>

            </div>

            <ContactForm/>
        </div>
    );
};

export default InternalPage;