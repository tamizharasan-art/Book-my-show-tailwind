import React from 'react';
import {BiChevronRight,BiSearch,BiChevronDown,BiMenu} from 'react-icons/bi';


const Navbarsm = () => {
    return(
        <>
        <div className='text-white p-3 flex justify-between items-center'>
            <div className='text-xl font-bold'>
                <h3>Its All Starts Here!!</h3>
                <span className='text-xs items-center flex text-gray-300'>
                    chennai<BiChevronRight/>
                </span>
            </div>
            <div className='w-5 h-5 text-gray-300'>
                <BiSearch className='w-full h-full'/>
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
                <div className='w-12 h-7'>
                   <img src='https://thumbnail.imgbin.com/8/0/7/imgbin-bookmyshow-india-ticket-business-logo-book-store-16umLRQp0dnP7mw1YvNWYQhLB_t.jpg'
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

const Navbar = () => {
    return(
        <>
        <nav className='bg-navcol-900 px-4 py-2 '>
            <div className='md:hidden'>{
                //MOBILEs view
                <Navbarsm/>
                }</div>
            <div className='hidden lg:hidden md:flex'>{
                //Tablet view
                <Navbarmd/>
             }</div>
            <div className='hidden lg:flex'>{
                //Laptop view
                <Navbarlg  />
            }</div>
        </nav>
        
        
        </>
    );
};

export default Navbar;