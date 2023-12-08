import React from 'react';
import './HungerEnds.css';

const HungerEnds = () => {
  return (
    <div className="hunger-ends-container">
      <div className="text-container">
        <div className="title">Hunger ends here</div>
        <div className="description">
          A gift to Food Not Bombs helps end hunger. Our mission is to feed our communities.
        </div>
      </div>
      <img
        className="image"
        src="https://imgur.com/5rH7mXW.jpg"
        alt="Hunger Ends Here"
      />
    </div>
  );
};

export default HungerEnds;
