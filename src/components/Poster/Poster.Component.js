import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-6 px-4">
                <div className="h-80 md:h-40">
                    <img src={props.src} alt={props.title} className="w-full rounded-md"/>
                </div>
                    <div className="flex flex-col items-start gap-2">
                    <h3 className={`text-lg font-bold py-2
                     ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
                <p className={`text-sm font-bold 
                     ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
                    </div>
                </div>
        </>
    )
};




export default Poster;
