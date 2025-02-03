import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
        <div>
        <a href="https://www.linkedin.com/in/cpvasanth/" aria-label="LinkedIn Profile of Vasa">
        <h2 className="footer-h2">Developed by Vasa&hearts;</h2>
        </a>
        </div>

        <div>
        <a href="https://www.instagram.com/techdoodle2025/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile of TechDoodle2025">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        <a href="https://www.linkedin.com/in/techdoodle2025/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile of TechDoodle2025">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a href="https://www.facebook.com/techdoodle2025/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile of TechDoodle2025">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        </div>


        </div>
    )
}