import React from 'react';
import image from '../Media/White.svg'

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <p>Tech</p>
            <div id="logo"><img src={image} alt="" /></div>
            <p>Nexus</p>
        </nav>
    )
}

export default Navbar;