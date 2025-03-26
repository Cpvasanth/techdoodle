import React from "react";
import "../styles/event.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChalkboardTeacher, 
  faCode, 
  faBrain, 
  faPersonRifle,
  faCircleNodes,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

export default function Event() {
  return (
    <div className="event-container">
      <h1>Events</h1>
      <div className="events">
        <div className="technical-events">
        <h2>Technical Events</h2>

        <div className="event-detail">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <h3>Paper presentation <br></br></h3>
          {/* <p>Showcase innovative ideas through research and presentations in symposium. <br/> <span style={{color: "red"}}>Paper submission last date: 15TH March 2025</span></p> */}
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faCode} />
          <h3>PIXEL DOODLE</h3>
          <p>Analyze, identify, and solve coding issues in real-time challenges.</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faBrain} />
          <h3>CIPHER DOODLE <br/> </h3>
          <p>Test your knowledge with exciting cryptography challenges.</p>
        </div>
        </div>

        <div className="non-technical-events">

        <h2>Non-Technical Events</h2>

        <div className="event-detail">
          <FontAwesomeIcon icon={faTrophy} />
          <h3>TRESURE HUNT</h3>
          <p>Treasure Hunt! Solve clues, explore, and race to uncover hidden treasures. Adventure and fun await!</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={  faCircleNodes} />
          <h3>CONNECTION</h3>
          <p>Decode the mystery! Connect the given images to reveal a Song, word, or movie Think fast, link smart, and crack the puzzle! 🧩🎬🔥</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faPersonRifle} />
          <h3>FREE FIRE</h3>
          <p>🔥 Free Fire Esports Tournament! 🔥 Compete, strategize, and conquer the battlefield. Show your skills and claim victory! 🎮🏆</p>
        </div>
        </div>

        {/* <div className="event-detail">
          <FontAwesomeIcon icon={faLaptopCode} />
          <h3>Web Development Contest</h3>
          <p>Build innovative websites and showcase your development skills creatively.</p>
        </div> */}

      </div>
    </div>
  );
}
