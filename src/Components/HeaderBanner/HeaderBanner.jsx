import React from 'react';
import './HeaderBanner.css'
import DescriptionText from '../Description-text/DescriptionText';
import Button from '../Button/Button';

const HeaderBanner = () => {
    return (
        <div className='max-w-screen-xl grid grid-cols-2 mx-auto p-8'>
                <div className='p-12'>
                    <div className='banner-text'>One Step Closer To Your <span className='banner-text-blue'> Dream Job</span></div>
                    <DescriptionText>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</DescriptionText>
                    <div>
                        <Button>Get Started</Button>
                    </div>
                </div>
                <div>
                    <img className='w-full h-full rounded-md' src="https://wallpaperaccess.com/full/1393198.jpg" alt="happy client" />
                </div>
            </div>
    );
};

export default HeaderBanner;