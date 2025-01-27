import React from "react";
import ImageWrapper from "./ImageWrapper";

const HomePage = () => {
    return (
        <div className="homepage">
            <h1 className="logo"><span style= {{ color:"##0A4076" }}>Beacon</span><span style={{ color:"##FC5162"}}>Grid</span></h1>
            <p className="taglineUp">Stay Informed, Stay Prepared:</p>
            <p className="taglineDown">Act, Learn and Contribute</p>
            <div className="image-section">
                <ImageWrapper src="/images/1.jpg" alt="Earthquake Rescue" />
                <ImageWrapper src="/images/2.jpg" alt="Flood Africa" />
                <ImageWrapper src="/images/3.jpg" alt="Flood India" />
                <ImageWrapper src="/images/4.jpg" alt="Eartquake Aftermath" />
            </div>
            <button className="disaster-button">Disasters</button>
        </div>
    );
};

export default HomePage;