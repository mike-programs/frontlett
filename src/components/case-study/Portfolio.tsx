import { useEffect, useState } from 'react';
import rightArrow from '../../assets/icons/down-right 1.png';
import Cofound from './Cofound';

const images = import.meta.glob('../../assets/logos/*.{png,jpg,jpeg,gif}');

export default function Portfolio() {

    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        // Function to load images dynamically
        const loadImages = async () => {
            const imagePromises = Object.values(images).map(importFn => importFn());
            const loadedImages = await Promise.all(imagePromises);
            const urls = loadedImages.map(module => module.default);
            setImageUrls(urls);
        };
        loadImages();
    }, []);
    return (
        <div>
            <div className="flex flex-col gap-3 text-center lg:gap-8 lg:mb-8">
                <h2 className="text-heading text-base capitalize lg:text-5xl">our studio portfolio</h2>
                <p className="font-light capitalize">Our 2024 Service Incubator Portfolio Companies</p>
            </div>

            {/* Display the loaded images */}
            <div className='grid grid-cols-4 gap-4 mx-auto lg:grid-cols-8 lg:gap-8 lg:w-[80%]'>
                {imageUrls.map((url, index) => (
                    <div className='bg-white w-20 h-12 rounded-xl px-4' key={index}>
                        <img src={url} alt={`Logo ${index}`} className='h-16 w-16 object-contain' />
                    </div>
                ))}
            </div>

            <div className='flex text-left mx-auto gap-1 justify-center my-10'>
                <p className='font-semibold capitalize underline underline-offset-2 text-heading'>view all companies</p>
                <img src={rightArrow} alt="right arrow" />
            </div>

            <Cofound />


        </div>
    )
}
