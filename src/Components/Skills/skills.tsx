import React from "react";
import "./skills.css";

const skillsData = [
    { title: "Programming Languages", content: "Java, Python, C/C++, MySQL, PostgreSQL, MongoDB, JavaScript, TypeScript, HTML, CSS, Dart" },
    { title: "Frameworks", content: "Node.js, Angular, Bootstrap, Tailwind, Flutter" },
    { title: "Soft Skills", content: "Team Work, Problem Solving, Adaptability, Creativity, Time Management, Work Ethic, Interpersonal Skills, Willingness to learn, Communication skills, Attention to Detail, Motivated, Friendly." },
    { title: "Developer Tools", content: "Git, Docker, GitHub, Azure, Figma, VS Code, IntelliJ, Pycharm, Codeblocks" },
    { title: "Libraries", content: "pandas, NumPy, ReactJS" },
];

const Skills: React.FC = () => {
    return (
        <div className="skills-section">
            
            <div className="header-title">
                <h1 >Skills</h1>
            </div>

            {/* Background image */}
            <img loading="lazy" src="assets/skills.png" alt="skills background" className="skills-bg" />

            <div className="skills-grid">
                {skillsData.map((skill, index) => {
                    // center the soft skills card
                    const isSoftSkills = skill.title === "Soft Skills";
                    return (
                        <div
                            key={index}
                            className={`skill-card-wrapper ${isSoftSkills ? "soft-skills" : ""}`}
                        >
                            <div className="skill-card">
                                <h5 className="skill-title">{skill.title}</h5>
                                <p className="skill-content">{skill.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
