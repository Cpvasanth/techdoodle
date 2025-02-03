import React from "react";
import "../styles/event.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChalkboardTeacher, 
  faCode, 
  faBrain, 
  faLaptopCode 
} from '@fortawesome/free-solid-svg-icons';

export default function Event() {
  return (
    <div className="event-container">
      <h1>Events</h1>
      <div className="events">

        <div className="event-detail">
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <h3>Paper presentation <br></br></h3>
          <p>Showcase innovative ideas through research and presentations in symposium.</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faCode} />
          <h3>Debugging</h3>
          <p>Analyze, identify, and solve coding issues in real-time challenges.</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faBrain} />
          <h3>Technical Quiz <br/> </h3>
          <p>Test your knowledge with exciting tech-focused quiz challenges.</p>
        </div>

        <div className="event-detail">
          <FontAwesomeIcon icon={faLaptopCode} />
          <h3>Web Development Contest</h3>
          <p>Build innovative websites and showcase your development skills creatively.</p>
        </div>

      </div>
    </div>
  );
}
