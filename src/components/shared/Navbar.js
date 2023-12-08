
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import LeavePage from '../modals/LeavePage';

function NavBar(props) {
  const location = useLocation();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isLeavePageModalOpen, setIsLeavePageModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldFixNavbar = scrollPosition > 50;
      setIsNavbarFixed(shouldFixNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClassName = `custom-navbar ${isNavbarFixed ? 'fixed-navbar' : ''}`;

  const handleMobileMenuToggle = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const handleDonateClick = (event) => {
    event.preventDefault();
    setIsLeavePageModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLeavePageModalOpen(false);
  };

  return (
    <nav className={navbarClassName}>
      <div className="logo-container">
        <Link to='/'>
          <img className="logo" src={'https://imgur.com/Dv5KY2h.png'} alt={'FNB LOGO'} />
        </Link>
        <Link to='/'>
        <a href="https://foodnotbombs.net/new_site/donate.php" target="_blank" onClick={handleDonateClick}>
        <img className="fnb" src={'https://imgur.com/Fa1q8d0.png'} alt={'FOOD NOT BOMBS'} />
        </a> 
        </Link>
      </div>
      <ul className={`nav-list ${isMobileMenuActive ? 'active' : ''}`}>
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' && 'selected'}`}>HOME</Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' && 'selected'}`}>ABOUT</Link>
        </li>
        <li>
          <Link to="/location" className={`nav-link ${location.pathname === '/location' && 'selected'}`}>LOCATION</Link>
        </li>
        <li>
          <Link to="/resources" className={`nav-link ${location.pathname === '/resources' && 'selected'}`}>RESOURCES</Link>
        </li>
        {/* Add more list items for other menu items */}
      </ul>
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        ☰
      </div>
      <a href="/donation" >
        <img className="donate" src={'https://imgur.com/4OrYh2K.png'} alt={'DONATE'} />
      </a>
      {isLeavePageModalOpen && <LeavePage onClose={handleCloseModal} />}

      {/* <div className="donate-container">
        <img className="donate" src={'https://imgur.com/4OrYh2K.png'} alt={'DONATE'} />
      </div> */}
    </nav>
  );
}

export default NavBar;
