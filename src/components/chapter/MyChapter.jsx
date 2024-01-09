import React from 'react'
import './myChapter.css'
import peopleBanner from './myChapterImages/fnbPeopleBanner.jpg'

function MyChapter() {
    console.log('MyDonation component rendered');
  return (
        <div className="my-chapter-container">
        <div className='chapterTopPage'>
            <div>
                <h2 className='titleChapter'>Feeding the people with a new chapter</h2>
                <h3 className='titleChapterContent'>We need more food saved from the landfill. We just need to work together and share the bounty. </h3>
            </div>
            <img src={peopleBanner}></img>
        </div>
        <div className="text-wrapper">My Chapter</div>
            <div className="miniChapterNavBarContainer">
                <ul className='chapterUL'>
                <li className='chapterLI'>ALL</li>
                <li className='chapterLI'>NEW CHAPTER</li>
                <li className='chapterLI'>ACTIONS</li>
                <li className='chapterLI'>MATERIALS</li>
                <li className='chapterLI'>FLYERS</li>
                </ul>
            </div>
          <div className="chapter-cards-container">

            <div className="chapter-card">
              <div>New Chapter</div>
              <div>How to create a new chapter</div>
              <div>Create a chapter now</div>
            </div>
    
            <div className="chapter-card">
              <div>Actions</div>
              <div>Schedule events through FNB</div>
              <div>Get planning</div>
            </div>
    
      
            <div className="chapter-card">
              <div>Materials</div>
              <div>Gather materials for your chapter</div>
              <div>Gather materials</div>
            </div>
    
        
            <div className="chapter-card">
              <div>Flyers</div>
              <div>Flyers and marketing</div>
              <div>Start marketing</div>
            </div>
          </div>
        </div>
    
 
  )
}

export default MyChapter