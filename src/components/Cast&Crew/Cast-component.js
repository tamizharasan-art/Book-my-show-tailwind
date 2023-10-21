import React from "react";

const Castcard = (props) => {
    return (
        <>
        <div className="w-32 h-32 mt-8 flex flex-col items-center">
            <div >
            <img 
            src={props.src} 
            alt={props.alt} 
            className="w-full h-full rounded-full"/>
            </div>
            <h1 className="text-lg">{props.title}</h1>
            <p className="text-md">{props.subtitle}</p>
        </div>
        </>
    );

};

const Cast = (props) => {
    return(
        <>
            <div className="flex flex-wrap items-center gap-8">{
            props.image.map((image) => (
                <Castcard {...image}/>
            ))
            }
            </div>
        </>
    );
};

export default Cast;