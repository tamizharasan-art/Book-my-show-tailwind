import React from "react";
import {MdThumbUp} from 'react-icons/md';
import {BsShare} from "react-icons/bs"

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ganapath--a-hero-is-born-et00300918-1697549981.jpg"
                alt="Poster"/>
            </div>
            
            <div className="hidden md:block lg:hidden">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ganapath--a-hero-is-born-et00300918-1697549981.jpg"
                alt="Poster"/>
            </div>

            {/* Large screen */}
            
            <div className="hidden lg:block relative " style={{height:"37rem"}}>


                
                <div className="absolute h-full w-full z-10"
                style={{backgroundImage:"linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)"}}/>

                <div className="absolute  z-20 left-48 top-28 flex flex-row  ">
                <div className="flex-auto h-96 w-88">
                    <img 
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ganapath--a-hero-is-born-et00300918-1697549981.jpg"
                    alt="Poster"
                    className="rounded-md  w-full h-full"/>
                </div>
            {/* Movie description */}
                <div className="px-12 py-8">
                    <div className="">
                        <h1 className="font-bold text-white text-4xl ">Ganapath - A Hero Is Born</h1>
                            <div className="flex items-center gap-2 py-8 ">
                            <MdThumbUp className="text-icons-700 text-2xl"/>
                        <h1 className="text-white text-md"><span className="text-xl font-bold pr-2">53.4K </span> are interested</h1>
                            </div>
                    </div>
                    <div className= "border border-white rounded-lg flex items-center justify-around">
                        <div>
                        <h1 className="text-white text-xl pl-2 pt-1 font-bold">Releasing on 20 Oct, 2023</h1> 
                        <p className="text-white text-sm pl-2 pb-3">Are you interested in watching this movie?</p> 
                        </div>
                        <button className="bg-gray-200 text-black px-4 py-1 rounded-sm text-sm ">I'm interested</button>
                    </div>
                    <div className="py-4 flex items-center gap-4">
                        <button className="bg-gray-200 text-black px-4 py-1 rounded-sm text-sm">
                            <h1 className="hover:underline hover:decoration-navCol-200">2D</h1>
                        </button>
                        <button className="bg-gray-200 text-black px-4 py-1 rounded-sm text-sm">
                           <h1 className="hover:underline hover:decoration-navCol-200"> Tamil,Hindi,Malayalam,Telugu,Kannada</h1>
                        </button>
                    </div>
                    <h1 className="text-white">2h 16m • Action, Romantic, Sci-Fi, Thriller • UA</h1>
        `   `       <div className="">
                        <button className="bg-red-500 text-white font-bold px-16 py-4 rounded-lg">Book tickets</button>
                    </div>

                </div>
                

                </div>
                {/* Share icon */}
                <div className="absolute z-20 right-24 top-28 flex items-center bg-black py-4 px-8 rounded bg-opacity-30 backdrop-filter hover:cursor-pointer">
                <BsShare className=" text-white text-2xl"/>
                <button className="  text-white pl-4 font-bold">Share</button>
                </div>

                
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ganapath--a-hero-is-born-et00300918-1697549981.jpg"
                alt="Poster" className="w-full h-full"/>
                        
           

            </div>
        </>
    );
}

export default MovieHero;