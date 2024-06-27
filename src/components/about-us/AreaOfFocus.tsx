import Card from "./Card"
import conceptInnovations from "../../utils/data";
import { imageCardVariant } from "../../utils/data";

export default function AreaOfFocus() {
    return (
        <div className="p-4 bg-primary flex flex-col gap-6 lg:px-32 lg:gap-20">
            <div className=" text-center flex flex-col gap-2 lg:gap-8">
                <h2 className="text-base text-heading capitalize lg:text-5xl">our area of focus</h2>
                <p className="font-light lg:max-w-[35rem] mx-auto">
                    In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab
                </p>
            </div>
            { }
            <div className="flex flex-col lg:flex-row lg:justify-center">
                <div className="bg-darkCard p-4 text-white capitalize flex flex-col gap-4">
                    <p>01</p>
                    <p className="font-light text-xs">Business Support & Incubation</p>
                </div>
                <div className="bg-orangeCard p-4 text-white capitalize flex flex-col gap-4">
                    <p>02</p>
                    <p className="font-light text-xs">On-Demand & As-A-Service</p>
                </div>
                <div className="bg-pinkCard p-4 text-white capitalize flex flex-col gap-4">
                    <p>03</p>
                    <p className="font-light text-xs">Marketplace & Crowd sourcing</p>
                </div>
                <div className="bg-greenCard p-4 text-white capitalize flex flex-col gap-4">
                    <p>04</p>
                    <p className="font-light text-xs">Aggregation & Shared Economy</p>
                </div>
                <div className="bg-lightPinkCard p-4 text-white capitalize flex flex-col gap-4">
                    <p>04</p>
                    <p className="font-light text-xs">Decentralized Economy & Digital Assets</p>
                </div>
            </div>

            <div className=" text-center flex flex-col gap-2 lg:gap-8">
                <h2 className="text-base text-heading capitalize lg:text-5xl">our concept innovations</h2>
                <p className="font-light lg:max-w-[40rem] mx-auto">
                    We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;
                </p>
                <div className="grid gap-6 my-4 lg:grid-cols-3 lg:gap-20">
                    {conceptInnovations.map((card, i) => (
                        <div key={i}>
                            <Card header={card.header} body={card.body} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <div className="flex flex-col gap-3 lg:gap-8">
                    <h2 className="text-heading text-base capitalize lg:text-5xl">our service incubation model</h2>
                    <p className="font-light lg:max-w-[50rem] mx-auto">The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually 0.5% to 2%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
                </div>

                <div className="flex flex-col gap-3 my-5 lg:text-left">
                    <h2 className="text-heading text-base capitalize lg:text-3xl">hypothesis</h2>
                    <p className="font-light lg:max-w-[50rem]">Just a few reasons we know its time for this model within the ecosystem</p>
                </div>

                <div className="grid gap-6 my-4 lg:grid-cols-3">
                    {imageCardVariant.map((card, i) => (
                        <div key={i}>
                            <Card body={card.body} img={card.imgsrc} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
