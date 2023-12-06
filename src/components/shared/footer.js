// Footer.js
import React from 'react';
import './Footer.css'; 

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
          <li>P.o. BOX 422 santa cruz, ca 95061 usa</li>
          <li>1-800-884-1136</li>
          <li>contact@foodnotbombs.net</li>
        </ul>
      </div>

      {/* Column 3 - READY TO JOIN */}
      <div className="footer-column">
        <h4>READY TO JOIN?</h4>
        <p>Join our community and make a difference today!</p>
        <button>Join Now</button>
      </div>
    </div>
  );
}

export default Footer;
