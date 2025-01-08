import React from "react";
import "./Header.css";
import companyLogo from '../assets/Images/MyPic.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li><button className="nav-button" onClick={() => scrollToSection("about")}>About Me</button></li>
                    <li><button className="nav-button" onClick={() => scrollToSection("skills")}>Skills</button></li>
                    <li><button className="nav-button" onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
                    <li><button className="contact-button" onClick={() => scrollToSection("contact")}>Contact Me</button></li>
                </ul>
            </nav>

            <div className="text-container">
                <h1 className="title">Hi, I am <span className="highlight">Muhammad Talha Arshad</span></h1>
                <p className="tagline">Bringing imagination to life through interactive experiences.</p>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/muhammad-talha-arshad-661286167/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/MTA25" target="_blank" rel="noopener noreferrer" className="icon github">
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="image-container">
                <img src={companyLogo} alt="My Picture" className="image" />
            </div>
        </header>
    );
};

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

export default Header;
