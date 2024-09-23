// src/components/Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light text-center py-3">
            <div className="container">
                <p>
                    &copy; {new Date().getFullYear()} My Ecommerce Site. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
