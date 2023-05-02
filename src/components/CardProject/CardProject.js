import React from "react";
import "./CardProject.css";

const CardProject = ({ img, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={img} alt={img} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardProject;
