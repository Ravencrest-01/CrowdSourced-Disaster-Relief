import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><span style= {{ color:"##0A4076" }}>Beacon</span><span style={{ color:"##FC5162"}}>Grid</span></Link>
            </div>
            <ul className="nav-links">
                <NavButton to="/community-boards" label="Community Board" />
                <NavButton to="/report" label="Report" />
                <NavButton to="/resources" label="Resources" />
                <NavButton to="/volunteer" label="Volunteer" />
            </ul>
        </nav>
    );
};

export default Navbar;