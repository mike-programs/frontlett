import logo from '../../assets/icons/SINC LOGO black outline 1.svg'
import hamburger from '../../assets/icons/vuesax/linear/vuesax/linear/menu.svg'
import PrimaryButton from '../buttons/PrimaryButton'

export default function Navbar() {
    return (
        <nav className='px-4 py-4 bg-primary lg:px-32'>
            <div className='flex lg:justify-between'>
                <div className='flex lg:gap-6 justify-between w-full lg:w-min'>
                    <img src={logo} alt='sinc logo' className='w-20 lg:w-full' />
                    <img src={hamburger} alt='hamburger menu' className='lg:hidden' />
                    <div className='hidden lg:flex text-heading capitalize gap-3 items-center font-medium'>
                        <span>about</span>
                        <span className='uppercase'>sip</span>
                        <span>studio</span>
                        <span className='uppercase'>seeq</span>
                        <span>platforms</span>
                        <span>initiatives</span>
                        <span>more</span>
                    </div>
                </div>

                <div className='lg:flex gap-3 hidden'>
                    <PrimaryButton title='SINC with us' bg='greenCard' text='white' />
                    <PrimaryButton title='Apply to SIP 1.0' bg='darkCard' text='white' />
                </div>
            </div>
        </nav>
    )
}
