import React from "react";
import { FaCode, FaGamepad, FaTools, FaLightbulb, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { SiUnity, SiGit } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
    const currentSkills = [
        { name: "C#", icon: <FaCode size={30} /> },
        { name: "Unity 3D", icon: <SiUnity size={30} /> },
        { name: "Cross-Platform Development", icon: <FaTools size={30} /> },
        { name: "Debugging and Testing", icon: <FaTools size={30} /> },
        { name: "GitHub", icon: <FaGithub size={30} /> },
        { name: "Problem Solving", icon: <FaLightbulb size={30} /> },
        { name: "Performance Optimization", icon: <FaTools size={30} /> },
        { name: "Version Control", icon: <FaTools size={30} /> },
        { name: "Project Management", icon: <FaProjectDiagram size={30} /> },
    ];

    return (
        <section className={"skillsStyle"} id={"skills"}>
            <h2 className={"skillText"}>Skills</h2>
            <div className={"skillsGridStyle"}>
                {currentSkills.map((skill, index) => (
                    <div key={index} className={"skillItemStyle"}>
                        {skill.icon}
                        <p>{skill.name}</p>
                        {skill.level && <span className="skillLevel">{skill.level}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;