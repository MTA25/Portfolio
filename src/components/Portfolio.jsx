import React, { useState } from "react";
import "./Portfolio.css";
import companyLogo from "../assets/Images/Projects/Azure5.png";
import game2 from "../assets/Images/Projects/fliptiles1.jpg";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            title: "Azure Dungeon Survival",
            description: "A thrilling game of strategy and luck.",
            images: [companyLogo, "path/to/mines2.png", "path/to/mines3.png"],
        },
        {
            title: "Tile Flip",
            description: "Test your nerves with this fast-paced adventure.",
            images: [game2, "path/to/crash2.png", "path/to/crash3.png"],
        },
    ];

    const openPopup = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.classList.add("no-scroll");
    };

    const closePopup = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.classList.remove("no-scroll");
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
        );
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
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="project-image"
                        />
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
                        <div className="popup-image-container">
                            <button className="popup-nav" onClick={handlePrev}>
                                ◀
                            </button>
                            <img
                                src={selectedProject.images[currentImageIndex]}
                                alt={`Slide ${currentImageIndex + 1}`}
                                className="popup-image-large"
                            />
                            <button className="popup-nav" onClick={handleNext}>
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
