import React from 'react'
import './about.css';

const About = () => {
    return (

        <div className='AboutMe' id='about'>
            <div className="wave-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path fill="#E2E1DF" d="M0 30 Q360 110 720 30 T1440 30 V0 H0 Z" />
                </svg>
            </div>
            <div className="header-title">
                <h1>About Me</h1>
            </div>
            <div className="content">
                <p>I’m Habiba, a software engineer who enjoys blending clean code with beautiful design. I design and develop responsive web and mobile (Android & iOS) applications using ReactJS, Angular, Node.js, and Flutter. My strength lies in bridging design and functionality, combining user-friendly interfaces with robust backend integration.
                    I’m especially passionate about helping small businesses and startups bring their ideas to life, streamline operations, and deliver seamless digital experiences that keep users engaged. Beyond code, I love collaborating with teams, learning new tools, and growing with every project I take on. And when I’m not coding, you’ll probably find me with a good book in hand.</p>
            </div>
            <div className="wave-down">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path fill="#E2E1DF" d="M0 30 Q360 110 720 30 T1440 30 V0 H0 Z" />
                </svg>
            </div>
        </div>

    )
}

export default About
