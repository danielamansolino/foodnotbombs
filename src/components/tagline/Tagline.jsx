import React from 'react'
import { Link } from 'react-router-dom'
import './tagline.css'
import Stats from './stats/Stats'
import StatsParagraph from './statsParagraph/StatsParagraph'

function Tagline() {
  return (
    <div>
    <div className='background tagText'>
       <p className='contentContainer'>
        <span className='tagSpan'><h1>Feeding the World, One meal at a time</h1></span>
        <div className='buttonContainer'>
          <div className='buttons'>
            <Link className='noTextDec' to='#'><div className='button button1'>Find your local chapter</div></Link>
          </div>
          <div className='buttons'>
            <Link className='noTextDec'to='#'><div className='button button2'> Start a local chapter</div></Link>
          </div>
        </div>
        </p> 
    </div>
    <Stats />
    <StatsParagraph />
    </div>
    
  )
}

export default Tagline