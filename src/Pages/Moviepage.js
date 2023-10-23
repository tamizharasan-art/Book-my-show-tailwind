import React from "react";
//component
import MovieHero from "../components/MovieHero/MovieHero-Component";
import Cast from "../components/Cast&Crew/Cast-component";
import Crew from "../components/Cast&Crew/Crew-component";

import {BiCameraMovie} from 'react-icons/bi';
import Castpics from "../Config/Cast-config";
import Crewpics from "../Config/Crew-config";

const Moviepage = () => {
return (
<>
<div>
   <MovieHero />
   <div className="container my-8 w-3/5 mx-auto ml-40">
      <div className="flex flex-col items-start gap-4">
         <h2 className="font-bold text-2xl text-gray-800">About the movie</h2>
         <p className="text-gray-800 text-md">Ganapath is a futuristic action thriller film that is set in the year 2070, where the world is divided between Silver City and Gareebon Ki Duniya, Ganapath rises as a beacon of hope, to bridge the gap between the unjust division of society.</p>
      </div>
      <div className="py-8">
         <hr >
         </hr>
      </div>
      <div className="flex flex-col gap-3">
         <h1 className="font-bold text-xl text-gray-800">Applicable Offers</h1>
         <div className="flex flex-row items-start gap-2 py-4 border-2 border-amber-300 border-dashed border-red-600 rounded-md bg-amber-300 p-2 w-3/5">
            <BiCameraMovie className="text-xl"/>
            <div className="flex flex-col items-start">
               <h1 className="text-gray-900 text-lg">Filmy Pass</h1>
               <p className="tex-grya-600 text-sm">Available at $75.00 at your neighbour screens. Buy Filmy Pass. Hurry up</p>
            </div>
         </div>
      </div>
      <div className="py-8">
         <hr>
         </hr>
      </div>

        <div>
            <h1 className="font-bold text-xl text-gray-800">Cast</h1>
            <Cast image={Castpics}/>
        </div>

        <div className="py-8">
         <hr>
         </hr>
      </div>
        

      <div>
         <h1 className="font-bold text-xl text-gray-800">Crew</h1>
         <Crew pic={Crewpics}/>
      </div>

      <div className="py-8">
         <hr>
         </hr>
      </div>

   </div>
</div>
</>
);
};
export default Moviepage;