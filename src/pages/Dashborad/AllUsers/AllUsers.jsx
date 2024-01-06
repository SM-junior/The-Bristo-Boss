import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle';
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/users')
            return res.json()
        }
    })

    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:3000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire({
                    icon: "success",
                    title: `${user.name} is an Admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDelete = user => {
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
                fetch(`http://localhost:3000/users/${user._id}`, {
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
                subHeading='How many ?'
                heading='Manage all users'
            ></SectionTitle>
            <Helmet>
                <title>BristoBoss | All Users</title>
            </Helmet>
            <div className='bg-white p-5 w-full'>
                <h2 className='uppercase py-2'>Total users: {users.length}</h2>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(user)} className='btn btn-sm bg-[#D1A054] text-white'><FaUsers /></button>}</td>
                                    <td><button onClick={() => handleDelete(user)} className='btn btn-sm bg-red-700 text-white'><FaRegTrashAlt></FaRegTrashAlt></button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;