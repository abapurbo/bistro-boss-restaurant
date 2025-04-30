import React from 'react';
import SectionTitle from '../../../Commponents/SectionTitle';
import '../Features/Features.css'
import featureImg from '../../../assets/home/featured.jpg'
const Features = () => {
    return (
        <div className='background-img  my-10'>

            <div className='absolute w-12/12 text-white p-10'>
                <SectionTitle subHeading='Check it out' heading='From our menu'></SectionTitle>

                <div className='flex justify-between items-center mt-10 mx-16 space-x-6 px-20'>
                    <div>
                        <img className='h-66 bg-cover w-[1000px]' src={featureImg} alt="" />
                    </div>
                    <div>
                        <h1>Aug 20, 2023</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est provident maiores ab at repellat suscipit beatae doloremque ut sint, totam modi recusandae earum saepe odit magnam quae corporis dolorem deserunt!</p>
                        <button className="btn btn-outline border-0 border-b-3  mt-10 font-semibold">Order now</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Features;