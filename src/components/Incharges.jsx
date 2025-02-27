import React, { useState } from "react";
import "../styles/incharge.css";

const Incharges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incharges = [
    { name: "Dhanasekaren", role: "President", img: "https://via.placeholder.com/150" },
    { name: "Sanjay K", role: "Secretary", img: "https://via.placeholder.com/150" },
    { name: "Vishwaa P", role: "Social Media Manager", img: "https://via.placeholder.com/150" },
  ];



  return (
    <div className="incharge-container">
      <h1 className="incharge-heading">Our incharges</h1>
        <div className="card-container">
          {incharges.map((person, index) => (
            <div key={index} className={`incharge-card ${index === currentIndex ? "active" : ""}`}>
              <img src={person.img} alt={person.name} className="incharge-img" />
              <div className="info">
                <h2 className="incharge-name">{person.name}</h2>
                <p className="incharge-role">{person.role}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Incharges;
