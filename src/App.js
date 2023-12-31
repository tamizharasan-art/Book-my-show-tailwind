import React from 'react';

import {  Route } from 'react-router-dom';

//import axios
import axios from 'axios';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import DefaultHoc from './HOC/Default-hoc';
import MovieHoc from './HOC/Movie-hoc';
import PlaysHoc from './HOC/Plays-hoc';
//pages
import Homepage from './Pages/Homepage';
import Moviepage from './Pages/Moviepage';
import play from './Pages/Playspage';

//axios default settings
axios.defaults.baseURL ="https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY



function App() {
  return (
    <>
      <DefaultHoc path='/' Component={Homepage}/>
      <MovieHoc path="/movies/:id" Component={Moviepage}/>
      <PlaysHoc path="/plays" Component={play} />
    </>
  );
};

// /,/movies
export default App;

//Normal method 

//const tam = {
//   name:"Tzn",
//   age:2
// }

// const naresh = tam
// naresh.goodstudent=true

//spread operator

// const tam = {
//   name:"Tzn",
//   age:2
// }
// const naresh = {...tam,goodstudent:true} //spreading 
// {name: 'Tzn', age: 2, goodstudent: true}

