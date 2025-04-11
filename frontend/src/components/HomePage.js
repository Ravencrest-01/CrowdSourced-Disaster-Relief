import React from "react";
import ImageWrapper from "./ImageWrapper";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "../styles/homepage.css";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="homepage">
            <div className="left-wing">
                <ImageWrapper src="/images/1.jpg" alt="Earthquake Rescue" />
                <ImageWrapper src="/images/2.jpg" alt="Flood Africa" />
            </div>
            <div className="home-content">
            <h1 className="header"><Logo /></h1>
            <p className="tagline">Stay Informed, Stay Prepared:<br/>Act, Learn and Contribute</p>
            <button 
                    className="disaster-button"
                    onClick={() => navigate("/community-boards")} // Navigate to community board
                >
                    Disasters
                </button>
            </div>
            <div className="right-wing">
                <ImageWrapper src="/images/3.jpg" alt="Flood India" />
                <ImageWrapper src="/images/4.jpg" alt="Earthquake Aftermath" />
            </div>
        </div>
    );
};

export default HomePage;