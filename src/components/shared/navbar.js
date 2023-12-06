import React from 'react'
import './Navbar.css'
import HomePage from '../../pages/Home/HomePage';

function Navbar(props){
    return(
        <nav>
            <ul>
                <img className='logo' src={'https://imgur.com/Dv5KY2h.png'} alt={'FNB LOGO'} />
                <img className='fnb' src={'https://imgur.com/Fa1q8d0.png'} alt={'FOOD NOT BOMBS'} />
                <li>HOME</li>
                <li>ABOUT</li>
                <li>LOCATION</li>
                <li>RESOURCES</li>
                <li>VOLUNTEER</li>
                <img className='donate' src={'https://imgur.com/4OrYh2K.png'} alt={'DONATE'} />
            </ul>
        </nav>
    );
};

export default Navbar;