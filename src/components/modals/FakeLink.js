import React from 'react';
import './FakeLink.css'; 

const FakeLink = ({ onClose }) => {
return (
    <div className="custom-modal">
        <button className="close-button" onClick={onClose}>
            X
        </button>
        <h4 className="modal-title">This is a conceptual project.</h4>
        <p className="modal-paragraph">
            It was created by a group of UX designers and software engineers. We are in no way affiliated with the actual Food Not Bombs organization.
        </p>
        <p className="modal-paragraph">
            Some links may not lead to actual pages, but feel free to explore the conceptual content.
        </p>
        <a href="#" onClick={onClose}>
            <img src="https://imgur.com/0AeNAKp.png" alt="Got it, continue exploring" />
        </a>
    </div>
);
};

export default FakeLink;

