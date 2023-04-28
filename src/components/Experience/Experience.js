import React from "react";
import "./Experience.css";

const Experience = ({ year, academy, role, details }) => {
  return (
    <div className="experience">
      <div className="info-experience">
        <h5>{role}</h5>
        <span className="academy">{academy}</span>
        <span className="year">{year}</span>
      </div>
      <p>{details}</p>
    </div>
  );
};

export default Experience;
