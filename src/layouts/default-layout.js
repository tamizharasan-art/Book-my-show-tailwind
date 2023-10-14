import React from 'react';
import Navbar  from '../components/Navbar/Navbar-component';
import HeroCarousal from '../components/HeroCarousals/Hero-Carousal-Component';

const DefaultLayout = (props) => {
    return(
        <>
        <Navbar/>
        <HeroCarousal />
        {props.children}
        </>
    );
};

export default DefaultLayout;