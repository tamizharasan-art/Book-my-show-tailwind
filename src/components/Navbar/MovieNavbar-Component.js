import React from 'react';
import {BiChevronRight,BiSearch,BiChevronDown,BiMenu,BiChevronLeft,BiShareAlt} from 'react-icons/bi';


const MovieNavbarsm = () => {
    return(
        <>
        <div className='text-white p-3 flex justify-between items-center'>
            <div className='text-xl font-bold flex gap-2 items-center'>
                <BiChevronLeft />
                <h3>Its All Starts Here!!</h3>

            </div>
            <div className='w-5 h-5 text-gray-300'>
                <BiShareAlt className='w-full h-full'/>
            </div>
        </div>
        </>
    );
};

const Navbarmd = () => {
    return(
        <>
        <div className=' bg-white flex items-center gap-2 w-full px-3 py-1 rounded '>
         <BiSearch/>
            <input type="search" placeholder='Search for movies,events,place,sports' className='w-full focus:outline-none'/>
        </div>
        </>
    );
};

const Navbarlg = () => {
    return(
        <>
        <div className='w-full container mx-auto px-4 py-3 flex items-center justify-between'>
            <div className='flex items-center w-1/2'>
                <div className='w-25 px-2'>
                   <img src='https://in.bmscdn.com/webin/common/icons/logo.svg'
                   alt='logo'
                    className='w-full h-full'/>
                </div>
                <div className=' bg-white flex items-center gap-2 w-full px-3 py-1 rounded '>
                    <BiSearch/>
                    <input type="search" placeholder='Search for movies,events,place,sports' className='w-full focus:outline-none'/>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <span className='text-base items-center flex text-gray-300 hover:text-white hover:cursor-pointer'>
                    chennai<BiChevronDown/>
                </span>
                <button className='text-white text-xs bg-bgCol-500 px-3 py-2 rounded'>Sign in</button>
                <div className='w-8 h-8'>
                <BiMenu className='text-white w-full h-full '/>
            </div>
            </div>
            
        </div>
        </>
    );
};

const MovieNavbar = () => {
    return(
        <>
        <nav className='bg-navcol-900 px-4 py-2 absolute inset-x-0 z-20 bg-opacity-10 backdrop-filter backdrop-blur-sm  lg-relative'>
            <div className='md:hidden'>{
                //MOBILEs view
                <MovieNavbarsm/>
                }</div>
            <div className='hidden lg:hidden md:block'>{
                //Tablet view
                <MovieNavbarsm/>
             }</div>
            <div className='hidden lg:flex'>{
                //Laptop view
                <Navbarlg  />
            }</div>
        </nav>
        
        
        </>
    );
};

export default MovieNavbar;