import React from 'react'
import Navbar from '../Components/NavBar/navbar'
import Hero from '../Components/HeroSection/hero'
import About from '../Components/About/about'
import Journey from '../Components/Journey/journey'
import Contact from '../Components/Contact/contact'
import Skills from '../Components/Skills/skills'
import Projects from '../Components/Projects/Projects'
import Certificates from '../Components/Certificate/certificates'
import ServicesSection from '../Components/Services/Services'

const PortfolioPage = () => {
    return (
        <div className="portfolioPage">
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="boho-divider">
                <img loading="lazy" src="assets/cloud.png" alt="cloud" className="cloud-shape" />
            </div>
            <About></About>
            <Journey></Journey>
            {/* <div className="bohemian">
                <div className="bohemian1">
                    <img src="assets/boho2.png" alt="boho" />
                </div>
            </div> */}
            <Skills></Skills>
            <div className="bohemian">
                <div className="bohemian2">
                    <img loading="lazy" src="assets/boho2.png" alt="boho" />
                </div>
            </div>
            <Certificates></Certificates>
            <div className="leaf">
                <div className="leaf-boho">
                    <img loading="lazy" src="assets/leaf.png" alt="boho" />
                </div>
            </div>
            <ServicesSection></ServicesSection>
            <div className="sun">
                <div className="sunny1">
                    <img loading="lazy" src="assets/sun.png" alt="boho" />
                </div>
            </div>
            <Projects></Projects>
            <div className="sun">
                <div className="sunny">
                    <img loading="lazy" src="assets/sun.png" alt="boho" />
                </div>
            </div>
            <Contact></Contact>
        </div>
    )
}

export default PortfolioPage
