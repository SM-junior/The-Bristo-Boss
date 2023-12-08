import React from 'react';
import Cover from '../../Home/shared/Cover/Cover';
import Menu from '../../Home/shared/Menu';

const MenuCategory = ({ items, title, img }) => {

    return (
        <div className='my-12'>
                {title && <Cover title={title} img={img}></Cover>}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-12'>
                {
                    items.map(items => <Menu
                        key={items._id}
                        items={items}
                    ></Menu>)
                }
            </div>
            <div className='mx-auto text-center'><button className='btn btn-outline uppercase border-0 border-b-2 text-black mt-4'>order your favourite food</button></div>
        </div>
    );
};

export default MenuCategory;