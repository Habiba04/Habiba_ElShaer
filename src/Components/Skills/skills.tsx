import React from "react";
import "./skills.css";

const skillsData = [
    { 
        title: "Programming Languages", 
        content: "JavaScript, TypeScript, Dart, Python, Java, C/C++, SQL (MySQL, PostgreSQL, MongoDB), HTML, CSS" 
    },
    { 
        title: "Frameworks & Libraries", 
        content: "ReactJS (Redux), Flutter (Bloc/Provider), Node.js, Angular, Ant Design, Bootstrap, Tailwind, pandas, NumPy, Matplotlib" 
    },
    { 
        title: "Soft Skills", 
        content: "Team Work, Problem Solving, Adaptability, Creativity, Time Management, Work Ethic, Interpersonal Skills, Willingness to learn, Communication skills, Attention to Detail, Motivated, Friendly." 
    },
    { 
        title: "Cloud & Data Tools", 
        content: "Firebase, Supabase, Azure, Apache NiFi, SSIS, Alteryx, REST APIs, Apidog, Postman" 
    },
    { 
        title: "Developer Tools", 
        content: "Git, GitHub, Docker, Figma, VS Code, IntelliJ, PyCharm, Codeblocks" 
    },
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
