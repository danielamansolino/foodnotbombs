import React, { useState }  from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FakeLink from '../modals/FakeLink';

function Footer(props) {
    const [isFakeLinkModalOpen, setIsFakeLinkModalOpen] = useState(false);

    const handleFakeLinkClick = () => {
    setIsFakeLinkModalOpen(true);
    };

    const handleCloseFakeLinkModal = () => {
    setIsFakeLinkModalOpen(false);
    };
  return (
    <div className="footer-container">
      <div className="footer-column">
        <h4>RESOURCES</h4>
        <ul>
          <li onClick={handleFakeLinkClick}>Start a Local Chapter</li>
          <li onClick={handleFakeLinkClick}>Find Your Local Chapter</li>
          <li onClick={handleFakeLinkClick}>Your Starter Kit</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>CONTACT</h4>
        <ul>
          <li className="contact-item">
            <img src="https://imgur.com/q6kmVcH.png" alt="Address Icon" />
            P.o. BOX 422 santa cruz, ca 95061 usa
          </li>
          <li className="contact-item">
            <img src="https://imgur.com/Mngr9Hk.png" alt="Phone Icon" />
            1-800-884-1136
          </li>
          <li className="contact-item">
            <img src="https://imgur.com/sT4U8lP.png" alt="Email Icon" />
            contact@foodnotbombs.net
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>READY TO JOIN?</h4>
        <p>Join our community and make a difference today!</p>
        <div className="join-container">
          <img className='email-input' src="https://imgur.com/wSSqcKI.jpg" alt="Enter your email" />
          <img className='subscribe' src="https://imgur.com/yUgOPpR.jpg" alt="SUBSCRIBE" onClick={handleFakeLinkClick} /> 
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="additional-elements">
        <p>Privacy</p>
        <p>Terms and Conditions</p>
        <div className='social-media'>
          <a href="https://www.facebook.com/FoodNotBombsGlobal" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/35UIMI5.jpg" alt="Face Book" />
          </a>
          <a href="https://twitter.com/Food_Not_Bombs_" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/eyEqTfB.jpg" alt="X" />
          </a>
          <a href="https://www.youtube.com/results?search_query=food+not+bombs" target="_blank" rel="noopener noreferrer">
            <img src="https://imgur.com/oP0XSmU.jpg" alt="YouTube" />
          </a>
        </div>
        <p>Security</p>
        <p>Copyright</p>
      </div>
      {isFakeLinkModalOpen && <FakeLink onClose={handleCloseFakeLinkModal} />}
    </div>
  );
}

export default Footer;
