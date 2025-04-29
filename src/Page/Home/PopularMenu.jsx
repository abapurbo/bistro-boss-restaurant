import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Commponents/SectionTitle';
import MenuItem from './MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(popularData => popularData.category==='popular')
               setMenu(popularMenu)
            })
    }, [])
    return (
        <div className='my-10'>
            <SectionTitle subHeading='Check it out' heading='from our menu'>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-7 my-10 mx-20'>
                {
                    menu.map((item,index)=><MenuItem key={index} item={item} ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;