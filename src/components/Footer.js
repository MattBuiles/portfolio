import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Mateo Builes Duque. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://github.com/MattBuiles" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/mateo-builes-73453531b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://x.com/MateB53" target="_blank" rel="noopener noreferrer">X</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;