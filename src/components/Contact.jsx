import React from "react";
import "../styles/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return(
        <div className="contact-container">
        <div className="contact-svg">
            <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
        <h2 class="responsive-text">Feel free to reach out to us for any queries <span class="desktop-break"></span> or collaboration opportunities</h2>
        <div className="contact-info">
        <a href="mailto:techdoodle2025@gmail.com" className="email-btn-contact">
        <span>&#9993;</span> Email
      </a>

      <a
        href="https://wa.me/8754327976" 
        className="call-btn-contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
        </div>


        </div>
    )
}