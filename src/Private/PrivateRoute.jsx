import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const {user,loading}=useContext(Context)
    const location = useLocation()
    if(loading){
        return <div className='text-center py-36'>
            <span className="loading loading-ring loading-lg "></span>
        </div>
    }
    if(user){
        return children
    }
 
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;