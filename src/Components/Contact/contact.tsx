import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className='contactSection' id='contact'>
            <div className="contacts">
                <div className="header-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-info">
                    <div className="phone">
                        <FontAwesomeIcon className='icon' icon={faPhone} />
                        <div className="numbers">
                            <p>+201060909193</p>
                            <p>+201128368397</p>
                        </div>
                    </div>
                    <div className="github">
                        <FontAwesomeIcon className='icon' icon={faGithub} />
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Habiba04">github.com/Habiba04</a>
                    </div>
                    <div className="email">
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                        <a href="mailto:habiba.elshaer004@gmail.com?subject=Contact" className="link">habiba.elshaer004@gmail.com</a>
                    </div>
                    <div className="linkedin">
                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/habibaelshaer/">linkedin.com/in/habibaelshaer</a>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <p>&copy; Made with love &lt;3 <div className="name">Habiba Elshaer</div></p>
            </div>
        </div>
    )
}

export default Contact
