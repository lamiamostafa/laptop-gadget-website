import React from 'react';
import Footer from '../Shared/Footer';
import AboutUS from './AboutUS';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurMissions from './OurMissions';
import Products from './Products';
import Reviews from './Reviews';




const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <OurMissions></OurMissions>
            <Products></Products>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <AboutUS></AboutUS>
            <Footer></Footer>

        </div>
    );
};

export default Home;