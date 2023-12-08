import React from 'react'
import { Link } from 'react-router-dom'
import './tagline.css'
import Stats from './stats/Stats'
import StatsParagraph from './statsParagraph/StatsParagraph'


function Tagline() {
  return (
    <>
    <div className='background tagText'>
      <div className='contentContainer'>
        <span className='tagSpan'><h1>Feeding the World, One meal at a time</h1></span>
      </div>
      <div className='buttonContainer'>
            <div className='buttons'>
              <Link className='noTextDec' to='/location'><div className='button button1'>Find your local chapter</div></Link>
            </div>
            <div className='buttons'>
              <Link className='noTextDec'to='/chapter'><div className='button button2'> Start a local chapter</div></Link>
            </div>
      </div>
    </div>
    <div>
    <StatsParagraph />
    <Stats />
    </div>
    </>
    
  )
}

export default Tagline