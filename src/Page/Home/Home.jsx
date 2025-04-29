import React from 'react';
import Banner from './Banner/Banner';
import Category from './Cateogy/Category';
import CheifService from './Cateogy/CheifService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CheifService></CheifService>
        </div>
    );
};

export default Home;