import SecondaryButton from '../buttons/SecondaryButton';
import Portfolio from './Portfolio';
import rightArrow from '../../assets/icons/down-right 1.png';



export default function CaseStudy() {


    return (
        <div className='p-4 py-6 bg-primary lg:px-32'>
            <div className='flex flex-col gap-4'>
                <div className='lg:text-left text-center'>
                    <h1 className='text-lg capitalize font-medium text-heading lg:text-3xl lg:font-normal lg:my-2'>case study</h1>
                    <p className=''>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
                </div>

                <div className='flex flex-col gap-2 items-stretch justify-center lg:flex-row lg:justify-start'>
                    <SecondaryButton title='service incubator equity' />
                    <SecondaryButton title='SEEQ maths equation' />
                    <SecondaryButton title='Value of my Equity Over Time' />
                </div>
            </div>

            <div className='flex text-left mx-auto gap-1 justify-center my-10'>
                <p className='font-semibold capitalize underline underline-offset-2 text-heading'>become a service incubator</p>
                <img src={rightArrow} alt="right arrow" />
            </div>

            <Portfolio />
        </div>
    );
}
