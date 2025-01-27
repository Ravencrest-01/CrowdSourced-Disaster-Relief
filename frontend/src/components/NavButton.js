import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/NavButton.css";

const Navbutton = ({ to, label}) => {
    return (
        <li className="nav-button">
            <Link to={to} className="nav-link">
                {label}
            </Link>
        </li>
    );
};

Navbutton.propTypes = {
    to: PropTypes.string.isRequired, //URL to navigate to
    label: PropTypes.string.isRequired, //Button label
};

export default Navbutton;