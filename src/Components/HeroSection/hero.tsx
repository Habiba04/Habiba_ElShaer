import React from 'react';
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div>
            <div className="container-hero">
                <div className="text">
                    <div className="title">
                        <h1>
                            Blending Design & Development | UI/UX, Frontend & Mobile Apps
                        </h1>
                    </div>
                    <div className="welcome">
                        <span>
                            <strong>Hi, I’m Habiba!</strong><br />
                            I love turning ideas into digital experiences that feel simple, modern, and engaging. Whether it’s a website or a mobile app, my goal is to make technology feel natural and enjoyable to use.
                        </span>
                    </div>
                </div>

                <div className="image-container">
                    {/* <div className="image-background-shape"></div> */}
                    <img src="assets/portfolio-img.png" alt="Habiba" />
                </div>
                <div className="button">
                    <button className="btn-explore" onClick={() => {
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}>Start Exploring <FontAwesomeIcon className='icon' icon={faAnglesDown} /></button>
                </div>
            </div>

        </div>
    );
};

export default Hero;