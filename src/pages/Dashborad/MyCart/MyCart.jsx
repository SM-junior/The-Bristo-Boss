import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2'
import SectionTitle from '../../../components/SectionTitle';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((acc, obj) => acc + obj.price, 0);

    const handleCartDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <>
            <SectionTitle
                subHeading='Cart'
                heading='Wanna Add More??'
            ></SectionTitle>
            <div className='bg-white p-5 w-full'>
                <Helmet>
                    <title>BristoBoss | MyCart</title>
                </Helmet>
                <div className=''>
                    <div className='flex justify-evenly items-center my-4 uppercase'>
                        <h2 className="text-2xl">Total Orders: {cart.length}</h2>
                        <h2 className="text-2xl">Total Price: ${total}</h2>
                        <button className='btn bg-[#D1A054]'>Pay</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] text-white uppercase'>
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
                                        <td className='text-slate-500'>
                                            {item.name}
                                        </td>
                                        <td className='text-slate-500 text-right'>${item.price}</td>
                                        <th>
                                            <button onClick={() => handleCartDelete(item)} className="btn bg-red-600 hover:bg-red-500 hover:scale-110 text-white"><FaRegTrashCan /></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCart;