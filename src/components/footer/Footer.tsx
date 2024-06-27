import PrimaryButton from '../buttons/PrimaryButton'
import sinc from '../../assets/logos/sinc-logo-white.png'
import flag from '../../assets/icons/Footer/twemoji_flag-nigeriaflag.svg'
import AC from '../../assets/icons/Footer/Outline ABA+ 1outlineAC.svg'
import whatsapp from '../../assets/icons/Footer/whatsapp-color-svgrepo-com 1.png'
import gasus from '../../assets/icons/Footer/GASUS white SVG-01 1.svg'

import facebook from '../../assets/icons/facebook-round-svgrepo-com.svg'
import twitter from '../../assets/icons/twitter-round-svgrepo-com.svg'
import instagram from '../../assets/icons/instagram-svgrepo-com.svg'
import linkedin from '../../assets/icons/linkedin-round-svgrepo-com 1.svg'
import medium from '../../assets/icons/medium-fill-svgrepo-com.svg'
import youtube from '../../assets/icons/youtube-fill-svgrepo-com.svg'
import unnamed from '../../assets/icons/unnamed 1.svg'


export default function Footer() {
    return (
        <div className='bg-heading text-lightText p-4 lg:px-32'>

            {/* newsletter */}
            <div className='grid gap-8'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl capitalize text-white lg:text-5xl'>newsletter</h1>
                    <p className='text-white max-w-[80%] lg:max-w-[40%]'>Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
                </div>

                <div className='flex relative max-w-lg'>
                    <input type='text' placeholder='Enter your email address' className='bg-transparent p-2 py-3 rounded-full border border-text w-full outline-none' />
                    <div className='absolute right-0'>
                        <PrimaryButton title='subscribe' bg="white" text='heading font-semibold' />
                    </div>
                </div>
            </div>

            <hr className='my-4'></hr>

            {/* nav footer */}
            <div>
                <div className='lg:flex'>
                    <div className='grid gap-3 lg:grid-cols-[20%_80%]'>
                        <div className='grid gap-4'>
                            <img src={sinc} alt="sinc logo" />
                            <p className='text-white text-xs font-light lg:mb-auto'>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
                        </div>
                        <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
                            <div>
                                <h2 className='capitalize mb-2 text-white'>platforms</h2>
                                <div className='grid gap-1'>
                                    <p>Kofoundme</p>
                                    <p>InResidency</p>
                                    <p>Service Market</p>
                                    <p>Founders School</p>
                                    <p>Metty</p>
                                    <p>Grantty</p>
                                    <p>Boldtell</p>
                                    <p>Chekwa</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='capitalize mb-2 text-white'>initiatives</h2>
                                <div className='grid gap-1'>
                                    <p>Jabi Plains</p>
                                    <p>Local Pricing Initiative</p>
                                    <p>Scholarship Program</p>
                                    <p>School Pricing Program</p>
                                    <p>University STEM  </p>
                                    <p>University InResidency </p>
                                    <p>1M Nigeria <img src={flag} alt='nigerian flag' className='inline' /> Products</p>
                                </div>
                                <p>Founders Festival </p>
                            </div>
                            <div>
                                <h2 className='capitalize mb-2 text-white'>about us</h2>
                                <div className='grid gap-1'>
                                    <p>Who We Are</p>
                                    <p>Our People</p>
                                    <p>Concept Innovations</p>
                                    <p>Our Process</p>
                                    <p>Investors</p>
                                    <p>CSR & Events</p>
                                    <p>Career</p>
                                    <p>Contact</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='capitalize mb-2 text-white'>more</h2>
                                <div className='grid gap-1'>
                                    <p>Services</p>
                                    <p>Equity Jobs</p>
                                    <p>Co-found with us</p>
                                    <p>Offers</p>
                                    <p>Innovation News</p>
                                    <p>FAQ</p>
                                    <p>Blog & Resources</p>
                                    <p>Press</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='my-4'></hr>
                    <div>
                        <div className='my-4'>
                            <h2 className='capitalize mb-2 text-white'>locations</h2>
                            <div className='grid gap-1'>
                                <p className='capitalize text-white text-xs font-light'>abuja, nigeria</p>
                                <p className='capitalize text-white text-xs font-light'>lagos nigeria</p>
                                <p className='capitalize text-white text-xs font-light'>philadelphia <span className='uppercase'>usa</span></p>
                            </div>
                        </div>


                        <div className='flex items-end gap-6'>
                            <div>
                                <img src={AC} alt="logo" />
                                <p className='capitalize text-white my-2'>trusted business</p>
                            </div>

                            <div>
                                <img src={whatsapp} alt="whatsapp logo" className='mx-auto' />
                                <p className='capitalize text-white my-2'>chat with us</p>
                            </div>
                        </div>

                        <hr className='my-4 lg:hidden'></hr>
                    </div>
                </div>

                <hr className='my-4 hidden lg:block'></hr>

                {/* last footer section */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 lg:flex-row'>
                        <div>
                            <p className='text-white font-thin text-center lg:text-left'>Guaranteed 2x on your service or cash investment, usually been the first to invest. <span className='font-medium'>Get in early and SINC your guaranty!</span></p>
                        </div>
                        <div className='flex flex-col gap-2 lg:flex-row items-start'>
                            <img src={gasus} alt="gasus logo" className='mx-auto lg:w-32 ' />
                            <p className='text-white text-center font-light lg:text-left'>We are a business built on the foundation of Christian values and belief</p>
                        </div>
                    </div>

                    <div className='lg:flex justify-between'>
                        <div>
                            <p className='text-white text-center'>© 2023 SINC Partners Ltd. All rights reserved</p>
                        </div>
                        <div className='flex justify-around text-xs my-2 lg:gap-4'>
                            <p className='capitalize text-white underline underline-offset-2'>privacy policy</p>
                            <p className='capitalize text-white underline underline-offset-2'>terms of service</p>
                            <p className='capitalize text-white underline underline-offset-2'>security</p>
                        </div>
                        <div className='flex gap-3 justify-center my-4'>
                            <img src={facebook} alt='logo' />
                            <img src={twitter} alt='logo' />
                            <img src={instagram} alt='logo' />
                            <img src={linkedin} alt='logo' />
                            <img src={medium} alt='logo' />
                            <img src={youtube} alt='logo' />
                            <img src={unnamed} alt='logo' />
                        </div>
                    </div>
                </div>
            </div>

            <p className='capitalize text-center'>web in nigeria<img src={flag} alt='logo' className='inline mx-2'></img></p>
        </div>
    )
}
