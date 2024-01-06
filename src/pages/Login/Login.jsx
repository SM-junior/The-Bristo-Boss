import React, { useEffect } from 'react'; import { useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useRef, useContext, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import GoogleLogin from '../../components/googleLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState()
    const { login } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value;

        if (validateCaptcha(value) == true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                console.log(result.user.displayName);
                Swal.fire({
                    icon: "success",
                    title: "Use login successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>Bristo Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen w-[900px] mx-auto mt-10 border-orange-600">
                <div className="hero-content flex flex-col md:flex-row items-center content-around w-full">
                    <div className='w-1/2 text-center my-4'>
                        <div className="text-center">
                            <h1 className="text-5xl font-bold ">Login</h1>
                        </div>
                        <div className="card w-full shadow-2xl bg-base-100 my-7">
                            <form onSubmit={handleLogin} className="card-body">
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
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input onBlur={handleValidateCaptcha} type="text" ref={captchaRef} name='captcha' placeholder='type here' className="input input-bordered" required />
                                </div>
                                {/* <button onClick={handleValidateCaptcha} className='btn btn-xs'>Validate Captcha</button> */}
                                <div className="form-control mt-6">
                                    <input disabled={disabled} className='btn btn-success' type="submit" value="Login" />
                                </div>
                                <div>
                                    <p className='text-red-400 text-center text-2xl p-2 my-3'>{error}</p>
                                </div>
                                <Link to='/signup'><p className='text-primary hover:scale-110'>Don't have an account? Register now!</p></Link>
                                <p>Or sign up with</p>
                            </form>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;