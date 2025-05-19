import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Style/Style.css'
import { Context } from '../../AuthContext/AuthContext';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import UseCart from '../../hook/UseCart';
const Navbar = () => {
    const { user, signOutUser, photo } = useContext(Context)
    const [cart] = UseCart()
    const [dropdown, setDropdown] = useState(false)
    const navOption = <div className='space-x-4 text-xl font-semibold'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/menu'>Our Menu</NavLink>
        <NavLink to='/secret'>Secret</NavLink>
        <NavLink to='/order/salad'>Order Food</NavLink>
    </div>

    return (
        <div className="navbar fixed z-10 max-w-screen-xl bgOpacity text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOption}
                    </ul>
                </div>
                <h1 className='flex flex-col ml-4'>
                    <span className='text-2xl'>BISTRO BOSS</span><span className='tracking-[8px]'>RESTAURANT</span>
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex mr-4 relative'>
                    <Link to='dashboard/cart'>
                    <HiOutlineShoppingCart className='text-3xl text-white bg-purple-500 p-1  rounded-full ' />

                    </Link>
                    <span className=' p-1 text-red-800 font-bold absolute -top-4 -right-3  rounded-full'>{cart.length}</span>
                </div>
                {/* user authentication */}
                {
                    user ? <div className='relative'>
                        <img onMouseDown={() => setDropdown(!dropdown)} className='w-10 btn btn-circle h-10 bg-cover bg-center hover:border-2 border-gray-200' src={photo} alt='image' />
                        <div className={dropdown ? "flex flex-col w-46 text-black bg-base-300 p-5 absolute right-2 top-10 rounded-xl duration-1000  shadow-2xl" : "hidden"}>
                            <Link className='rounded-2xl hover:bg-gray-300 p-2 ' >Profile</Link>
                            <Link className='rounded-2xl hover:bg-gray-300 p-2 ' >Setting</Link>
                            <Link className='rounded-2xl hover:bg-gray-300 p-2 ' onClick={signOutUser}>Log out</Link>
                        </div>
                    </div> : <Link className='text-xl font-bold mr-3' to="/login">Sign In</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;