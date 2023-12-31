import React from 'react';
import './NavBar.css';

const NavBar = () => {
    const navItem = <div className='lg:flex'>
        <li><a href='#home' className='text-2xl font-semibold'>Home</a></li>
        <li><a href='#about' className='text-2xl font-semibold'>About</a></li>
        <li><a href='#skills' className='text-2xl font-semibold'>Skill</a></li>
        <li><a href='#project' className='text-2xl font-semibold'>Project</a></li>
        <li><a href="#contact" className='text-2xl font-semibold'>Contact</a></li>
    </div>
    return (
        <div className="navbar header ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="bg-[--bg-color] dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="text-2xl sm:ms-0 md:ms-40 logo font-semibold">Portfolio</a>
            </div>
            <div className="navbar-center relative hidden lg:flex">
                <ul className="absolute left-32 px-1">
                    {navItem}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;