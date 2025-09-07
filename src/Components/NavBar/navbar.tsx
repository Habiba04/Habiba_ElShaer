// navbar.tsx
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="name">Habiba Mahmoud Mostafa El-Shaer</div>
            <div className="links">
                <ul>
                    <li>
                        <a onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}>Contact</a>
                    </li>
                    <li>
                        <a href="assets/Habiba_Elshaer.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
