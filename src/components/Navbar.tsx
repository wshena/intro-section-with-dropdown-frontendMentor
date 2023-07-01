// import react from 'react';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import iconMenu from '../assets/icon-menu.svg';
import iconCloseMenu from '../assets/icon-close-menu.svg';
import arrowUp from '../assets/icon-arrow-up.svg';
import arrowDown from '../assets/icon-arrow-down.svg';

import iconTodo from '../assets/icon-todo.svg';
import iconReminders from '../assets/icon-reminders.svg';
import iconPlanning from '../assets/icon-planning.svg';
import iconCalender from '../assets/icon-calendar.svg';

const FeatureDropDownContent: React.FC = () => {
    return (
        <div className='flex flex-col p-3 md:absolute md:right-1 md:top-10 md:p-[25px] md:rounded-xl md:bg-white md:w-[190%] md:shadow-2xl'>
            <div className='flex items-center'>
                <img src={iconTodo} alt="todo-icon" className='mr-4'/>
                <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Todo List</a>
            </div>
            <div className='flex items-center mt-[27px]'>
                <img src={iconCalender} alt="calender-icon" className='mr-4'/>
                <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Calender</a>
            </div>
            <div className='flex items-center mt-[27px]'>
                <img src={iconReminders} alt="reminder-icon" className='mr-4'/>
                <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Reminders</a>
            </div>
            <div className='flex items-center mt-[27px]'>
                <img src={iconPlanning} alt="planning-icon" className='mr-4'/>
                <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Planning</a>
            </div>
        </div>
    )
}

const CompanyDropDownContent = () => {
    return (
        <div className='flex flex-col p-3 md:absolute md:left-0 md:top-10 md:p-[25px] md:rounded-xl md:bg-white md:w-[190%] md:shadow-2xl md:items-start'>
            <a href="#" className='text-MediumGray hover:text-AlmostBlack'>History</a>
            <a href="#" className='text-MediumGray hover:text-AlmostBlack mt-[27px]'>Our Team</a>
            <a href="#" className='text-MediumGray hover:text-AlmostBlack mt-[27px]'>Blog</a>
        </div>
    )
}

const Navbar: React.FC = () => {
    const [icon, setIcon] = useState(arrowDown);
    const [icon2, setIcon2] = useState(arrowDown);
    const [isClick, setIsClick] = useState(false);
    const toggleNavigationMobile = () => {
        setIsClick(!isClick);
    }

    const [isFeatureDropDownClick, setFeatureDropDownClick] = useState(false);
    const FeatureDropDownMenuMobile = () => {
        setFeatureDropDownClick(!isFeatureDropDownClick);
        setIcon(icon === arrowDown ? arrowUp : arrowDown);
    }

    const [isCompanyDropDownClick, setCompanyDropDownClick] = useState(false);
    const companyDropDownMenuMobile = () => {
        setCompanyDropDownClick(!isCompanyDropDownClick);
        setIcon2(icon2 === arrowDown ? arrowUp : arrowDown);
    }

    return (
        <>
        <nav className='p-[20px] md:p-[40px] flex justify-between items-center font-custom'>
            <div className='flex justify-between'>
                <img src={logo} alt="company-logo" className='md:mr-[60px] w-[82px] h-[26px] hover:cursor-pointer'/>
                <div className='hidden md:flex'>
                    <button className='md:relative flex items-center mr-[40px]' onClick={FeatureDropDownMenuMobile}>
                        <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Features</a>
                        <img src={icon} alt="arrow-up" className='ml-2' />
                    {
                        isFeatureDropDownClick && (
                            <FeatureDropDownContent />
                        )
                    }
                    </button>
                    <button className='md:relative flex items-center mr-[40px]' onClick={companyDropDownMenuMobile}>
                        <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Company</a>
                        <img src={icon2} alt="arrow-up" className='ml-2' />
                        {
                                isCompanyDropDownClick && (
                                <CompanyDropDownContent />
                            )
                        }
                    </button>
                    <a href="#" className='mr-[40px] text-MediumGray hover:text-AlmostBlack'>Careers</a>
                    <a href="#" className=' text-MediumGray hover:text-AlmostBlack'>About</a>
                </div>
            </div>
            <div className='hidden md:block'>
                <button className='text-MediumGray hover:text-AlmostBlack'>Login</button>
                <button className='text-MediumGray border border-MediumGray rounded-lg px-3 py-2 ml-[40px] hover:border-AlmostBlack hover:text-AlmostBlack'>Register</button>
            </div>
            <button onClick={toggleNavigationMobile} className='md:hidden'>
                <img src={iconMenu} alt="" />
            </button>

            {
                isClick && (
                    <div className='w-[100%] absolute top-0 right-0 h-[100vh] flex'>
                        <div className='w-[30%] bg-MediumGray h-[100vh] opacity-80'></div>
                        <div className='w-[70%] bg-AlmostWhite h-[100vh] opacity-none p-[22px]'>
                            <button type="submit" className='absolute right-[22px]' onClick={toggleNavigationMobile}>
                                <img src={iconCloseMenu} alt="close-menu" />
                            </button>
                            <div className='flex flex-col mt-[82px]'>
                                <button className='flex items-center' onClick={FeatureDropDownMenuMobile}>
                                    <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Features</a>
                                    <img src={icon} alt="arrow-up" className='ml-2' />
                                </button>
                                    {
                                        isFeatureDropDownClick && (
                                            <FeatureDropDownContent />
                                        )
                                    }
                                <button className='flex items-center mt-[27px]' onClick={companyDropDownMenuMobile}>
                                    <a href="#" className='text-MediumGray hover:text-AlmostBlack'>Company</a>
                                    <img src={icon2} alt="arrow-up" className='ml-2' />
                                </button>
                                    {
                                        isCompanyDropDownClick && (
                                            <CompanyDropDownContent />
                                        )
                                    }
                                <a href="#" className='text-MediumGray hover:text-AlmostBlack mt-[27px]'>Careers</a>
                                <a href="#" className='text-MediumGray hover:text-AlmostBlack mt-[27px] mb-[41px]'>About</a>
                            </div>
                            <div className='flex flex-col'>
                                <button className='text-MediumGray hover:text-AlmostBlack mb-[16px]'>Login</button>
                                <button className='text-MediumGray border border-MediumGray rounded-xl px-3 py-2 hover:border-AlmostBlack hover:text-AlmostBlack'>Register</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </nav>
        </>
    )
}

export default Navbar;