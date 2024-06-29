import { useState, useEffect } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

const slides = [
    {
        heading: "SINC Partners is a service incubation company",
        text: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
        bgClass: "bg-hero1",
    },
    {
        heading: "Come with an idea, leave with a company.",
        text: "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
        bgClass: "bg-hero2",
    },
    {
        heading: "We are big on these 3 things;",
        text: "✓ Service Incubation & Ecosystem Advocacy\n✓ Building SAAS & Marketing Tech Platform\n✓ Institutional Innovations",
        bgClass: "bg-hero3",
        hasOverlay: true
    }
];

export default function LandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className='p-4 lg:p-0'>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`grid lg:grid-cols-2 transition-opacity duration-5000 lg:relative ${index === currentSlide ? 'opacity-100' : 'opacity-0'} ${index === currentSlide ? 'block' : 'hidden'}`}
                >
                    <div className='flex flex-col gap-4 lg:p-32 lg:gap-6'>
                        <div className='lg:text-2xl'>
                            <h2 className='text-heading lg:text-4xl lg:font-medium lg:leading-[3.5rem]'>{slide.heading}</h2>
                            <p className='text-text leading-6 lg:font-light lg:leading-10'>
                                {slide.text}
                            </p>
                        </div>
                        <PrimaryButton title='SINC with us' bg='darkCard' text='white' />
                    </div>

                    <div className={`hidden lg:block ${slide.bgClass} w-full h-[65vh] bg-cover bg-no-repeat overflow-hidden`}>
                    </div>

                    {slide.hasOverlay && <div className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-max hidden lg:grid gap-4'>
                        <div className='bg-customGradient p-2 px-7 w-full text-white rounded-full flex flex-col items-center gap-1'>
                            <p className='text-xl font-semibold uppercase'>sip 1.0</p>
                            <p className='text-sm font-light'>2024 cohort</p>
                        </div>

                        <div className='bg-customGradient p-2 px-7 w-full text-white rounded-full flex flex-col items-center gap-1'>
                            <p className='text-xl font-semibold'>40 +</p>
                            <p className='text-sm font-light'>to be included</p>
                        </div>


                        <div className='bg-customGradient p-2 px-7 w-full text-white rounded-full flex flex-col items-center gap-1'>
                            <p className='text-xl font-semibold'>$1M+</p>
                            <p className='text-sm font-light'>to be invested</p>
                        </div>

                    </div>}
                </div>
            ))}
        </div>
    );
}
