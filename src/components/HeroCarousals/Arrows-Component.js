import React from "react";

 export const PrevArrow = (props) =>{
    return(
        <>
        <div className={props.className}
              style={{ ...props.style,backgroundColor:"black",margin:"8px"}}
              onClick={props.onClick} />
              
        </>
    )
}

export const NextArrow = (props) =>{
    return(
        <>
              <div className={props.className}
              style={{ ...props.style,backgroundColor:"black"}}
              onClick={props.onClick} 
              />
              
        </>
    )
}