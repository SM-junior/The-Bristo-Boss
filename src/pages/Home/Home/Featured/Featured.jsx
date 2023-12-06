import React from 'react';
import img from '../../../../assets/home/featured.jpg'
import './Featured.css'
import moment from 'moment';
import SectionTitle from '../../../../components/SectionTitle';

const Featured = () => {
    const date = new Date()
    console.log(date.getDay());
    return (
        <div className='featured-bg text-white bg-fixed my-20'>
            <div className='py-6'>
                <SectionTitle
                    subHeading={"check it out"}
                    heading={'from our menu'}
                >
                </SectionTitle>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-20 px-20'>
                <img src={img} alt="" />
                <div className='px-6 text-[#FFFFFF]'>
                    <h2 className='text-xl'>{moment().format('MMMM D, YYYY')}</h2>
                    <h2 className='text-2xl capitalize'>where can i get some?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline uppercase border-0 border-b-2 text-white mt-4'>read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;