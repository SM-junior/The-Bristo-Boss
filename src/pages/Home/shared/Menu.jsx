import React from 'react';

const Menu = ({ items }) => {
    const { name, recipe, price, image } = items;

    return (
        <>
            {/* <div className='grid md:grid-cols-1'> */}
                <div className='flex gap-2 px-3'>
                    <img className='w-16 h-16 rounded-tr-full rounded-br-full rounded-bl-full' src={image} alt="" />
                    <div>
                        <h2 className='text-xl'>{name}----------------</h2>
                        <p className='text-[13px]'>{recipe}</p>
                    </div>
                    <p className='text-orange-400'>${price}</p>
                </div>
            {/* </div> */}
        </>
    );
};

export default Menu;