import logo from '../Assets/MartinaLogo.png'
import { Link, useLocation } from 'react-router-dom';
import React from 'react';


function Navbar() {
    function toggleDropdown() {
        alert('Cellulare: +39 329 364 2148');
    };
    const location = useLocation();

    return (
        <nav>
            <div className='flex flex-row justify-between items-center h-16'>
                <div>
                    <a href="/"><img className='w-40  ml-5' src={logo} alt='logo' /></a>
                </div>
                <div className='flex flex-row items-center justify-center '>
                    <Link to="/" className="relative group h-16 px-10 flex items-center justify-center hover:text-yellow-500 hover:bg-gray-100 transition-all duration-300">
                        Home
                        <span className={`absolute bottom-0 w-full h-1 bg-yellow-500 transition-transform duration-300 ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </Link>
                    <Link to="/Foto" className="relative group h-16 px-10 flex items-center justify-center hover:text-yellow-500 hover:bg-gray-100 transition-all duration-300">
                        Foto
                        <span className={`absolute bottom-0 w-full h-1 bg-yellow-500 transition-transform duration-300 ${location.pathname === '/AboutMe' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </Link>
                    <Link to="/Texts" className="hidden relative group h-16 px-10 flex items-center justify-center hover:text-yellow-500 hover:bg-gray-100 transition-all duration-300">
                        Testi
                        <span className={`absolute bottom-0 w-full h-1 bg-yellow-500 transition-transform duration-300 ${location.pathname === '/AboutMe' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                    </Link>
                </div>

                <div className='group transition hidden md:block w-40'>
                    <button onClick={toggleDropdown}
                        className='hidden h-8 bg-yellow-500 rounded-2xl px-6 flex justify-center items-center 
                    mr-10 hover:bg-gray-950 group-hover:text-white duration-500 animate-pulse'>
                        Contattami
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;