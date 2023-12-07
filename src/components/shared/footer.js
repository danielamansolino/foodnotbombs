// // Footer.js
// import React from 'react';
// import './Footer.css'; 
// import { Link } from 'react-router-dom';

// function Footer(props) {
//   return (
//     <div className="footer-container">
//       {/* Column 1 - RESOURCES */}
//       <div className="footer-column">
//       <div className="footer-column">
//         <a href="https://foodnotbombs.net/new_site/index.php" target="_blank" rel="noopener noreferrer">
//           Link demo
//         </a>
//     </div>
//         <h4>RESOURCES</h4>
//         <ul>
//           <li>Start a Local Chapter</li>
//           <li>Find Your Local Chapter</li>
//           <li>Your Starter Kit</li>
//         </ul>
//       </div>

//       {/* Column 2 - CONTACT */}
//       <div className="footer-column">
//         <h4>CONTACT</h4>
//         <ul>
//           <li>P.o. BOX 422 santa cruz, ca 95061 usa</li>
//           <li>1-800-884-1136</li>
//           <li>contact@foodnotbombs.net</li>
//         </ul>
//       </div>

//       {/* Column 3 - READY TO JOIN */}
//       <div className="footer-column">
//         <h4>READY TO JOIN?</h4>
//         <p>Join our community and make a difference today!</p>
//         <button>Join Now</button>
//       </div>
//       {/* Horizontal line */}
//       <hr />

//       {/* Additional elements */}
//       <div className="additional-elements">
//         <p>Privacy</p>
//         <p>Terms and Conditions</p>
//         {/* Add images here */}
//         <img src="image1.jpg" alt="Image 1" />
//         <img src="image2.jpg" alt="Image 2" />
//         <img src="image3.jpg" alt="Image 3" />
//         <p>Security</p>
//         <p>Copyright</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;

// import React from 'react';
// import './Footer.css'; 
// import { Link } from 'react-router-dom';

// function Footer(props) {
//   return (
//     <div className="footer-container">
//       {/* Column 1 - RESOURCES */}
//       <div className="footer-column">
//         <h4>GET INVOLDED</h4>
//         <ul>
//           <li>Start a Local Chapter</li>
//           <li>Find Your Local Chapter</li>
//           <li>RESOURCES</li>
//         </ul>
//       </div>

//       {/* Column 2 - CONTACT */}
//       <div className="footer-column">
//         <h4>CONTACT</h4>
//         <ul>
//           <li>P.o. BOX 422 santa cruz, ca 95061 usa</li>
//           <li>1-800-884-1136</li>
//           <li>contact@foodnotbombs.net</li>
//         </ul>
//       </div>

//       {/* Column 3 - READY TO JOIN */}
//       <div className="footer-column">
//         <h4>READY TO JOIN?</h4>
//         <p>Join our community and make a difference today!</p>
//         <button>Join Now</button>
//       </div>

//       {/* Additional Elements (Displayed Under Columns) */}
//       <hr className="horizontal-line" />
//       <p>Privacy | Terms and Conditions</p>
//       {/* Include your images here */}
//       <img src="image1.jpg" alt="Image 1" />
//       <img src="image2.jpg" alt="Image 2" />
//       <img src="image3.jpg" alt="Image 3" />
//       <p>Security | Copyright</p>
//     </div>
//   );
// }

// export default Footer;

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
          <li>P.o. BOX 422 santa cruz, ca 95061 usa</li>
          <li>1-800-884-1136</li>
          <li>contact@foodnotbombs.net</li>
        </ul>
      </div>

      {/* Column 3 - READY TO JOIN */}
      <div className="footer-column">
        <h4>READY TO JOIN?</h4>
        <p>Join our community and make a difference today!</p>
        <div className="join-container">
          <img className='email-input' src="https://imgur.com/wSSqcKI.jpg" alt="Enter your email" />
          <button className="subscribe-button">Subscribe</button>
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
