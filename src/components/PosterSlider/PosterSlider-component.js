import React from "react";
import Slider from "react-slick";

//settings
import settings from "../../Config/Poster-config";

//Poster
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {

    return(
        <>
        <div className="flex flex-col items-start py-2">
            <h3 className={`text-lg font-bold py-2 ${
                props.isDark ? "text-white" : "text-black"
            }`}>{props.title}</h3>
            <p className={`text-sm ${
                props.isDark ? "text-white" : "text-black"
              }`}>{props.subtitle}</p>
        </div>
        <Slider {...settings}>{
            props.images.map((image) => (
                <Poster {...image} isDark={props.isDark}/>
            ))}
        </Slider>
        </>
    );

};

export default PosterSlider;