import React from 'react'
import './map.css'

function Map(props) {
   const { width, height } = props

    return (
        <div className='mapbox'>
            <iframe
                title="Food Not Bombs Location Map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1EwOJB5w4Wqzyt8tO2lehHtm4lq8GFgY&ehbc=2E312F"
                width={width}
                height={height}
                style={{ border:0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Map