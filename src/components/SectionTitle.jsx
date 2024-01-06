import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='w-4/12 text-center mx-auto my-6 flex flex-col items-center'>
            <p className='text-yellow-500 capitalize'>---{subHeading}---</p>
            <h2 className='border-0 border-y-2 py-2 mt-2 text-3xl uppercase'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;