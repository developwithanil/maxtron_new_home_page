import { CaseStudy } from './types';

import hero from '../../assets/internal/hero.png';
import mysql from '../../assets/internal/mysql.svg';
import php from '../../assets/internal/php.png';
import nestjs from '../../assets/internal/nest.svg';
import db from '../../assets/internal/db.png';
import node from '../../assets/internal/node.svg';
import solidity from '../../assets/internal/solidity.svg';
import figma from '../../assets/internal/figma.svg';
import react from '../../assets/internal/react.svg';
import mobile from '../../assets/internal/mobile.png';
import shaperCultHero from '../../assets/internal/shaper1.svg';
import shaperCultMobile from '../../assets/internal/shaper2.svg';
import shaperCultLogo from '../../assets/internal/shaper3.svg';
import hyper1 from '../../assets/internal/hyper1.svg';
import hyper2 from '../../assets/internal/hyper2.svg';
import hyper3 from '../../assets/internal/hyper3.svg';
import create1 from '../../assets/internal/create1.svg';
import create2 from '../../assets/internal/create2.svg';
import create3 from '../../assets/internal/create3.svg';
import dial1 from '../../assets/internal/dial1.svg';
import dial2 from '../../assets/internal/dial2.svg';
import dial3 from '../../assets/internal/dial3.svg';
import web31 from '../../assets/internal/web31.svg';
import web32 from '../../assets/internal/web32.svg';
import web33 from '../../assets/internal/web33.svg';

