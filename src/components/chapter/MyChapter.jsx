import React from 'react'
import './myChapter.css'

function MyChapter() {
    console.log('MyDonation component rendered');
  return (
        <div className="my-chapter-container">
          <div className="text-wrapper">My Donation</div>
          <div className="chapter-cards-container">

            <div className="chapter-card">
              <div>Give now</div>
              <div>Each dollar feeds five people</div>
              <div>Donate now</div>
            </div>
    
            <div className="chapter-card">
              <div>Car donation</div>
              <div>Donate old vehicles at careasy.com</div>
              <div>Easily donate online</div>
            </div>
    
      
            <div className="chapter-card">
              <div>Give monthly</div>
              <div>Recurring donation</div>
              <div>Help us maintain our meaningful work</div>
            </div>
    
        
            <div className="chapter-card">
              <div>Other ways to support</div>
              <div>Give mutual aid to the community</div>
              <div>Support your local chapter</div>
            </div>
          </div>
        </div>
    
 
  )
}

export default MyChapter