import React from "react";
import CardProject from "../CardProject/CardProject";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <div className="projects">
      <h2>See my work</h2>
      <div className="projects__container">
        <CardProject
          img="\Logos\Captura de pantalla 2023-04-28 120148.png"
          title="jugaya.ar"
          description="App para reservas de canchas"
        ></CardProject>
      </div>
    </div>
  );
};

export default MyProjects;
