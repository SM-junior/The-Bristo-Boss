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
                const loggedUser = result.user;
                const signInUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
    }

    return (
        <div className='flex items-center justify-around w-60 mx-auto mb-6'>
            <button><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-green-300'><FaFacebookF /></p></button>
            <button onClick={handleGoogleLogIn}><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-green-300'><FaGoogle /></p></button>
            <button><p className='h-8 w-8 border-2 border-black rounded-full flex items-center justify-center hover:bg-green-300'><FaGithub /></p></button>
        </div>
    );
};

export default GoogleLogin;