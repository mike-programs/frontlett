import img1 from '../assets/icons/Polygon 1.png'
import img2 from '../assets/icons/Polygon 2.png'
import img3 from '../assets/icons/Polygon 3.png'

// import process illustrations

import pImg3 from '../assets/icons/solar_document-add-outline.svg'
import pImg2 from '../assets/icons/guidance_meeting-room.svg'
// import pImg1 from '../assets/icons/fluent-mdl2_onboarding.svg'
import pImg4 from '../assets/icons/Vector.svg'
import pImg1 from '../assets/icons/1.svg'

type ConceptInnovation = { header: string, body: string };

const conceptInnovations: ConceptInnovation[] = [{
    header: "service incubator",
    body: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP"
},
{
    header: "virtualting",
    body: "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource"
},
{
    header: "diming",
    body: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice "
},
];

let imageCardVariant: { imgsrc: string, body: string }[]

imageCardVariant = [{
    imgsrc: img1,
    body: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don\'t have family and friends\'; network that can support"
}, {
    imgsrc: img2,
    body: "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment    "
},
{
    imgsrc: img3,
    body: "Young professionals who don\'t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return"
}
]

interface numberCard {
    number: number,
    title: string,
    body: string,
    backgroundColor: string
}


const numberCards: numberCard[] = [{
    number: 1,
    title: "we idiate",
    body: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market",
    backgroundColor: "darkCard"
},
{
    number: 2,
    title: "you validate",
    body: "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea.",
    backgroundColor: "orangeCard"
},
{
    number: 3,
    title: "your co-own",
    body: "After successful validation and end of the InResidence program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO",
    backgroundColor: "pinkCard"
},
]

const incubationProcess: {
    title: string,
    body: string,
    imgsrc: string
}[] = [
        {
            title: "application and selection",
            body: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.",
            imgsrc: pImg1

        },
        {
            title: "alignment meeting and proposal submission",
            body: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
            imgsrc: pImg2

        },
        {
            title: "negotiation and agreement",
            body: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
            imgsrc: pImg3

        },
        {
            title: "onboarding and integration",
            body: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
            imgsrc: pImg4

        },
    ]

export default conceptInnovations
export { imageCardVariant, numberCards, incubationProcess }