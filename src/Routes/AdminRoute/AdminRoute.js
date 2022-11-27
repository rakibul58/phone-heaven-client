import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="w-28 h-28 mx-auto mt-32 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default AdminRoute;