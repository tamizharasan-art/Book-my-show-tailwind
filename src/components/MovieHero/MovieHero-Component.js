import React from "react";

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
            
            <div className="hidden lg:block relative " style={{height:"37rem"}}>
                
                <div className="absolute h-full w-full z-10"
                style={{backgroundImage:"linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)"}}/>

                <div className="absolute w-64 h-96 z-20 left-48 top-28 flex flex-row block shrink-0 ">
                <div className="basis-16">
                    <img 
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ganapath--a-hero-is-born-et00300918-1697549981.jpg"
                    alt="Poster"
                    className="rounded-md  w-full h-full"/>
                </div>

                <div className="">
                    <div>
                        <h1 className="font-bold text-white">Ganapath a Hero Is Born</h1>
                    </div>
                </div>
                </div>

            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ganapath--a-hero-is-born-et00300918-1697549981.jpg"
                alt="Poster" className="w-full h-full"/>
            </div>
        </>
    );
}

export default MovieHero;