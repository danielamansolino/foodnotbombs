// import React from 'react'
// import { Link } from 'react-router-dom';
// import './Navbar.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText,
//   } from 'reactstrap';

// function NavBar(props){
//     return(
//         <Navbar expand="md" >
//             <ul>
//                 <NavItem><img className='logo' src={'https://imgur.com/Dv5KY2h.png'} alt={'FNB LOGO'} /></NavItem>
//                 <NavItem><img className='fnb' src={'https://imgur.com/Fa1q8d0.png'} alt={'FOOD NOT BOMBS'} /></NavItem>
//                 <NavItem>
//                     <NavLink href="/pages/"><Link to="/">HOME</Link></NavLink>
//                 </NavItem>
//                 <NavItem><li>ABOUT</li></NavItem>
//                 <NavItem><li>LOCATION</li></NavItem>
//                 <NavItem><li>RESOURCES</li></NavItem>
//                 <NavItem><li>VOLUNTEER</li></NavItem>
//                 <NavItem><img className='donate' src={'https://imgur.com/4OrYh2K.png'} alt={'DONATE'} /></NavItem>
//             </ul>
//             </Navbar >
//     );
// };

// export default NavBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Navbar,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';

// function NavBar(props) {
//   return (
//     <Navbar expand="md" className="custom-navbar">
//       <Nav className="mr-auto">
//         <NavItem>
//           <img className="logo" src={'https://imgur.com/Dv5KY2h.png'} alt={'FNB LOGO'} />
//         </NavItem>
//         <NavItem>
//           <img className="fnb" src={'https://imgur.com/Fa1q8d0.png'} alt={'FOOD NOT BOMBS'} />
//         </NavItem>
//         <NavItem>
//         <NavLink tag={Link} to="/" className="nav-link" activeClassName="active">HOME</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to="/about" activeClassName="selected">ABOUT</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to="/location" activeClassName="selected">LOCATION</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to="/resources" activeClassName="selected">RESOURCES</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to="/volunteer" activeClassName="selected">VOLUNTEER</NavLink>
//         </NavItem>
//       </Nav>
//       <Nav className="ml-auto">
//         <NavItem>
//           <img className="donate" src={'https://imgur.com/4OrYh2K.png'} alt={'DONATE'} />
//         </NavItem>
//       </Nav>
//     </Navbar>
//   );
// }

// export default NavBar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function NavBar(props) {
  const location = useLocation();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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

  return (
    <nav className={navbarClassName}>
      <div className="logo-container">
        <img className="logo" src={'https://imgur.com/Dv5KY2h.png'} alt={'FNB LOGO'} />
        <img className="fnb" src={'https://imgur.com/Fa1q8d0.png'} alt={'FOOD NOT BOMBS'} />
      </div>
      <ul className="nav-list">
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
        {/* <li>
          <Link to="/volunteer" className={`nav-link ${location.pathname === '/volunteer' && 'selected'}`}>VOLUNTEER</Link>
        </li> */}
      </ul>
      <div className="donate-container">
        <img className="donate" src={'https://imgur.com/4OrYh2K.png'} alt={'DONATE'} />
      </div>
    </nav>
  );
}

export default NavBar;
