// import { useState } from 'react';
// image importing
import imgMainDesktop from '../assets/image-hero-desktop.png';
import imgMainMobile from '../assets/image-hero-mobile.png';
import clientAudioPhile from '../assets/client-audiophile.svg';
import clientDataBiz from '../assets/client-databiz.svg';
import clientMaker from '../assets/client-maker.svg'
import clientMeet from '../assets/client-meet.svg';

const Main: React.FC = () => {

    return (
        <>
        <div className="md:p-[100px] lg:p-[170px] lg:w-[100vw] font-custom flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="pt-[50px] pb-[50px] p-[20px] md:p-0 w-[100%] md:w-[50%] order-2 md:order-1">
                <div className='w-[100%] text-center md:text-left'>
                    <h1 className="text-[27px] font-[700] md:hidden">Make remote work</h1>
                    <h1 className="text-[27px] lg:text-[60px] md:text-[40px] font-[700] hidden md:block">Make</h1>
                    <h1 className="text-[27px] lg:text-[60px] md:text-[40px] font-[700] mt-[-30px] hidden md:block ">remote work</h1>
                </div>
                <div className='mt-[30px] mb-[30px] md:mt-[70px] md:mb-[54px] w-[100%] md:w-[80%] text-center md:text-left'>
                    <p className='text-MediumGray font-[12px]'>Get your team in a sync, no matter your location.
                        Streamline processes, create teams rituals, and
                        watch productivity soar.
                    </p>
                </div>
                <div className='flex justify-center items-center mb-[48px] md:mb-[100px] md:justify-start'>
                    <button type="submit" className='font-bold text-AlmostWhite bg-AlmostBlack p-[20px] rounded-lg hover:text-AlmostBlack hover:bg-AlmostWhite border'>Learn More</button>
                </div>
                <div className='flex justify-between items-center w-[100%] md:w-[80%]'>
                    <img src={clientDataBiz} alt="client-databiz" className=' h-[18px] md:h-[20px]'/>
                    <img src={clientAudioPhile} alt="client-audiophile" className=' h-[18px] md:h-[20px]'/>
                    <img src={clientMeet} alt="client-meet" className=' h-[18px] md:h-[20px]'/>
                    <img src={clientMaker} alt="client-maker" className=' h-[18px] md:h-[20px]'/>
                </div>
            </div>

            <div className='w-[100%] md:w-[50%] order-1 md:order-2 '>
                <img src={imgMainDesktop} alt="hero-img-desktop" className='hidden md:block'/>
                <img src={imgMainMobile} alt="hero-img-mobile" className='md:hidden block'/>
            </div>
        </div>
        </>
    )
}

export default Main;