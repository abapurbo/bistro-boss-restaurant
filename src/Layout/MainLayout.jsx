import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Page/Shared/Navbar';
import Footer from '../Page/Shared/Footer';

const MainLayout = () => {
    const location = useLocation()
    const notHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')
    return (
        <div>
            {
                notHeaderFooter || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                notHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default MainLayout;