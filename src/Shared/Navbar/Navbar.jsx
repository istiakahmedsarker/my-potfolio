import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <h1 className='text-5xl text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                    Portfolio
                </h1>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
