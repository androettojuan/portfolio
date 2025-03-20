import React from "react";
import CardProject from "../CardProject/CardProject";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <div className="projects">
      <span className="projects-title">Mis proyectos</span>
      <div className="projects__container">
        <CardProject
          img="\Logos\jugaya.png"
          title="jugaya.ar"
          description="Una app para gestionar reservas el clubes deportivos como canchas de padel, futbol, tenis, etc."
          onClick={() => window.open("https://www.jugaya.ar")}
        ></CardProject>
        <CardProject
          img="\Logos\landing-page.png"
          title="Landing Page para JugaYa"
          description="Página de inicio diseñada para unirse a la comunidad de Jugaya."
          onClick={() => window.open("https://clubes.jugaya.ar/")}
        ></CardProject>
        <CardProject
          img="\Logos\qr-jugaya.png"
          title="Pagina de descarga de la app jugaya"
          description="Escaneando el qr te lleva a la pagina de descarga de la app jugaya."
          onClick={() => window.open("https://qr.jugaya.ar/")}
        ></CardProject>
      </div>
    </div>
  );
};

export default MyProjects;
