import React from "react";
import Slider from "react-slick";

//Poster Component
import Poster from "../Poster/Poster.Component";

//Settings object
import settings from "../../Config/Poster-config";

//Premier Images
import TempPosters from "../../Config/TempPosters-config";

const Premier = () => {



    return(
        <>
        <div className="flex flex-col items-start py-2">
            <h3 className="text-lg text-white font-bold py-2">Premier</h3>
            <p className="text-sm text-white">Brand new releases at every friday</p>
        </div>
        <Slider {...settings}>{
            TempPosters.map((image) => (
                <Poster {...image} />
            ))}
        </Slider>
        </>
    );

};

export default Premier;