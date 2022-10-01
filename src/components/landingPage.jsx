import React from 'react'
import LandingPageImage from '../assets/landingPage.svg'

const LandingPage = () => {
    return (
        <div className="bg-background flex flex-col md:flex-row flex-wrap content-center justify-center md:justify-evenly items-center min-h-screen py-3 md:py-0">
            <div className='font-helvetica text-center md:text-right md:order-last'>
                <div className='text-4xl md:text-5xl font-bold'>
                    <p className='text-primary'>Imagine if</p>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r to-purple from-pink'>SnapChat</p>
                    <p className='text-primary'>had events.</p>
                </div>
                <p className='text-secondary text-base md:text-xl w-80 sm:w-[400px] pt-1'>Easily host and share events with your friends across any social media.</p>
                <button className='hidden md:inline-block bg-gradient-to-r to-purple from-pink p-4 rounded-[10px] w-[210px] sm:w-[280px] font-bold text-white font-helvetica my-5'>🎉 Create my event</button>
            </div>
            <img src={LandingPageImage} alt="landing page image" className='w-[210px] sm:w-[280px] md:w-[480px] drop-shadow-sm' />
            <button className='inline-block md:hidden bg-gradient-to-r to-purple from-pink p-4 rounded-[10px] w-[210px] sm:w-[280px] font-bold text-white font-helvetica md:order-last'>🎉 Create my event</button>
        </div>
    )
}

export default LandingPage;