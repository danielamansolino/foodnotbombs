import React from 'react'
import './map.css'

function Map(props) {
    return (
        <div className='mapbox'>
            <iframe
                title="Food Not Bombs Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321646.902281664!2d-82.65038510000005!3d14.378285189403147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlantic%20Ocean!5e0!3m2!1sen!2sus!4v1701912169648!5m2!1sen!2sus"
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