import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className="footer-container">
      {/* Column 1 - RESOURCES */}
      <div className="footer-column">
        <h4>RESOURCES</h4>
        <ul>
          <li>Start a Local Chapter</li>
          <li>Find Your Local Chapter</li>
          <li>Your Starter Kit</li>
        </ul>
      </div>

      {/* Column 2 - CONTACT */}
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

      {/* Column 3 - READY TO JOIN */}
      <div className="footer-column">
        <h4>READY TO JOIN?</h4>
        <p>Join our community and make a difference today!</p>
        <div className="join-container">
          <img className='email-input' src="https://imgur.com/wSSqcKI.jpg" alt="Enter your email" />
          <img className='subscribe' src="https://imgur.com/yUgOPpR.jpg" alt="SUBSCRIBE" /> 
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="horizontal-line" />

      {/* Additional Elements (Displayed Below Columns) */}
      <div className="additional-elements">
        <p>Privacy</p>
        <p>Terms and Conditions</p>
        <img src="https://imgur.com/N1fXSvZ.jpg" alt="SOCIAL MEDIA" />
        <p>Security</p>
        <p>Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
