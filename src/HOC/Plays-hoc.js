import React from 'react';
import {Route,Routes} from 'react-router-dom';

//component
import PlaysLayout from '../layouts/Plays-layout';

const PlaysHoc = ({Component, ...rest}) => {
    return(
        <>
        <Routes> 
        <Route  {...rest}
        
        Component = {(props) =>  (
            <PlaysLayout >
                <Component {...props} />
            </PlaysLayout>
    )
        }
        />
       </Routes>
        </>
        
    );
};

export default PlaysHoc;