import React from 'react'
import './aboutMainVideo.css'

function AboutMainVideo() {
  return (
    <div className='allMainVideoContainer'>
        <h1 className='title'>40+ Years of Food Not Bombs</h1>
        <div className='videoContainer'>
            <iframe classname='mainVideo' width="1178" height="662" src="https://www.youtube.com/embed/bjEOXjnfouk"
             title="Food Not Bombs 35th Anniversary" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default AboutMainVideo