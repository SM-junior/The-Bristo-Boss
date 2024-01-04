import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const { googleLogin } = useContext(authContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='mt-2 mb-4'>
            <Link to='/login'><p className='text-primary hover:scale-110 my-3'>Already registered? Go to log in</p></Link>
            <p className='my-3'>Or sign up with</p>
            <div className='flex items-center justify-around w-60 mx-auto'>
                <button><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-green-300'><FaFacebookF /></p></button>
                <button onClick={handleGoogleLogIn}><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-green-300'><FaGoogle /></p></button>
                <button><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-green-300'><FaGithub /></p></button>
            </div>
        </div>
    );
};

export default GoogleLogin;