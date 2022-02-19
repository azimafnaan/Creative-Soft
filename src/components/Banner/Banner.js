import React from 'react';
import './Banner.css';
import img from '../../images/logos/Frame.png'
const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container banner-container">
                <div className="banner-text">
                    <h2>We are Provide</h2>
                    <h2>Digital Software Solution</h2>
                    <p>With 11+ years of experience in the Software industry, we proved that the combination of strategic thinking and expertise will create a fascinating digital experience.</p>
                    <button className="banner-btn">Contact Us</button>
                </div>
                <div className="banner-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;