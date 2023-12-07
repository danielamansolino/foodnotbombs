// CustomModal.js
import React from 'react';
import './CustomModal.css'; // Create this CSS file for styling

const CustomModal = ({ onClose }) => {
  return (
    <div className="custom-modal">
      {/* Your modal content goes here */}
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default CustomModal;
