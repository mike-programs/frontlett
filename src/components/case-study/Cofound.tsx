import Card from './Card';
import { numberCards, incubationProcess } from '../../utils/data';
import sliderIndicator from '../../assets/images/Frame 1000002758.svg'
import arrows from '../../assets/icons/arrows.svg'


export default function Cofound() {
    return (
        <div>
            <div className="flex flex-col gap-3 text-center lg:gap-8">
                <h2 className="text-heading text-base capitalize lg:text-5xl">co-found with us</h2>
                <p className="font-light capitalize lg:mb-4">We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed </p>
            </div>

            <div className='grid gap-4 lg:grid-cols-3 lg:gap-8'>
                {numberCards.map((card, i) => (
                    <Card title={card.title} body={card.body} backgroundColor={card.backgroundColor} number={card.number} key={i} />
                ))}
            </div>

            {/* how it works */}

            {/* for desktop */}

            <div className='hidden lg:flex text-center flex-col gap-4 my-12'>
                <h2 className="text-heading text-base capitalize lg:text-5xl">co-found with us</h2>
                <p className='font-light capitalize max-w-[55rem] mx-auto'>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
            </div>

            <div className='my-8'>
                <h2 className='capitalize text-heading font-medium text-center lg:hidden'>service incubation process</h2>

                <div className='grid gap-4 lg:grid-cols-4'>
                    {incubationProcess.map((card, i) => (
                        <Card title={card.title} body={card.body} imgsrc={card.imgsrc} key={i} />
                    ))}
                </div>
            </div>

            <p className='hidden font-semibold capitalize underline underline-offset-2 text-heading'>become a service incubator</p>

            <img src={sliderIndicator} alt='slider' className='my-5 mx-auto' />
            <img src={arrows} alt="arrow placeholder" className='mx-auto' />
        </div>
    )
}
