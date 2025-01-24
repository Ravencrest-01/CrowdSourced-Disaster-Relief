import React from "react";

const HomePage = () => {
    return(
        <div className="homepage">
            <h1 className="logo"><span style={{ color: '#0A4076'}}>Beacon</span><span style={{ color: '#FF4B4B'}}>Grid</span></h1>
            <p className="tagline">Stay Informed, Stay Prepared: Act, Learn and Contribute</p>
            <div className="image-section">
                <div className="image-wrapper">
                    <img src="/images/1.jpg" alt="First"></img>
                </div>
                <div className="image-wrapper">
                    <img src="/images/2.jpg" alt="Second"></img>
                </div>
                <div className="image-wrapper">
                    <img src="/images/3.jpg" alt="Third"></img>
                </div>
                <div className="image-wrapper">
                    <img src="/images/4.jpg" alt="Fourth"></img>
                </div>
            </div>
            <button className="disaster-button">Disasters</button>         
        </div>
    );
};

export default HomePage;