import React from 'react';

import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard-component';

 //premier 
 import Premier from '../components/Premier/Premier-Component';

const Homepage = () => {

    return(
    <>
        <div className='container mx-auto px-40'>
            <h1 className='text-2xl font-bold text-gray-800 py-2'>The Best of Live Events!!!</h1>
        <EntertainmentCardSlider />
        <Premier />
        </div>
        
    </>
    )
}

export default Homepage;