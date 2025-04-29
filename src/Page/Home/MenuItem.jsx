import React from 'react';

const MenuItem = ({item}) => {
    console.log(item)
    const {image,name,price,recipe}=item
    return (
        <div className='flex flex-start items-start  space-x-6'>
            <img src={image} style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px] object-center bg-cover' alt="menu image" />
            <div>
                <h1 className='text-2xl text-gray-500 mb-2'>{name}------------</h1>
                <p className='text-gray-400'>{recipe}</p>
            </div>
            <p className='text-orange-400'>${price}</p>
        </div>
    );
};

export default MenuItem;