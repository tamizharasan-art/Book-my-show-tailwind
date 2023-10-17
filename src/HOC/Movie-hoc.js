//HOC -> Higher Order Components

//It is add or removes a part from the component
//Tramsforms a component into another component,adding additional functionalities to the component

import React from 'react';
import {Route,Routes} from 'react-router-dom';

//Layouts
import MovieLayout from '../layouts/Movie-layout';

const MovieHoc = ({Component, ...rest}) => {
    return(
        <>
        <Routes> 
        <Route  {...rest}
        
        Component = {(props) =>  (
            <MovieLayout>
                <Component {...props} />
            </MovieLayout>
    )
        }
        />
       </Routes>
        </>
        
    );
};

export default MovieHoc;