import React from "react";
import StaticPlay, { Buttons } from "../components/Playcards/Playcards-component";
import playcards from "../Config/Playcards-config";



const playpage = (props) => {
    

    return(
        <>

            <div className="hidden lg:flex ">

                <div className="container mx-32">
                    
                    <div>
                       <StaticPlay image={playcards}/>
                    </div>
                
                </div>
            </div>

            <div className="lg:hidden">
                
            <div className="container my-8 mx-12">
                     
                    <div>
                    
                       <StaticPlay image={playcards}/>
                    </div>
                
                </div>

            </div>
    
        </>
    );
};

 export default playpage;
