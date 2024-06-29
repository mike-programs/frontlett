import Card from './Card';
import { numberCards, incubationProcess } from '../../utils/data';
import lArrow from '../../assets/icons/left-arrow.svg';
import rArrow from '../../assets/icons/right-arrow.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 30
    }
};

type ButtonGroupProps = {
    next: () => void;
    previous: () => void;
    carouselState: {
        currentSlide: number;
    };
};


const ButtonGroup = ({ next, previous, carouselState }: ButtonGroupProps) => {
    const { currentSlide } = carouselState;
    return (
        <div className="carousel-button-group absolute flex gap-10 lg:gap-14 justify-center bottom-0 left-1/2 -translate-x-1/2">
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={previous}>
                <img src={lArrow} alt="arrow placeholder" className='w-12' />
            </button>
            <button onClick={next}>
                <img src={rArrow} alt="arrow placeholder" className='w-12' />
            </button>
        </div>
    );
};

export default function Cofound() {
    return (
        <div>
            <div className="flex flex-col gap-3 text-center lg:gap-8">
                <h2 className="text-heading text-base capitalize lg:text-5xl">co-found with us</h2>
                <p className="font-light capitalize lg:mb-4">
                    We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed.
                </p>
            </div>

            <div className='grid gap-4 lg:grid-cols-3 lg:gap-8'>
                {numberCards.map((card, i) => (
                    <Card
                        title={card.title}
                        body={card.body}
                        backgroundColor={card.backgroundColor}
                        number={card.number}
                        key={i}
                    />
                ))}
            </div>

            <div className='hidden lg:flex text-center flex-col gap-4 my-12'>
                <h2 className="text-heading text-base capitalize lg:text-5xl">co-found with us</h2>
                <p className='font-light capitalize max-w-[55rem] mx-auto'>
                    Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
                </p>
            </div>

            <div className='my-8'>
                <h2 className='capitalize text-heading font-medium text-center lg:hidden'>service incubation process</h2>
                <div className=''>
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        arrows={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        transitionDuration={800}
                        containerClass="gap-2 h-[30rem] lg:h-[40rem]"
                        removeArrowOnDeviceType={[]}
                        renderDotsOutside={false}
                        dotListClass="custom-dot-list-style mb-[3.5rem] lg:mb-[5rem]"
                        customButtonGroup={<ButtonGroup next={function (): void {
                            throw new Error('Function not implemented.');
                        }} previous={function (): void {
                            throw new Error('Function not implemented.');
                        }} carouselState={{
                            currentSlide: 0
                        }} />}
                        customTransition='transform 300ms ease-in-out'
                    >
                        {incubationProcess.map((card, i) => (
                            <Card
                                title={card.title}
                                body={card.body}
                                imgsrc={card.imgsrc}
                                key={i}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>

            <p className='hidden font-semibold capitalize underline underline-offset-2 text-heading'>
                become a service incubator
            </p>
        </div>
    );
}
