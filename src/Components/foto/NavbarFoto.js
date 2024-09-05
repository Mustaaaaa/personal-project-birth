import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function NavbarFoto() {

    const location = useLocation();
    return (
        <nav className="navbar">
            <div className='flex flex-row items-center justify-center hidden md:flex '>
                <Link to="/foto/2021" className="relative group h-16 px-10 flex items-center justify-center hover:text-yellow-500 hover:bg-gray-100 transition-all duration-300">
                    2021
                    <span className={`absolute bottom-0 w-full h-1 bg-yellow-500 transition-transform duration-300 ${location.pathname === '/foto/2021' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                </Link>
                <Link to="/foto/2022" className="relative group h-16 px-10 flex items-center justify-center hover:text-yellow-500 hover:bg-gray-100 transition-all duration-300">
                    2022
                    <span className={`absolute bottom-0 w-full h-1 bg-yellow-500 transition-transform duration-300 ${location.pathname === '/foto/2022' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                </Link>
                <Link to="/foto/2024" className="relative group h-16 px-10 flex items-center justify-center hover:text-yellow-500 hover:bg-gray-100 transition-all duration-300">
                    2024
                    <span className={`absolute bottom-0 w-full h-1 bg-yellow-500 transition-transform duration-300 ${location.pathname === '/foto/2024' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                </Link>
            </div>
        </nav>
    );
}

export default NavbarFoto;
