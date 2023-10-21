import React from "react";
import StaticPlay from "../components/Playcards/Playcards-component";
import playcards from "../Config/Playcards-config";



const playpage = (props) => {
    

    return(
        <>

            <div >
                <div className="container w-2/3">
                    <div className="pt-12 pb-4 w-full">
                        <h1 className="font-bold text-2xl">
                            Events In Chennai
                        </h1>
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                    
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Comedy show</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Music show</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Work shop</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Online streaming events</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Kids</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Spirituality</button>
                            <button className="bg-cyan-50 rounded-3xl border-2 border-red text-red-700 p-1 text-sm">Performance</button>
                       
                    </div>
                    <div>
                       <StaticPlay image={playcards}/>
                    </div>
                
                </div>
            </div>
    
        </>
    );
};

 export default playpage;
