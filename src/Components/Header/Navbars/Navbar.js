import React from 'react'
import { NavLink } from "react-router-dom";
export default function Navbar({ scroll }) {
    if (scroll > 400) {
        document.documentElement.style.setProperty('--hoverColor', 'black');
    } else {
        document.documentElement.style.setProperty('--hoverColor', 'white');
    }
    const isActive = {
        fontWeight: "bold",
        color: "var(--secondary_color)",
    };
    return (
        <nav>
            <ul className='flexallcenter'>
                <li className="nav-item">
                    <NavLink exact to="/" className='nav-Link' activeStyle={isActive}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/About" className='nav-Link' activeStyle={isActive}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/Services" className='nav-Link' activeStyle={isActive}>Services</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink exact to="/Testimonials"  className='nav-Link' activeStyle={isActive}>Testimonials</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink exact to="/My_work" className='nav-Link' activeStyle={isActive}>My Work</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/Contact" className='nav-Link' activeStyle={isActive}>Contact</NavLink>
                </li>
            </ul>
        </nav>

    )
}

