import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-2 px-4 ">
                <div className="h-80  w-full ">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} className="w-full h-full rounded-md "/>
                </div>
                    
                    <h3 className={`text-lg font-bold 
                     ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.name}</h3>
                <p className={`text-sm font-bold 
                     ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
                   
                </div>
        </>
    )
};




export default Poster;
