import React,{useEffect,useState} from 'react';
import axios from 'axios';

import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard-component';

 //premier 
 import Premier from '../components/Premier/Premier-Component';
 //PosterSlider
import PosterSlider from '../components/PosterSlider/PosterSlider-component';

//Images
import PremierImages from '../Config/TempPosters-config';
import TempPosters from '../Config/TempPosters-config';


const Homepage = () => {

    const [PopularMovies,setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/discover/tv?api_key=d9c578f62c6c1e400682ab496ea8516f");
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    },[])
    console.log({PopularMovies});


    return(
    <>
        <div className='flex flex-col items-start gap-12'>
            {/* Hero container */}
        <div className='container mx-auto sm:px-2 md:px-40'>
            <PosterSlider images={PopularMovies} isDark={false} />
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
               <PosterSlider images={PopularMovies} title="Premier" subtitle="Brand new release at evert Friday" isDark/>
            </div>
        </div>

        <div className='container mx-auto sm:px-2 md:px-40'>
            <PosterSlider images={PopularMovies} title="Live updates" isDark={false} />
        </div>

        <div className='container mx-auto sm:px-2 md:px-40'>
            <PosterSlider images={PopularMovies} title="Outdoor Events" isDark={false} />
        </div>
        </div>

        
    </>
    )
}

export default Homepage;