import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center w-5xl mx-auto'>
            
            <h1 className='text-3xl text-center'>We Build <br /> <span className='text-[#935eed]'>Productive</span> Apps</h1>
            <h5 className='text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</h5>
            <div className='flex gap-4'>
                <Link className='btn font-bold' to={`https://play.google.com/store/games?hl=en`} target="_blank">Google Play</Link>
                <Link className='btn font-bold' to={`https://www.apple.com/app-store/`} target="_blank">App Store</Link>
            </div>
            <div>
                <img src={'../../assets/hero.png'} alt="" />
            </div>
        </div>
    );
};

export default Banner;