import React, { useState } from "react";
import "./Portfolio.css";
import companyLogo from '../assets/Images/Projects/Azure5.png';
import game2 from '../assets/Images/Projects/fliptiles1.jpg';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Azure Dungeon Suurvival",
            description: "A thrilling game of strategy and luck.",
            images: [companyLogo, "path/to/mines2.png", "path/to/mines3.png"],
        },
        {
            title: "Tile flip",
            description: "Test your nerves with this fast-paced adventure.",
            images: [game2, "path/to/crash2.png", "path/to/crash3.png"],
        },
        {
            title: "Roulette",
            description: "Spin the wheel and try your luck!",
            images: ["path/to/roulette1.png", "path/to/roulette2.png", "path/to/roulette3.png"],
        },
        {
            title: "Ludo",
            description: "A classic game reimagined for modern times.",
            images: ["path/to/ludo1.png", "path/to/ludo2.png", "path/to/ludo3.png"],
        },
        {
            title: "Jackpot",
            description: "Can you hit the jackpot?",
            images: ["path/to/jackpot1.png", "path/to/jackpot2.png", "path/to/jackpot3.png"],
        },
        {
            title: "Coinflip",
            description: "Heads or tails? Make your choice!",
            images: ["path/to/coinflip1.png", "path/to/coinflip2.png", "path/to/coinflip3.png"],
        },
    ];

    const openPopup = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    return (
        <div className="portfolio-section">
            <h1 className="portfolio-title">Our Games</h1>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="portfolio-card"
                        onClick={() => openPopup(project)}
                    >
                        <img src={project.images[0]} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {selectedProject && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="popup-close" onClick={closePopup}>
                            ✖
                        </button>
                        <h2 className="popup-title">{selectedProject.title}</h2>
                        <p className="popup-description">{selectedProject.description}</p>
                        <div className="popup-images">
                            {selectedProject.images.map((image, idx) => (
                                <img
                                    key={idx}
                                    src={image}
                                    alt={`${selectedProject.title} ${idx + 1}`}
                                    className="popup-image"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
