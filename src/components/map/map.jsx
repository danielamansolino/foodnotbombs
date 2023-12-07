import React from 'react'
import './map.css'

function Map(props) {
    return (
        <div className='mapbox'>
            <iframe
                title="Food Not Bombs Location Map"
                src="https://www.google.com/maps/d/embed?mid=1EwOJB5w4Wqzyt8tO2lehHtm4lq8GFgY&ehbc=2E312F"
                width="600"
                height="450"
                style={{ border:0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Map