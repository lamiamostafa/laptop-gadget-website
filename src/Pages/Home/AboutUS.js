import React from 'react';
import about from '../../assets/images/about.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const AboutUS = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="  hero-content flex-col lg:flex-row-reverse">
                <img src={about} className=" w-4/5 rounded-lg shadow-2xl" />

                <div className="w-1/5">
                    <h1 className="text-3xl font-bold text-[#06396C] ">Welcome to Visit Our Factory</h1>
                    <p className="py-6 justify-center">Wholesale and manufacturing is our core advantage, our three factories enable us provide flexible wholesale and manufacturing services to customers with the most cost-effective ways</p>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;