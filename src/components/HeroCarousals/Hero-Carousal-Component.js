import React,{useEffect,useState} from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows-Component";
//axios
import axios from "axios";

const HeroCarousal = () => {

    const [images,setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayMovies = async() => {
            const getImages = await axios.get("discover/movie?api_key=d9c578f62c6c1e400682ab496ea8516f")
            console.log(getImages);
            setImages(getImages.data.results); 
        };
        requestNowPlayMovies();
    },[] );
    
    const settingsLg = {
        // arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding:"200px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />

    };

    const settings = {
        // arrows:true,
        autoplay:true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
      };


      return (
        <>
                <div className="lg:hidden">
                <HeroSlider {...settings}>{
                    images.map((image) => (
                <div className="w-full py-3  h-64 md:h-80">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Testing" className="w-full h-full rounded"/>
                </div>
                    ))
                     }
                </HeroSlider>
                </div>

                <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>{
                    images.map((image) => (
                <div className="w-20 h-96 px-2 py-2">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}  alt="Testing" className="w-full h-full rounded"/>
                </div>
                    ))
                     }
                </HeroSlider>
                </div>


        </>
      );
}

export default HeroCarousal;
//48.14 sec

