import React from 'react';
import banner from '../../assets/images/banner.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-[#06396C] ">Mostafa Electronic Co. LTD</h1>
                    <p className="py-6">Professional manufacturer of laptop batteries, laptop keyboards (support language customization), laptop adapters and power tool batteries</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;