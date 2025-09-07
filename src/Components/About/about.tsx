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
                    <p>I’m Habiba, a passionate software engineer with a love for both clean code and beautiful design.
                        My journey in tech has led me to explore multiple areas, from frontend development to UI/UX design and mobile application development, allowing me to bridge the gap between functionality and aesthetics.
                        What drives me is creating user-centered solutions that don’t just work, but feel natural and engaging.
                        I enjoy collaborating with teams, tackling complex problems, and continuously learning new tools and technologies to stay ahead in a fast-changing digital world.
                        When I’m not coding or designing, you’ll probably find me diving into a good book.</p>
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
