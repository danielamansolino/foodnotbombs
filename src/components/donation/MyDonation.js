import React from "react";
import "./MyDonation.css";

const MyDonation = () => {
  console.log('MyDonation component rendered');
  return (
    <div className="my-donation-container">
      <div className="text-wrapper">My Donation</div>
      <div className="donation-cards-container">
        {/* Donation Card 1 */}
        <div className="donation-card">
          <div>Give now</div>
          <div>Each dollar feeds five people</div>
          <div>Donate now</div>
        </div>

        {/* Donation Card 2 */}
        <div className="donation-card">
          <div>Car donation</div>
          <div>Donate old vehicles at careasy.com</div>
          <div>Easily donate online</div>
        </div>

        {/* Donation Card 3 */}
        <div className="donation-card">
          <div>Give monthly</div>
          <div>Recurring donation</div>
          <div>Help us maintain our meaningful work</div>
        </div>

        {/* Donation Card 4 */}
        <div className="donation-card">
          <div>Other ways to support</div>
          <div>Give mutual aid to the community</div>
          <div>Support your local chapter</div>
        </div>
      </div>
    </div>
  );
};

export default MyDonation;
