import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/NavButton.css";

const NavButton = ({ to, label }) => {
    return (
        <li className="nav-button">
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
                {label}
            </NavLink>
        </li>
    );
};

NavButton.propTypes = {
    to: PropTypes.string.isRequired, // URL to navigate to
    label: PropTypes.string.isRequired, // Button label
};

export default NavButton;
