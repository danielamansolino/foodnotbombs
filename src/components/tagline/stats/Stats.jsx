import React from 'react'
import './stats.css'

function Stats() {
  return (
    <div className='statsMainContainer'>
        <div className='fontSize'>
            <h1>1000+</h1>
            <h3>Chapters</h3>
        </div>
            <div className='yellowBorder'>|</div>
        <div className='fontSize'>
            <h1>1M+</h1>
            <h3>Served</h3>
        </div>
            <div className='yellowBorder'>|</div>
        <div className='fontSize'>
            <h1>100+</h1>
            <h3>Resources</h3>
        </div>
            <div className='yellowBorder'>|</div>
        <div className='fontSize'>
            <h1>60+</h1>
            <h3>Countries</h3>
        </div>
    </div>
  )
}

export default Stats