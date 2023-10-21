import React from 'react';
import Navbar from '../components/Navbar/Navbar-component';

const PlaysLayout = (props) => {
    return(
        <>
        <Navbar/>
        {props.children}
        </>
    );
};

export default PlaysLayout;