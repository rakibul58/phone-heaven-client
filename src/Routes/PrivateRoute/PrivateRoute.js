import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="w-28 h-28 mx-auto mt-32 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;