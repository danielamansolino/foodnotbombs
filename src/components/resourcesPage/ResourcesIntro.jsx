import React from 'react'
import './resourcesIntro.css'
import resourceGuy from './resourcesPageImages/resourceGuy.jpg'

function ResourcesIntro() {
  return (
    <div className='contentContainerIntro'>
        <div className='textContainerIntro'>
            <h2 className='largeTextIntro'>Shared nourishment,<br></br> collective wisdom</h2>
            <h3 className='smallTextIntro'>Explore crucial tools for contributing to our cause, from providing free plant-based meals to taking nonviolent action for lasting social change.</h3>
        </div>
        {/* <div className='imgContainer'> */}
        <img className='img' src={resourceGuy} alt="man sitting at table" />
        {/* </div> */}
    </div>
  )
}

export default ResourcesIntro