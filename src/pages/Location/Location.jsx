import React from 'react'
import { Link } from 'react-router-dom'
import Map from '../../components/map/map'
import './Location.css'

function Location(props){

    return(
        <div className='location-page'>
            <div className="top-half">
                <div className="text">
                    <h2>Find your local chapter!</h2>
                    <p>Food Not Bombs is gaining momentum throughout the world. There are hundreds of autonomous chapters sharing free vegetarian food with hungry people and protesting war and poverty. Find one near you!</p>
                </div>
                <img src='https://i.imgur.com/evzHFAS.png' alt='Location Page' />
            </div>
            <Map width='800' height='600' />
            <div className="start-one">
                <h2>Don't have a local chapter?</h2>
                <div className="link-container">
                    <Link to='#' className='start-link'>
                        Start one!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Location;