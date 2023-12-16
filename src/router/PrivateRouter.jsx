import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation()

    // if (loading) {
    //     return <progress className="progress w-56 mx-auto"></progress>
    // }
    if (user?.email) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
}
export default PrivateRouter;