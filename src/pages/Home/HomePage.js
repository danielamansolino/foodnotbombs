import React, { Fragment } from 'react'
import Map from '../../components/map/map'
import Tagline from '../../components/tagline/Tagline';
import Resource from '../../components/resources/Resources'

function homePage(props){

    return(
        <Fragment>
            <Tagline />
            <Map />
            <Resource />
        </Fragment>
    );
};

export default homePage;