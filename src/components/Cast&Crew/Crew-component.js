import React from "react";
import Slider from "react-slick";

import settings from "../../Config/Poster-config";

const Crewcard = (props) => {
    return (
        <>
        <div className="w-32 my-8 flex flex-col items-center">
            <div >
            <img 
            src={props.src} 
            alt={props.alt} 
            className="w-full h-full rounded-full"/>
            </div>
            <h1 className="text-lg">{props.title}</h1>
            <p className="text-md">{props.sub}</p>
        </div>
        </>
    );

};

const Crew = (props) => {
    return(
        <>
                    <Slider {...settings}>{
            props.pic.map((pics) => (
                <Crewcard {...pics}/>
            ))
            }
            </ Slider >

           
        </>
    );
};


export default Crew;