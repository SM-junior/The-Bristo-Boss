import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import './BristoBoss.css'

const BristoBoss = () => {
    return (
        <section>
            <div className=' text-black text-center my-10 bristo-boss py-20'>
                <div className=' w-3/4 mx-auto bg-white flex flex-col items-center justify-center bg-opacity-70 rounded-lg py-20'>
                    <h2 className='text-4xl mb-2 boss'>BRISTO BOSS</h2>
                    <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'from our menu'}
            >
            </SectionTitle>
        </section>
    );
};

export default BristoBoss;