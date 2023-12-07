import React, { Fragment } from 'react'
import Map from '../../components/map/map'
import Tagline from '../../components/tagline/Tagline';
import Resource from '../../components/resources/Resources'
import './HomePage.css'

function homePage(props){

    return(
        <Fragment>
            <Tagline />
            <div className='page-info'>
                <Map />
                <Resource />
            </div>
        </Fragment>
    );
};

export default homePage;