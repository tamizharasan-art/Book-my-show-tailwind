import React from "react";

const Playcards = (props) => {
    return (
        <>
        <div className="w-52 h-96 mt-16">
            <div >
            <img 
            src={props.src} 
            alt={props.alt} 
            className="w-full h-full rounded-md"/>
            </div>
            <h1 className="text-xl font-bold">{props.title}</h1>
            <p className="text-md">{props.subtitle}</p>
        </div>
        </>
    );

};

const StaticPlay = (props) => {
    return(
        <>
            <div className="flex flex-wrap items-center gap-8">{
            props.image.map((image) => (
                <Playcards {...image} />
            ))
            }
            </div>
        </>
    );
};

export default StaticPlay;