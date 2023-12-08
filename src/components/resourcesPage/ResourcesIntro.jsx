import React from 'react'
import './resourcesIntro.css'
import resourceGuy from './resourcesPageImages/resourceGuy.jpg'

function ResourcesIntro() {
  return (
    <div className='contentContainer'>
        <div className='textContainer'>
            <h2 className='largeText'>Shared nourishment,<br></br> collective wisdom</h2>
            <h3 className='smallText'>Explore crucial tools for contributing to our cause, from providing free plant-based meals to taking nonviolent action for lasting social change.</h3>
        </div>
        <div className='imgContainer'>
        <img className='img' src={resourceGuy} alt="man sitting at table" />
        </div>
    </div>
  )
}

export default ResourcesIntro