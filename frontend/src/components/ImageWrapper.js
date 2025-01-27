import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/ImageWrapper.css"

const ImageWrapper = ({ src, alt}) => {

    const [isLoaded, setIsLoaded] = useState(false);


    return (
        <div className="image-wrapper">
            {!isLoaded && <div className="placeholder">Loading...</div>}
            <img
                src={src}
                alt={alt}
                title={alt}
                onLoad={() => setIsLoaded(true)}
                className={isLoaded ? "loaded" : "loading"}
            />
        </div>
    );
};

ImageWrapper.propTypes ={
    src: PropTypes.string.isRequired, //Location of the image
    alt: PropTypes.string.isRequired, //Alternative name for the image
};

export default ImageWrapper;