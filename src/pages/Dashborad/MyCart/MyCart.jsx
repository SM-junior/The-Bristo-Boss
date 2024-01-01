import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart]=useCart();
    console.log(cart);
    const total=cart.reduce((acc, obj) => acc + obj.price, 0);
    return (
        <div>
            <Helmet>
                <title>BristoBoss | MyCart</title>
            </Helmet>
            <div className=''>
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl">Total Orders: {cart.length}</h2>
                    <h2 className="text-2xl">Total Price: ${total}</h2>
                    <button className='btn bg-[#D1A054]'>Pay</button>
                </div>
                
            </div>
        </div>
    );
};

export default MyCart;