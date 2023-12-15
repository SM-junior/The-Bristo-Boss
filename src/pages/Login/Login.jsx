import React from 'react'; import { Link } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    loadCaptchaEnginge(6); 
    return (
        <div className="hero min-h-screen w-[900px] mx-auto mt-10 border-orange-600">
            <div className="hero-content flex flex-col md:flex-row items-center content-around w-full">
                <div className='w-1/2 text-center my-4'>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold ">Login</h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100 my-7">
                        <form className="card-body">
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <LoadCanvasTemplate />
                            </div>
                            <div className="form-control">
                                <input type="text" name='captcha' placeholder='type here' className="input input-bordered" required />
                            </div>
                            <button className='btn btn-xs'>Validate Captcha</button>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div>
                                <Link to='/login'><p className='text-primary hover:scale-110 my-3'>Already registered? Go to log in</p></Link>
                                <p className='my-3'>Or sign up with</p>
                                <div className='flex items-center justify-around w-60 mx-auto'>
                                    <Link><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center'><FaFacebookF /></p></Link>
                                    <Link><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center'><FaGoogle /></p></Link>
                                    <Link><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center'><FaGithub /></p></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;