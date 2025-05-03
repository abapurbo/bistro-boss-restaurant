import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Style/Style.css'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const navOption = <div className='space-x-4 '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/menu'>Our Menu</NavLink>
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
                {/* user authentication */}
                
                <div className='relative'>
                    <img onClick={()=>setDropdown(!dropdown)} src={``} alt='user profile image' />
                    <div className={dropdown ?"flex flex-col w-46 text-black bg-base-300 p-5 absolute right-8 top-10 rounded-xl duration-1000  shadow-2xl":"hidden"}>
                        <Link >Log out</Link>
                        <Link >Log out</Link>
                        <Link >Log out</Link>
                        <Link >Log out</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;