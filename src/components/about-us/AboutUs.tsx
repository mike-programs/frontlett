import PrimaryButton from "../buttons/PrimaryButton";
import AreaOfFocus from "./AreaOfFocus";
import CaseStudy from "../case-study/CaseStudy";
import rightArrow from '../../assets/icons/down-right 1.png';

export default function AboutUs() {
    return (
        <div>
            <div className='p-4 py-10 bg-primary lg:px-32 lg:py-20'>
                {/* card */}
                <div className="bg-white rounded-xl px-4 py-8 max-w-[40rem] mx-auto">
                    <div className="flex flex-col gap-6 text-center">
                        <p className="text-heading">"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"</p>
                        <div className="text-xs flex flex-col gap-2 font-light">
                            <p className="lg:font-semibold">
                                Daniel Izeghs Oratokhai
                            </p>
                            <p>
                                <span className="uppercase">mp & ceo</span> of <span className="uppercase">sinc</span> Partners Ltd
                            </p>
                        </div>
                    </div>
                </div>

                {/* read about us for mobile */}
                <div className="text-center py-4 flex flex-col gap-4 lg:hidden">
                    <h2 className="text-base text-heading">Building the future together, democratizing success.</h2>
                    <p className="font-light">
                        SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
                        We are a Gasus Business, a business built on the foundation of Christian values and belief.
                    </p>

                    <PrimaryButton title='SINC with us' bg='darkCard' text='white' />
                </div>

                {/* for desktop */}

                <div className="hidden lg:block">
                    <h1 className="mx-auto text-center text-heading text-5xl max-w-[45rem] my-12">Network of builders helping startup scale</h1>

                    <div className="flex gap-14 justify-center">
                        <div className="bg-white max-w-[26rem] p-4 rounded-lg grid gap-4">
                            <p className="font-medium text-heading text-base">Work with Service Incubators to expedite your time-to-market</p>
                            <div className="text-xs grid gap-3">
                                <p className="font-light">Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.</p>
                                <p>For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
                            </div>
                            <p className='text-heading font-medium underline underline-offset-2 capitalize text-xs'>learn more <img src={rightArrow} alt="right arrow" className="inline" /></p>
                        </div>
                        <div>
                            <div className="bg-white max-w-[26rem] p-4 rounded-lg grid gap-4">
                                <p className="font-medium text-heading text-base">Work with Service Incubators to expedite your time-to-market</p>
                                <div className="text-xs grid gap-3">
                                    <p className="font-light">Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.</p>
                                    <p>For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
                                </div>
                                <p className='text-heading font-medium underline underline-offset-2 capitalize text-xs'>learn more <img src={rightArrow} alt="right arrow" className="inline" /></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <AreaOfFocus />

            <CaseStudy />

        </div>
    )
}
