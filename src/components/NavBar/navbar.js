import React from 'react';
import {Link} from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItems">HOME</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItems">ABOUT</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItems">RESUME</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItems">CONTACT</Link>
            </div>
        </nav>
    </div> 
  )
}

export default Navbar