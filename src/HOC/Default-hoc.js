//HOC -> Higher Order Components

//It is add or removes a part from the component
//Tramsforms a component into another component,adding additional functionalities to the component

import React from 'react';
import {Route,Routes} from 'react-router-dom';

//Layouts
import DefaultLayout from '../layouts/default-layout';

const DefaultHoc = ({Component, ...rest}) => {
    return(
        <>
        <Routes> 
        <Route  {...rest}
        
        Component = {(props) =>  (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
    )
        }
        />
       </Routes>
        </>
        
    );
};

export default DefaultHoc;