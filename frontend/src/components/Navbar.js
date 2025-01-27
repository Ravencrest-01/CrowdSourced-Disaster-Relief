import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "./Logo";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
           <Logo />
            <ul className="nav-links">
                <NavButton to="/report" label="Report" />
                <NavButton to="/resources" label="Resources" />
                <NavButton to="/volunteer" label="Volunteer" />
                <NavButton to="/community-boards" label="Community Board" />
            </ul>
        </nav>
    );
};

export default Navbar;