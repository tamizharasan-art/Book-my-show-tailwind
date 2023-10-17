import React from 'react';

import {  Route } from 'react-router-dom';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import DefaultHoc from './HOC/Default-hoc';
import MovieHoc from './HOC/Movie-hoc';
//Homepage
import Homepage from './Pages/Homepage';
import Moviepage from './Pages/Moviepage'


function App() {
  return (
    <>
      <DefaultHoc path='/' Component={Homepage}/>
      <MovieHoc path="/movies/:id" Component={Moviepage}/>
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

