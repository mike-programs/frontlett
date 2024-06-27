import PrimaryButton from '../buttons/PrimaryButton'
import img1 from '../../assets/images/hero-img1.png'
import img2 from '../../assets/images/hero-image2.png'
import img3 from '../../assets/images/hero-image3.png'
import sliderIndicator from '../../assets/images/Frame 1000002758.svg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function LandingPage() {
    return (

        //Implement Slider here
        <div className='p-4 lg:px-32'>

            {/* <Carousel responsive={responsive}> */}
            {/* 1st slide */}
            <div className='flex'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='text-heading text-xl'>SINC Partners is a service incubation company</h2>
                        <p className='text-text leading-6'>
                            Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                        </p>
                    </div>
                    <PrimaryButton title='SINC with us' bg='darkCard' text='white' />
                </div>

                <img src={img1} alt='blank' className='hidden lg:block'></img>
            </div>


            {/* 2nd slide */}
            <div className='hidden'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='text-heading text-xl'>We are big on these 3 things;</h2>
                        <ul>
                            <li className='text-text'>✓ Service Incubation & Ecosystem Advocacy</li>
                            <li className='text-text'>✓ Building SAAS & Marketing Tech Platform</li>
                            <li className='text-text'>✓ Institutional Innovations</li>
                        </ul>
                    </div>
                    <PrimaryButton title='SINC with us' bg='darkCard' text='white' />
                </div>

                <img src={img2} alt='blank' className='hidden'></img>
            </div>


            {/* 3rd slide */}
            <div className='hidden'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='text-heading text-xl'>Come with an idea, leave with a company.</h2>
                        <p className='text-text leading-6'>
                            You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.
                        </p>
                    </div>
                    <PrimaryButton title='SINC with us' bg='darkCard' text='white' />
                </div>

                <img src={img3} alt='blank' className='hidden'></img>
            </div>
            {/* </Carousel> */}

            {/* Temporary slider Indicator */}
            <img src={sliderIndicator} alt='slider' className='my-5 mx-auto' />
        </div>
    )
}
