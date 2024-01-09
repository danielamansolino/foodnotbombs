import React from 'react'
import './Donation.css'
import MyDonation from '../../components/donation/MyDonation'
import HungerEnds from '../../components/donation/HungerEnds';

function Donation(props){

    return(
        <div className='donation-container'>
            <HungerEnds/>
            <MyDonation/>
        </div>

    );
};

export default Donation;