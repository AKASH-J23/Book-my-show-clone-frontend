import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Movielayout from '../layouts/Movie.layout';

const MovieHOC = ({component: Component, ...rest}) => {
    return (
    <>
    <Routes>
    <Route {...rest} 
    component={ (props) => (
    <Movielayout>
        <Component {...props} />
    </Movielayout>
    )}
    />
    </Routes>   
    </>
    );
};

export default MovieHOC;