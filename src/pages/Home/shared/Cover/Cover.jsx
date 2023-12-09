import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { useState } from 'react';


const Cover = ({ img, title}) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='text-white'> 
                        <div className='lg:w-[900px] md:w-[500px] mx-auto bg-black flex flex-col items-center justify-center bg-opacity-30 rounded-lg py-20'>
                            <div>
                                <h2 className='text-4xl mb-2 boss'>{title}</h2>
                                <p className='details uppercase'>would you like to try this ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;