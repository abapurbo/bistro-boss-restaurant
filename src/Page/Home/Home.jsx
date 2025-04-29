import React from 'react';
import Banner from './Banner/Banner';
import Category from './Cateogy/Category';
import CheifService from './Cateogy/CheifService';
import PopularMenu from './PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CheifService></CheifService>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;