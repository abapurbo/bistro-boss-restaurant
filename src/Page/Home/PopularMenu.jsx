import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Commponents/SectionTitle';
import MenuItem from './MenuItem';
import UseMenu from '../../hook/UseMenu';

const PopularMenu = () => {
    const { menu } = UseMenu()
    const popular=menu.filter(item=>item.category==='popular')
    return (
        <div className='my-10'>
            <SectionTitle subHeading='Check it out' heading='from our menu'>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-7 my-10 mx-20'>
                {
                    popular.map((item, index) => <MenuItem key={index} item={item} ></MenuItem>)
                }
            </div>
            <button className='btn btn-outline btn-primary border-0 border-b-4 '>Veiew Recipe</button>
        </div>
    );
};

export default PopularMenu;