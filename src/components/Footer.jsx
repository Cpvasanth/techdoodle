import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer">
        <div>
        <a href="https://www.linkedin.com/in/cpvasanth/" aria-label="LinkedIn Profile of Vasa">
        <h2 className="footer-h2">Vasa&hearts;</h2>
        </a>
        </div>

        <div>
        <a href="https://www.instagram.com/techdoodle2025/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile of TechDoodle2025">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        <a href="https://www.X.com/techdoodle2025/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile of TechDoodle2025">
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61572684644333" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile of TechDoodle2025">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        </div>


        </div>
    )
}