import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';

const Dashboard = () => {
     const [isAdmin]=useAdmin()
    return (
        <div className='flex p-3 gap-3'>
            {/* this is dashboard sidebar */}
            <div className='min-h-screen w-3/12 p-4 bg-orange-500'>
                <ul className=' menu p-3 space-y-2 '>
                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to='admin' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaHome></FaHome>
                                    <h1>Admin Home</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='addItem' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaUtensils></FaUtensils>
                                    <h1>ADD Items</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='mangeItem' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaList></FaList>
                                    <h1>Mange Items</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='mangeBooking' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaBook></FaBook>
                                    <h1>Mange Bookings</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='allUsers' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaUsers></FaUsers>
                                    <h1>All Users</h1>
                                </NavLink>
                            </li>
                        </> : <>
                            <li>

                                <NavLink to='userHome' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaHome></FaHome>
                                    <h1>USER HOME</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='reservation' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaCalendar></FaCalendar>
                                    <h1>RESERVATION</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='cart' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaShoppingCart></FaShoppingCart>
                                    <h1>MY CART</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='addReview' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaAd></FaAd>
                                    <h1>ADD REVIEW</h1>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='myBooking' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                                    <FaList></FaList>
                                    <h1>MY BOOKING</h1>
                                </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    {/* shared all users */}
                    <li className='text-[18px]'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                            <FaHome></FaHome>
                            <h1>Home</h1>
                        </NavLink>
                    </li>
                    <li className='text-[18px]'>
                        <NavLink to='/menu' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                            <FaSearch></FaSearch>
                            <h1>Menu</h1>
                        </NavLink>
                    </li>
                    <li className='text-[18px]'>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'active btn btn-primary text-[18px]' : 'text-[18px]'}>
                            <FaEnvelope></FaEnvelope>
                            <h1>Contact</h1>
                        </NavLink>
                    </li>
                </ul>

            </div>
            {/* this is dashboard layout */}
            <div className='w-11/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;