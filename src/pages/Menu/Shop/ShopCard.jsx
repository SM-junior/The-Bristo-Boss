import React from 'react';

const ShopCard = ({item}) => {
    const {name, image, price, recipe}=item;
    return (
        <div className="card w-76 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className='absolute right-0 me-4 mt-4 px-1 bg-black text-white'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions">
                    <button className="btn hover:text-orange-400 hover:border-orange-400 hover:bg-slate-700 uppercase border-0 border-b-2 border-orange-500 text-black mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;