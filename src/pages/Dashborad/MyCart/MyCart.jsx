import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaRegTrashCan } from "react-icons/fa6";

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const total = cart.reduce((acc, obj) => acc + obj.price, 0);

    return (
        <div className='bg-white p-5'>
            <>
                <Helmet>
                    <title>BristoBoss | MyCart</title>
                </Helmet>
                <div className=''>
                    <div className='flex justify-evenly items-center my-4'>
                        <h2 className="text-2xl">Total Orders: {cart.length}</h2>
                        <h2 className="text-2xl">Total Price: ${total}</h2>
                        <button className='btn bg-[#D1A054]'>Pay</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054]'>
                                <tr>
                                    <th>#</th>
                                    <th>Item image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button className="btn bg-red-400 text-white"><FaRegTrashCan /></button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        </div>
    );
};

export default MyCart;