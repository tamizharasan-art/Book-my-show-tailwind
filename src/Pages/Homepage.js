import React from 'react';

import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard-component';

 //premier 
 import Premier from '../components/Premier/Premier-Component';
 //PosterSlider
import PosterSlider from '../components/PosterSlider/PosterSlider-component';

//Images
import PremierImages from '../Config/TempPosters-config';
import TempPosters from '../Config/TempPosters-config';


const Homepage = () => {

    return(
    <>
        <div className='flex flex-col items-start gap-12'>
            {/* Hero container */}
        <div className='container mx-auto sm:px-2 md:px-40'>
            <PosterSlider images={TempPosters} isDark={false} />
            <div className='py-12'>
            <h1 className='text-2xl font-bold text-gray-800 py-4'>The Best of Live Events!!!</h1>
            <EntertainmentCardSlider />
            </div>
        
        </div>
       
            {/* Premier container */}
        <div className='bg-navcol-200 py-4 w-full h-full'>
            <div className='container mx-auto sm:px-2 md:px-40 '>
                <div className='flex'>
                <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png'
                alt="premiere"
                className='w-full h-full '
                />
                </div>
            </div>
            <div className='container mx-auto sm:px-2 md:px-40'>
               <PosterSlider images={TempPosters} title="Premier" subtitle="Brand new release at evert Friday" isDark/>
            </div>
        </div>

        <div className='container mx-auto sm:px-2 md:px-40'>
            <PosterSlider images={TempPosters} title="Live updates" isDark={false} />
        </div>

        <div className='container mx-auto sm:px-2 md:px-40'>
            <PosterSlider images={TempPosters} title="Outdoor Events" isDark={false} />
        </div>
        </div>

        
    </>
    )
}

export default Homepage;