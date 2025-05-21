import { useContext } from "react";
import { Context } from "../AuthContext/AuthContext";
import useAdmin from "../hook/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(Context);
    const location = useLocation()
    const [isAdmin, isLoading] = useAdmin()
    if (loading || isLoading) {
        return <div className='text-center py-36'>
            <span className="loading loading-ring loading-lg "></span>
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default AdminRoute;