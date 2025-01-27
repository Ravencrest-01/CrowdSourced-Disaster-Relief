import React from "react";
import PropTypes from "prop-types";
import "../styles/ImageWrapper.css"

const ImageWrapper = ({ src, alt}) => {
    return (
        <div className="image-wrapper">
            <img src={src} alt={alt} title={alt}/>
        </div>
    );
};

ImageWrapper.propTypes ={
    src: PropTypes.string.isRequired, //Location of the image
    alt: PropTypes.string.isRequired, //Alternative name for the image
};

export default ImageWrapper;