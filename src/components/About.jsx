import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className={"aboutStyle"} id={"about"}>
            <div className="overlay"></div>
            <div className="contentStyle">
                <h2 className={"titleStyle"}>About Me</h2>
                <p className={"aboutMeDescription"}>
                    Hello! I'm a passionate Game Developer with a knack for transforming innovative ideas into immersive
                    gaming experiences. With over three years of hands-on experience in the industry,
                    I pride myself on my ability to harness the latest technologies to create engaging and exciting
                    games that resonate with players.
                    <br/>
                    <br/>
                    Currently, I'm diving into the world of multiplayer games.
                    This endeavor has not only allowed me to explore the intricacies of game design but also to tackle
                    backlog issues and establish a
                    robust features architecture that enhances gameplay.
                    <br/>
                    <br/>
                    My journey in game development has equipped me with a meticulous eye for detail and a thorough
                    understanding of gaming trends.
                    I am proficient in various programming languages, which enables me to write clean, readable, and
                    reusable code that is well-documented.
                    I believe that quality code is the backbone of any successful game, and I strive to maintain high
                    standards in all my projects.
                    <br/>
                    <br/>
                    I have a proven track record of improving existing gaming engines and tools, boosting productivity,
                    and optimizing game performance.
                    My experience includes debugging complex problems, prioritizing tasks effectively. I am dedicated to
                    refining game architecture and
                    maintaining boilerplate code to ensure seamless gameplay experiences.
                    <br/>
                    <br/>
                    As a highly energetic professional, I thrive in collaborative environments where creativity and
                    innovation flourish.
                    I am always eager to learn and adapt to new challenges, and I look forward to contributing my skills
                    to exciting
                    projects in the gaming industry.
                    <br/>
                    <br/>
                    Let’s connect and explore the endless possibilities of game development together!
                </p>
            </div>
        </section>
    );
};

export default About;