export const caseStudies: CaseStudy[] = [

    {
        title: "Ludo Love",
        subtitle: "Ready To Roll The Dice",
        heroImage: hero,
        industryInfo: "Gaming, iGaming, Crypto Gaming.",
        projectDuration: "4 Months",
        theprocessText:"The Process",

        clientSatisfaction: 5.0,
        problemSolutionResult: [
            {
                heading: 'Problem',
                subheading: "",
                points: [
                    'Increase Tenup Token (TUP) adoption and build gaming utilities for the Tenup Ecosystem and Community. The Tenup token can be used on the App Store (iOS) and Play Store (Android) for the Tenup Gaming Platform.',
                    'App Store and Play Store have implemented restrictions on transactions involving cryptocurrencies within mobile apps. This means players are unable to use crypto TUP tokens directly through apps downloaded from these stores.',
                ]
            },
            {
                heading: 'Solution',
                subheading: "",
                points: [
                    'Bridging the web and mobile app for a seamless experience for players to play mobile games with crypto, making it easy for players to use crypto as digital value on the mobile platform.',
                    'Players have the option to conduct transactions using crypto TUP tokens through the web platform and convert them into game points to be used on the mobile applications.',
                    'Despite the mobile app restrictions, the web platform of the game remains interconnected with the apps login system using the same database to maintain the point system on mobile apps and the crypto conversion for all individual players. This smooth synchronization ensures that the number of TUP tokens held is well synchronized with the Game Points using a single master database, providing a seamless experience for players to use their crypto TUP tokens on the mobile apps.'
                ]
            },
            {
                heading: 'Result',
                subheading: "",
                points: [
                    'In response to the app store policies, players can now purchase points using their crypto TUP tokens via the web platform. These transactions provide players with game points, which can be used for gameplay. Notably, the App Store and Play Store are unable to discern whether these game points are tied to crypto TUP tokens, preserving player privacy.',
                    'This setup offers players the flexibility to engage with the game in multiple ways. They can play through the apps and also convert their game points into crypto TUP tokens on the web platform.',
                    'In conclusion, despite restrictions on in-app crypto transactions imposed by major app stores, players can still utilize crypto through the web platform of the game. This integration maintains consistency between app and web logins while providing players with the freedom to interact with the game in varied ways, including converting game points into crypto assets for seamless transactions on their own.'
                ]
            }
        ],
        techs: [
            { name: 'MySQL DB', icon: mysql },
            { name: 'PHP', icon: php },
            { name: 'NestJS', icon: nestjs },
            { name: 'MongoDB', icon: db },
            { name: 'Node', icon: node },
            { name: 'Solidity', icon: solidity },
            { name: 'Figma', icon: figma },
            { name: 'React', icon: react }
        ],
        processSteps: [
            {
                title: 'Product Scope',
                description: ['Maxtron started by understanding the business vision and creating a detailed plan for the project. This involved researching the market, analyzing competitors, and gathering all necessary information. We then had a deep discussion with the client to develop a value proposition and establish the main assumptions to test. Finally, we outlined the key user stories and features needed to validate these assumptions in the Minimum Viable Product (MVP).']
            },
            {
                title: 'Product Rationale and Tech Scope',
                description: ['After an in-depth session with all the stakeholders, we gathered all the information needed to compile the definitive list of User Stories and features for testing the main assumptions in a Proof of Concept (POC). Our experts in Gaming, Blockchain, Product, UX/UI, and Tech Architecture concentrated on addressing all the challenges that arose during the scope preparation.']
            },
            {
                title: 'Prototype',
                description: ['We created a non-functional prototype to simulate user interactions, closely resembling the final product. This phase was ideal for testing the information architecture, the user experience (UX), and, importantly, providing all stakeholders with a tangible preview of the final product.']
            },
            {
                title: 'Final Development',
                description: ['With the decisions closed in the previous steps, we proceeded with developing the product through agile cycles (methodology).']
            }
        ],
        keyFeatures: [
            "Functional Requirement Documentation",
            "Technical Architecture Planning",
            "Unity Game Development",
            "Proper Backend Development",
            "Integration of Initial Blockchain Functionalities Like Connecting Crypto Wallet, Withdrawal, and Deposits, Native Crypto Token",
            "Workaround to Build a Seamless Experience on Both Website and App Using Native Crypto Token",
            "Leader Board for Tournaments",
            "NFT Integrated with Leaderboard System Development (Top Winners to Get NFTs Minted)"
        ],
        mobileImage: mobile,
        keyFeaturesImage: mobile
    },

    {
        title: "ShaperCult",
        subtitle: "",
        heroImage: shaperCultHero,
        industryInfo: "Fashion & Apparel Ecommerce",
        projectDuration: "4 Months",
        theprocessText:"The Process",

        clientSatisfaction: 5.0,
        problemSolutionResult: [
            {
                heading: "Problem",
                subheading: "Challenge of achieving rapid growth in a new DTC category with the right promotional and pricing strategy",
                points: [
                    "Client has faced some significant challenges in correctly positioning and targeting the business. Since shapewear is a relatively new category, figuring out the right price point was particularly tricky. Defining pricing for this new market required thorough research and customer analysis. Additionally, the client wanted to achieve rapid growth, so we had to focus on strategies that were both aggressive and sustainable."
                ]
            },
            {
                heading: "Solution",
                subheading: "Refined Approach for Achieving Rapid Growth",
                points: [
                    "After thoroughly understanding the challenges and goals, we developed the right mix of the 4Ps (Product, Price, Place, Promotion) and STP (Segmentation, Targeting, Positioning). We went through various trial phases, market research, and testing to position the brand effectively. We conducted in-person surveys and phone surveys using our proprietary AI calling tool to gather extensive insights in just a few days, insights that would typically take months to compile.",
                    "Considering the client's D2C model, we crafted a precise messaging strategy utilizing the right channels—Meta and Google ads, SEO for e-commerce, partnerships, and influencer marketing."
                ]
            },
            {
                heading: "Result",
                subheading: "We have helped the company successfully achieve fast growth with high margins into a new D2C category with flying colors.",
                points: [
                    "With all our efforts, we managed to secure 50K orders for the company, achieving an ROI of 40%. Our organic growth strategy also flourished, and the brand reached an impressive NPS of 70. This success was all due to our data-driven approach. Compared to industry standards, our method allowed us to achieve an 18% more optimized ROI. This was a game changer for us, giving us an extra edge."
                ]
            }
        ],
        techs: [
        ],
        processSteps: [
            {
                title: "Initial Planning & Strategy Development",
                description:[""] 
            },
            {
                title: "Market Research & Analysis",
                description:[""] 
            },
            {
                title: "Testing & Optimization",
                description:[""] 
            },
            {
                title: "Implementation incorporating data-driven approach",
                description:[""] 
            },
            {
                title: "Achieving results and continuous improvement",
                description:[""] 
            }

        ],
        keyFeatures: [
            "Social media marketing: Meta, influencer marketing, SEO",
            "eCommerce, PLA",
            "Customer surveys used to get imperfect survey results",
            "UX and UI improvements",
            "Market penetration: mature to pre-viable mobile app",
            "Data analytics, behavioral and usage analytics, UTM tracking for lead campaigns"
        ],
        mobileImage: shaperCultMobile,
        keyFeaturesImage: shaperCultLogo
    },
    {
        title: "DIAL247.AI",
        subtitle: "AI-Phone Calling Solution • Future of Voice Call Interactions",
        heroImage: dial1,
        industryInfo: "AI/ML & Tech, Artificial Intelligence",
        projectDuration: "5 Months",
        theprocessText:"The Process",

        clientSatisfaction: 5.0,
        problemSolutionResult: [
            {
                heading: "Problem",
                subheading: "High Costs, low Productivity, third party dependency, and long waiting time to get insights after call-process completion",
                points: [
                    "Businesses often need to set up large teams for tasks like cold calling, lead assessment, customer service, and market surveys. Basic tasks such as appointment scheduling, visitor confirmations, and job candidate screenings still need to be done manually. Companies either handle these tasks in-house or outsource them to BPOs, which leads to increased costs, reduced productivity, and reliance on third parties. Additionally, obtaining actionable insights can take months, if not years."
                ]
            },
            {
                heading: "Solution",
                subheading: "AI-Powered phone agents which can converse just like humans and speed up process to 100X",
                points: [
                    "With AI's advanced capabilities, we've developed a tool where phone agents can engage in human-like conversations, handling various tasks efficiently. These AI agents are designed to be versatile, engaging, and empathetic. They can handle all human requests and come with a variety of voices—male and female, with American, European, Indian, and African accents, among others."
                ]
            },
            {
                heading: "Results",
                subheading: "",
                points: [
                    {
                        title: "Increased Brand Awareness",
                        details: [
                            "Significant growth in social media followers and engagement rates across all platforms.",
                            "Improved brand recognition within the Web3 and blockchain communities."
                        ]
                    },
                    {
                        title: "Community Growth",
                        details: [
                            "Rapid expansion of the client's online community with active participation in discussions and events.",
                            "High levels of user engagement and feedback, contributing to product improvements."
                        ]
                    },
                    {
                        title: "Adoption and Usage",
                        details: [
                            "Notable increase in the number of developers and users adopting client's platform for their decentralized applications.",
                            "Positive feedback from the community on the platform's performance and usability."
                        ]
                    },
                    {
                        title: "Thought Leadership",
                        details: [
                            "Client established itself as a thought leader in the decentralized technology space through consistent content and thought-provoking discussions.",
                            "Frequent mentions and features in industry publications and media."
                        ]
                    },
                    {
                        title: "Analytics and Optimization",
                        details: [
                            "Measuring performance and adjusting strategies based on data-driven insights."
                        ]
                    }
                ]
            }
        ],
        techs: [
            { name: 'MySQL DB', icon: mysql },
            { name: 'Alchemy', icon: "" },
            { name: 'NestJS', icon: nestjs },
            { name: 'Sequelize', icon: "" },
            { name: 'Node', icon: node },
            { name: 'TypeScript', icon: "" },
            { name: 'Figma', icon: figma },
            { name: 'React', icon: react },
            { name: 'ReactJs', icon: "" },
            { name: 'Tailwind css', icon: "" },
            { name: 'Ether.js', icon: "" },
            { name: 'Firebase', icon: "" },
            { name: 'Jest', icon: "" },
            { name: 'Solidity', icon: solidity },
            { name: 'EC2', icon: "" },

        ],
        processSteps: [
            {
                title: "Comprehensive Market Research",
                description: [
                    "Conducted in-depth market analysis to understand the competitive landscape and identify key differentiators for the client.",
                    "Identified target audience segments and their preferences."
                ]
            },
            {
                title: "Brand Development and Positioning",
                description: [
                    "Refined client's brand messaging to clearly communicate its unique value propositions.",
                    "Developed a cohesive brand identity that resonates with the Web3 and blockchain communities."
                ]
            },
            {
                title: "Content Marketing Strategy",
                description: [
                    "Created engaging and informative content, including blog posts, whitepapers, and explainer videos, to educate the audience about the client's platform.",
                    "Highlighted use cases and success stories to demonstrate the platform's capabilities and benefits."
                ]
            },
            {
                title: "Social Media Campaigns",
                description: [
                    "Developed and executed targeted social media campaigns across Twitter, Instagram, and Facebook to increase brand visibility and engagement.",
                    "Leveraged influencers and key opinion leaders in the blockchain space to amplify client's messaging."
                ]
            },
            {
                title: "Community Building Initiatives",
                description: [
                    "Organized online events, webinars, and AMAs (Ask Me Anything) to foster community interaction and engagement.",
                    "Created and managed a vibrant online community on platforms such as Telegram and Discord."
                ]
            },
            {
                title: "SEO and SEM Strategies",
                description: [
                    "Implemented search engine optimization (SEO) techniques to improve client's online visibility.",
                    "Ran search engine marketing (SEM) campaigns to drive targeted traffic to client's website."
                ]
            },
            {
                title: "Analytics and Continuous Improvement",
                description: [
                    "Monitored campaign performance using advanced analytics tools to measure effectiveness.",
                    "Continuously optimized marketing strategies based on data-driven insights."
                ]
            }
        ],
        keyFeatures: [
            "Integration with a Conversational API: Utilized a robust conversational API to enable natural language processing",
            "Custom call handling: Ability for the integration application to handle specific call scenarios",
            "AI/ML-powered decision making: Implemented advanced machine learning models to make intelligent call flow decisions",
            "Programmable Text-to-Speech and Speech-to-Text capabilities",
            "Comprehensive User Interface: Intuitive dashboard for call management and analytics",
            "Call Recording and Transcription: Option to record calls and generate transcripts for analysis",
            "Integration with CRM systems: Seamless data exchange with popular CRM platforms",
            "Real-time Analytics: Detailed call statistics and performance metrics",
            "Multi-language Support: Ability to handle calls in various languages",
            "Customizable Workflows: Flexible system to adapt to different business processes",
            "AI Framework Development: We Leveraged advanced machine learning models to create an intelligent AI framework"
        ],
        mobileImage: dial2,
        keyFeaturesImage: dial3
    },
    {
        title: "WEB3.0 MARKETING PROJECT",
        subtitle: "How Maxtron elevated client's marketing strategy for success in the decentralized web3 space",
        heroImage: web31,
        industryInfo: "Blockchain, Decentralized Technology, Crypto Finance",
        projectDuration: "4 Months",
        theprocessText:"The Process",

        clientSatisfaction: 5.0,
        problemSolutionResult: [
            {
                heading: "Use Case",
                subheading: "",
                points: [
                    "Intellectual Property Rights Compliance",
                ]
            },
            {
                heading: "Problem",
                subheading: "Intellectual property rights compliance",
                points: [
                    "The marketing trends in the web3.0 were broken, with users were not being directed to the desired CTAs. The client's DApp and Dex were unable to reach the masses due to unclear messaging and lack of trust from the users. They were a new kid on the block in crypto space, additionally, venture capital had prioritized its investments in centralized projects. This made it challenging to raise funds and attract new customers. With the decline in value of most native cryptocurrencies due to the downturn in the crypto trading segment, the client's token faced significant devaluation. There was an urgent need to revitalize the project and rebuild market confidence, and create a sustainable flow of ecosystem participants."
                ]
            },
            {
                heading: "Solution",
                subheading: "",
                points: [
                    "We conducted thorough market analysis, including customer, competitor, and internal assessments, to develop a comprehensive marketing strategy. This involved creating user personas, mapping customer journeys, and aligning marketing efforts with business goals. We leveraged various channels including social media, content marketing, influencer partnerships, PR, community building, email campaigns, SEO/SEM, paid advertising, video marketing, podcast appearances, webinars, target-based outreach, lead magnets, newsletter building, social media activations, and key opinion leaders (KOLs).",
                    "We also maintained consistent communication with the team and their panel to ensure alignment and address any concerns promptly. Regular progress reports and strategy adjustments were made to optimize campaign performance."
                ]
            }
        ],
        techs: [],
        processSteps: [
            {
                title: "Comprehensive Market Research",
                description: ["Conducted in-depth market analysis to understand the competitive landscape and identify key opportunities. Developed detailed user personas and journey maps to gain insights into the target audience segments and their preferences."]
            },
            {
                title: "Brand Development and Positioning",
                description: ["Refined client's brand messaging to clearly communicate its unique value proposition. Developed a cohesive brand identity that resonates with the Web3 and blockchain communities."]
            },
            {
                title: "Content Marketing Strategy",
                description: ["Created a robust content calendar covering blog posts, whitepapers, and explainer videos to educate the audience about the client's platform. Developed thought leadership content to demonstrate the platform's capabilities and benefits."]
            },
            {
                title: "Social Media Campaigns",
                description: ["Designed and executed targeted social media campaigns across Twitter, Instagram, and Facebook to increase brand visibility and engagement. Leveraged trending topics and hashtags in the blockchain space to amplify reach and messaging."]
            },
            {
                title: "Community Building Initiatives",
                description: ["Established and nurtured online communities on platforms like Telegram to foster community interaction and support. Created and managed a vibrant online community on platforms such as Telegram and Discord."]
            },
            {
                title: "SEO and SEM Strategies",
                description: ["Implemented comprehensive SEO strategies to improve organic search rankings for key terms. Ran targeted search engine marketing (SEM) campaigns to drive targeted traffic to client's website."]
            },
            {
                title: "Analytics and Continuous Improvement",
                description: ["Set up robust tracking and analytics tools to measure effectiveness. Continuously optimized marketing strategies based on data-driven insights."]
            }
        ],
        keyFeatures: [
                {
                    title: "Increased Brand Awareness",
                    details: [
                        "Significant growth in social media followers and engagement rates across all platforms.",
                        "Improved brand recognition within the Web3 and blockchain communities."
                    ]
                },
                {
                    title: "Community Growth",
                    details: [
                        "Rapid expansion of the client's online community with active participation in discussions and events.",
                        "High levels of user engagement and feedback, contributing to product improvements."
                    ]
                },
                {
                    title: "Adoption and Usage",
                    details: [
                        "Notable increase in the number of developers and users adopting client's platform for their decentralized applications.",
                        "Positive feedback from the community on the platform's performance and usability."
                    ]
                },
                {
                    title: "Thought Leadership",
                    details: [
                        "Client established itself as a thought leader in the decentralized technology space through consistent content and thought-provoking discussions.",
                        "Frequent mentions and features in industry publications and media."
                    ]
                },
                {
                    title: "Analytics and Optimization",
                    details: [
                        "Measuring performance and adjusting strategies based on data-driven insights."
                    ]
                }
            ]
            
        ,
        mobileImage: web32,
        keyFeaturesImage: web33
    },

    {
        title: "HYPER CASUAL GAMES",
        subtitle: "",
        heroImage: hyper1,
        industryInfo: "Gaming, iGaming, Crypto Gaming",
        projectDuration: "2 Months",
        clientSatisfaction: 5.0,
        theprocessText:"The Process",
        problemSolutionResult: [
            {
                heading: "Problem",
                subheading: "",
                points: [
                    "The client's hyper casual game is engaging but takes too long to complete, deterring busy users and preventing the reuse of a core voting feature solution. They want the game optimized while keeping it enjoyable and innovative. The challenge is to reduce play time without compromising the game's appeal, and to integrate the voting feature more seamlessly. User retention is declining due to long gameplay, impacting monetization."
                ]
            },
            {
                heading: "Solution",
                subheading: "",
                points: [
                    "We conducted a comprehensive analysis of the game's mechanics and user engagement patterns. We redesigned the game flow to create shorter, more dynamic levels while preserving the core gameplay elements. The voting feature was seamlessly integrated into the game progression, enhancing user interaction. We also implemented a dynamic difficulty system to keep the game challenging yet achievable for all skill levels. Our UX and marketing teams also developed comprehensive gamification strategies to attract and retain users."
                ]
            }
        ],
        techs: [
            { name: 'MySQL DB', icon: mysql },
            { name: 'Alchemy', icon: "" },
            { name: 'NestJS', icon: nestjs },
            { name: 'Sequelize', icon: "" },
            { name: 'Node', icon: node },
            { name: 'TypeScript', icon: "" },
            { name: 'Figma', icon: figma },
            { name: 'React', icon: react },
            { name: 'ReactJs', icon: "" },
            { name: 'Tailwind css', icon: "" },
            { name: 'Ether.js', icon: "" },
            { name: 'Firebase', icon: "" },
            { name: 'Jest', icon: "" },
            { name: 'Solidity', icon: solidity },
            { name: 'EC2', icon: "" },
            { name: 'CI/CD', icon: "" },
            { name: 'OpenZeppelin', icon: "" },
            { name: 'Hardhat', icon: "" },
            { name: 'Unity 3D', icon: "" },
            { name: 'C#', icon: "" },
            { name: 'JavaScript', icon: "" },
            { name: 'Android Studio', icon: "" },
            { name: 'Xcode', icon: "" },
            { name: 'PlayFab', icon: "" },
            { name: 'AdMob', icon: "" },
            { name: 'Amplitude', icon: "" },
            { name: 'React Native', icon: "" }
        ],
        processSteps: [
            {
                title: "Product Scope",
                description: ["We started by having immersive sessions to understand the challenges and create a detailed plan for addressing those challenges head-on. This involved researching the use cases, analyzing different perspectives, and gathering all necessary information. We then had a deep discussion with the client to develop a value proposition. Finally, we outlined the key user stories and features needed to validate these assumptions in the Minimum Viable Product (MVP)."],
            },
            {
                title: "Product Rationale and Tech Scope", description: ["After an in-depth session with all the stakeholders, we gathered all the information needed to compile the definitive list of features for testing the main assumptions in a Proof of Concept (POC). Our blockchain tech experts, developers, product team, UX/UI, and tech architecture teams concentrated on addressing all the questions that arose during the scope preparation. They became ready to execute the plan with scrum methodology."]
            },
            {
                title: "Prototype", description: ["We developed a non-functional prototype to simulate user interactions, closely mirroring the final product. This phase was perfect for testing the information architecture and user experience (UX), and crucially, it gave stakeholders a tangible preview of the final product."]
            },
            { title: "Final Development", description: ["With the decisions finalised in the previous steps, we proceeded to develop the product using scrum cycles."] },
        ],
        keyFeatures: [
            "Proper Backend & Frontend Development - Tech Architecture, API",
            "Unity Game Dev, SDK Dev",
            "Game Design, UI/UX Design, Technical, Architectural, Functional Specifications",
            "Integration with Social Networks - Sharing Game Elements",
            "Integration with Blockchain Elements",
            "Functionality to Build Geolocated Community via Web Versions and Applications",
            "Game Logic Engine & 3D Environment Development"
        ],
        mobileImage: hyper3,
        keyFeaturesImage: hyper2
    },
    {
        title: "CREATE PROTOCOL",
        subtitle: "AI-based web 3.0 & infrastructure for digital content and media",
        heroImage: create1,
        industryInfo: "Gaming, iGaming, Crypto Gaming",
        projectDuration: "2 Months",
        theprocessText:"TECH AND INFRASTRUCTURE",
        clientSatisfaction: 5.0,
        problemSolutionResult: [
            {
                heading: "Use Case",
                subheading: "",
                points: [
                    "Intellectual Property Rights Compliance",
                ]
            },
            {
                heading: "Problem",
                subheading: "No Existing Solution for Cryptographers To Train AI Models with Integrity",
                points: [
                    "It's challenging to obtain legal permission from many IP owners to use their data, making it difficult to train AI models effectively. There's no comprehensive solution for cryptographers to comply with data rights while using current systems. Even those who want to be honest and ethical find it hard to get data legally compliant due to the lack of a simple method of tracking and rights management."
                ]
            },
            {
                heading: "Solution",
                subheading: "Ethical AI Solutions for Protecting Intellectual Property and Remaining Compliant",
                points: [
                    "To address these challenges, we propose implementing advanced AI-driven compliance tools which automate the process of obtaining and tracking permissions for data usage in AI training. This decentralized IP solution can streamline the process of obtaining permissions from multiple IP owners, ensuring compliance with data rights. By leveraging blockchain technology, we can create an immutable record of data usage and rights, ensuring access to legal and compliant data."
                ]
            }
        ],
        techs: [],
        processSteps: [
            { title: "Advanced algorithms to facilitate model refinement and continued inference", description: [""] },
            { title: "Decentralized Training and Inference Mechanism", description:[""] 
        },
            { title: "Decentralized storage solution", description: ["" ]},
            { title: "Utilizing Blockchain for Securing Transactions and Ownership", description:[""] 
        },
            { title: "Development of a user-friendly interface (UI) and a comprehensive Software Development Kit (SDK)", description: [""]}
        ],
        keyFeatures: [
            "Monetizing IP Through Virtual Data Training for AI Models Enabled By Creative Chain Method"
        ],
        mobileImage: create2,
        keyFeaturesImage: create3
    },


];