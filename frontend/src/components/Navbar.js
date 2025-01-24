import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="Logo"><Link to="/"><span style={{ color: '#0A4076'}}>Beacon</span><span style={{ color: '#FF4B4B'}}>Grid</span></Link></div>
            <ul className="nav-links">
                <li> <Link to="/community-boards">Community Boards</Link> </li>
                <li> <Link to="/report">Report</Link> </li>
                <li> <Link to="/resources">Resources</Link> </li>
                <li> <Link to="/volunteer">Volunteer</Link> </li>
            </ul>
        </nav>
    );
};

export default Navbar;