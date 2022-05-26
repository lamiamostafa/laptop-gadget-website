import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews';




const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;