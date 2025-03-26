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
          <p>Showcase innovative ideas through research and presentations in symposium</p>
          <p style={{ color: "black" }}>venue: AI & DS Lab</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faCode} />
          <h3>PIXEL DOODLE</h3>
          <p>Analyze, identify, and solve coding issues in real-time challenges.</p>
          <p style={{ color: "black" }}>Venue: CSBS Lab</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faBrain} />
          <h3>CIPHER DOODLE <br/> </h3>
          <p>Test your knowledge with exciting cryptography challenges.</p>
          <p style={{ color: "black" }}>Venue: CSBS Lab</p>
        </div>
        </div>

        <div className="non-technical-events">

        <h2>Non-Technical Events</h2>

        <div className="event-detail">
          <FontAwesomeIcon icon={faTrophy} />
          <h3>TRESURE HUNT</h3>
          <p>Treasure Hunt! Solve clues, explore, and race to uncover hidden treasures. Adventure and fun await!</p>
          <p style={{ color: "black" }}>Venue: Mini auditorium</p>

        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={  faCircleNodes} />
          <h3>CONNECTION</h3>
          <p>Decode the mystery! Connect the given images to reveal a Song, word, or movie Think fast, link smart, and crack the puzzle! 🧩🎬🔥</p>
          <p style={{ color: "black" }}>Venue: Placement cell</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faPersonRifle} />
          <h3>FREE FIRE</h3>
          <p>🔥 Free Fire Esports Tournament! 🔥 Compete, strategize, and conquer the battlefield. Show your skills and claim victory! 🎮🏆</p>
          <p style={{ color: "black" }}>Venue: Room no.308</p>

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
