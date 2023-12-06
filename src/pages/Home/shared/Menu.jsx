import React from 'react';

const Menu = ({ items }) => {
    const { name, recipe, price, image } = items;

    return (
        <>
            <div className='flex justify-around'>
                <img className='w-16 rounded-tr-full rounded-br-full rounded-bl-full' src={image} alt="" />
                <div>
                    <h2 className='text-xl'>{name}----------------</h2>
                    <p className='text-[13px]'>{recipe}</p>
                </div>
                <p className='text-yellow-400'>{price}</p>
            </div>
        </>
    );
};

export default Menu;