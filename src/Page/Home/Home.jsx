import React from 'react';
import Banner from './Banner/Banner';
import Category from './Cateogy/Category';
import CheifService from './Cateogy/CheifService';
import PopularMenu from './PopularMenu';
import Features from './Features/Features';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CheifService></CheifService>
            <PopularMenu></PopularMenu>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;