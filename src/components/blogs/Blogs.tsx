import blog1 from '../../assets/images/blog-img1.png'
import blog2 from '../../assets/images/blog-img2.png'
import blog3 from '../../assets/images/blog-img2.png'

import img1 from '../../assets/images/blog.png'
import img2 from '../../assets/images/blog2.png'
import img3 from '../../assets/images/blog3.png'

export default function Blogs() {
    return (
        <div className="bg-primary p-4 lg:px-24">
            <div>
                <h2 className="text-base text-heading capitalize font-medium text-center my-8 lg:text-5xl lg:my-16">blogs and resources</h2>
                <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
                    <img src={blog1} alt="image" className='w-full' />
                    <img src={blog2} alt="image" className='w-full' />
                    <img src={blog3} alt="image" className='w-full' />
                </div>
            </div>

            <div className='flex flex-col gap-4 my-4 lg:flex-row lg:gap-8 lg:my-10'>
                <div className='flex'>
                    <div>
                        <h2 className='text-heading font-medium my-1 '>Top Ten Most Powerful Startup</h2>
                        <p className=''>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    <img src={img1} alt='image' />
                </div>

                <div className='flex'>
                    <div>
                        <h2 className='text-heading font-medium my-1 '>Top Ten Most Powerful Startup</h2>
                        <p className=''>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    <img src={img2} alt='image' />
                </div>

                <div className='flex'>
                    <div>
                        <h2 className='text-heading font-medium my-1 '>Top Ten Most Powerful Startup</h2>
                        <p className=''>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    <img src={img3} alt='image' />
                </div>
            </div>

            <p className='text-heading text-center font-medium underline underline-offset-2 capitalize text-base'>see more blogs & resources</p>
        </div>
    )
}
