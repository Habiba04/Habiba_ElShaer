import React from "react";
import "./journey.css";

const Journey = () => {
    return (
        <div className="journey">
            <div className="header-title">
                <h1>Journey</h1>
            </div>
            <div className="boho">
                <div className="boho1">
                    <img src="/assets/boho.png" alt="boho" />
                </div>
            </div>
            <div className="education">
                <div className="content-journey">
                    <div className="journey-title">
                        <h3>Education</h3>
                    </div>
                    <div className="journey-subtitle">
                        <p>Helwan University</p>
                    </div>
                    <div className="journey-content">
                        <p>Faculty of Computers and Artificial Intelligence, Software Engineering program</p>
                    </div>
                </div>
            </div>
            <div className="hl">
                <div className="horizontal-line">
                <div className="center-circle"></div>
                </div>
            </div>
            <div className="experience">
                <div className="content-journey">
                    <div className="journey-title">
                        <h3>Experience</h3>
                    </div>
                    <div className="journey-subtitle">
                        <p>FABMisr Service Desk Internship</p>
                    </div>
                    <div className="journey-content">
                        <p>Collaborated with various IT departments to gain insights into how corporate IT teams operate and approach problem-solving. Explored different strategies for addressing a wide range of technical challenges.</p>
                    </div>
                </div>
            </div>
            <div className="boho">
                <div className="boho2">
                    <img src="/assets/boho.png" alt="boho" />
                </div>
            </div>
        </div>
    );
};

export default Journey;
