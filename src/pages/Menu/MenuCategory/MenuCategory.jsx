import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={`/shop/${title}`}><div className='mx-auto text-center'><button className='btn btn-outline uppercase border-0 border-b-2 text-black mt-4'>order your favorite food</button></div></Link>
        </div>
    );
};

export default MenuCategory;