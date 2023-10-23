import React from "react";
import Playsfilter from "../Playsfilter/Playsfilter-component";

export const Buttons =() =>{
    return(
        <>
            <div className="pt-12 pb-4 w-full">
                        <h1 className="font-bold text-2xl">
                            Events In Chennai
                        </h1>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 w-full">
                    
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Comedy show</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Music show</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Work shop</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Online streaming events</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Kids</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Spirituality</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Performance</button>
                       
                    </div>
        </>
    );
}

const Playcards = (props) => {
    return (
        <>
       
       <div className="md:w-52 lg:mt-16 w-40 mt-8 lg:ml-4">
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
        <div className="flex ">
        <div className="hidden lg:block">
            <h1 className="font-bold text-2xl mt-12">Filters</h1>
            <div>
                <Playsfilter title="Date" tags={["Today","Tomorrow","Next week"]} />
                <Playsfilter title="Language" tags={["Tamil","Kannada"]} />
                <Playsfilter title="Catagories" tags={["Theatre","Experimental"]} />
                <Playsfilter title="Genre" tags={["Drame","Comedy","Outdoor Events"]} />
                <Playsfilter title="Price" tags={["Free","0-500","500-1000"]} />
            </div>
        </div>
        <div className=" md:mx-4">
            <Buttons />
        <div className="flex flex-wrap items-center gap-4 lg:gap-4 ">{
                
                props.image.map((image) => (
                    <Playcards {...image} className="" />
                ))
                }
                </div>
        </div>

            </div>
        </>
    );
};

export default StaticPlay;