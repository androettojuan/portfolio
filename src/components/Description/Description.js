import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description-container">
      <div className="description">
        <img className="img-description" src="/fotoJuan.png" alt="about" />
        <div className="text-description">
          <span className="name">Juan Manuel Androetto</span>
          <span className="role">Full Stack Developer</span>
          <p className="role-description">
            Soy un desarrollador Full Stack apasionado por aprender y mejorar
            continuamente mis habilidades. Me considero un aprendiz rápido y
            siempre estoy en busca de nuevos desafíos para seguir creciendo
            profesionalmente. Mi estilo de trabajo se enfoca en el trabajo en
            equipo y en colaborar con mis compañeros para alcanzar nuestros
            objetivos. Asimismo, me caracterizo por ser una persona muy
            responsable que siempre trata de dar lo mejor de sí en todo lo que
            hago.
          </p>
          <ul className="list">
            <li className="list-li">
              <b className="b">De: </b>General Levalle, Córdoba, Argentina
            </li>
            <li className="list-li">
              <b className="b">Vivo en:</b>Rio Cuarto, Córdoba, Argentina
            </li>
            <li className="list-li">
              <b className="b">Edad:</b>27
            </li>
          </ul>
          <button className="button-cv">Descargar CV</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
