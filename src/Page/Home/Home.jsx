import React from 'react';
import Banner from './Banner/Banner';
import Category from './Cateogy/Category';
import CheifService from './Cateogy/CheifService';
import PopularMenu from './PopularMenu';
import Features from './Features/Features';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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