import React from 'react';
import './MenuBar.css';
const MenuBar = () => {
    return (
        <div className="menu-section">
            <div className="nav-bar container">
                <div className="logo">
                    <span>Creative Soft</span>
                </div>
                <div className="menuBar">
                    <ul className="menu-item">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;