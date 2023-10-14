import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows-Component";

const HeroCarousal = () => {
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

      const images = [
        "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://plus.unsplash.com/premium_photo-1696879454010-6aed21c32fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1696928634052-41aa345ef686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1696968106120-e31a4731e666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ];

      return (
        <>
                <div className="lg:hidden">
                <HeroSlider {...settings}>{
                    images.map((image) => (
                <div className="w-full py-3  h-64 md:h-80">
                    <img src={image} alt="Testing" className="w-full h-full rounded"/>
                </div>
                    ))
                     }
                </HeroSlider>
                </div>

                <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>{
                    images.map((image) => (
                <div className="w-20 h-96 px-2 py-2">
                    <img src={image} alt="Testing" className="w-full h-full rounded"/>
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

