
//using react hook form..................................................................................................
import { useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'

import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { authContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import GoogleLogin from '../../components/googleLogin';



const SignUp = () => {
    const [error, setError] = useState('')
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(authContext)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const signInUser = { name: data.name, email: data.email }
                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(signInUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "User has been created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset()
                                    navigate('/login')
                                }
                            })
                    })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        //using react hook form...............................................................................
        <>
            <Helmet>
                <title>Bristo Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen w-[900px] mx-auto mt-10 border-orange-600">
                <div className="hero-content flex flex-col md:flex-row items-center content-around w-full">
                    <div className='w-1/2 text-center my-4'>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold ">SignUp now!</h1>
                        </div>
                        <div className="card w-full shadow-2xl bg-base-100 my-7">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" {...register("photoUrl", { required: true })} placeholder="photo url" className="input input-bordered" />
                                    {errors.photoUrl && <span className='text-red-500'>Photo Url is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
                                    })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password must be less than 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one upper case, one lower case, one number & one special character</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-success' type="submit" value="SignUp" />
                                </div>
                                <p className='text-red-500'>{error}</p>
                            </form>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div></>
    );
};

export default SignUp;