import React from 'react';

import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard-component';

 //premier 
 import Premier from '../components/Premier/Premier-Component';


const Homepage = () => {

    return(
    <>
        <div className='flex flex-col items-start gap-20'>
        <div className='container mx-auto px-40'>
            <Premier />
            <h1 className='text-2xl font-bold text-gray-800 py-2'>The Best of Live Events!!!</h1>
            <EntertainmentCardSlider />
        
        </div>
       

        <div className='bg-navcol-200 py-20 flex flex-col items-start '>
            <div className='container mx-auto px-40'>

                <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png'
                alt="premiere"
                className='w-full h-full'
                />
            </div>
            <div className='container mx-auto px-40'>
                <Premier />
            </div>
        </div>
        </div>
        
    </>
    )
}

export default Homepage;