import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading } = useContext(AuthContext);

    if(user?.email){
        return children;
    }

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    return <Navigate to="/bookings" replace></Navigate>
};

export default PrivateRoutes;