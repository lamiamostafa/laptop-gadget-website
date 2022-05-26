import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Products from './Products';
// import Info from './Info';
// import MakeAppointment from './MakeAppointment';
// import Services from './Services';
// import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Products></Products>
            {/* <Info ></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials> */}
            <Footer></Footer>

        </div>
    );
};

export default Home;