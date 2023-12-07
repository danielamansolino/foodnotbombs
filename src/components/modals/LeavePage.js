import React from 'react';
import './LeavePage.css'; 

const LeavePage = ({ onClose }) => {
  return (
    <div className="custom-modal">
      <h4 className="modal-title">Proceed to the actual Food Not Bombs website?</h4>
      
      <p className="modal-paragraph">
        This website is a concept project created by a group of UX designers and software engineers. 
        We are in no way affiliated with the actual Food Not Bombs organization.
      </p>
      <a href="https://foodnotbombs.net/new_site/index.php" target="_blank" rel="noopener noreferrer">
        <img src="https://imgur.com/OslbLft.png" alt="Open in new tab" />
      </a>
      <a href="#" onClick={onClose}>
        <img src="https://imgur.com/EhJe1zw.png" alt="Stay on the same page" />
      </a>
    </div>
  );
};

export default LeavePage;
