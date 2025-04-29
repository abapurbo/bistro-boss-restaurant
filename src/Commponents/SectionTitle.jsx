import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto'>
            <p className='text-orange-300 text-center my-2'>---{subHeading}---</p>
            <h1 className='text-4xl text-center uppercase border-y-3 py-4  border-gray-200'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;