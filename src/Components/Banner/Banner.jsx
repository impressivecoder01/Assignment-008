import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center w-5xl mx-auto'>

            <h1 className='text-5xl font-bold text-center'>We Build <br /> <span className='text-[#935eed]'>Productive</span> Apps</h1>
            <h5 className='text-center my-5 font-semibold'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</h5>
            <div className='flex gap-4'>
                <Link className='btn font-bold' to={`https://play.google.com/store/games?hl=en`} target="_blank">Google Play</Link>
                <Link className='btn font-bold' to={`https://www.apple.com/app-store/`} target="_blank">App Store</Link>
            </div>
            <div>
                <img src={'../../assets/hero.png'} alt="" />
            </div>
            <div className='bg-[#8a50ed] w-full'>
                <div>
                    <h1 className='text-center text-6xl text-white font-extrabold pb-3'>Trusted By Millions, Built For You</h1>
                    <div className='flex justify-between text-white px-2'>
                        <div className='flex flex-col items-center'>
                            <h6 >Total Downloads</h6>
                            <h1 className='text-5xl font-bold '>29.99M</h1>
                            <h6>21% more than last month</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h6>Total Reviews</h6>
                            <h1 className='text-5xl font-bold'>906K</h1>
                            <h6>46% more than last month</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h6>Active Apps</h6>
                            <h1 className='text-5xl font-bold'>132+</h1>
                            <h6>31 more will Launch</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;