import React from 'react';
import { useEffect, useState } from 'react';
import Menu from '../shared/Menu';
import '../../../pages/Home/shared/css/menu.css'
import SectionTitle from '../../../components/SectionTitle';
const PopularMenu = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "popular")
                setPopularItems(popularItem)
            })
    }, [])
    return (
        <>
            <section>
                <div className='grid grid-cols-2 gap-4 my-12'>
                    {
                        popularItems.map(items => <Menu
                            key={items._id}
                            items={items}
                        ></Menu>)
                    }
                </div>
                <div className='text-center'><button className='btn btn-outline capitalize border-0 border-b-4'>view full menu</button></div>
                <div className='bg-black py-16 text-white text-center my-20'><h2 className='text-2xl rail'>Call Us: +88 0192345678910</h2></div>
                <SectionTitle
                subHeading={"Should Try"}
                heading={'chef recommended'}
                ></SectionTitle>
            </section>

        </>
    );
};

export default PopularMenu;

