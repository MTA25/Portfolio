import React from "react";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Muhammad Talha Arshad. All Rights Reserved.</p>
        </footer>
    );
};

// Inline Styles for Footer
const footerStyle = {
    textAlign: "center",
    padding: "20px",
    background: "#222",
    color: "#fff",
};

export default Footer;
