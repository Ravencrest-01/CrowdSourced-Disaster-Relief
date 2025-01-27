import React from "react";
import { Link } from "react-router-dom";
import "../styles/logo.css";

const logo = () => {
    return (
        <div className="Logo">
            <Link to="/" >
                <span className="beacon">Beacon</span><span className="grid">Grid</span>
            </Link>
        </div>
    );
};

export default logo;