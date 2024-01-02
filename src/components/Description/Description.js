import React from "react";
import "./Description.css";

const Description = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "curriculum.pdf";
    link.download = "curriculum.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const calcularEdad = (fecha) => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  }

  return (
    <div className="description-container">
      <div className="description">
        <img className="img-description" src="/fotoJuan.jpg" alt="about" />
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
              <b className="b">Edad:</b> {
                calcularEdad("1995/08/03")
              }
            </li>
          </ul>
          <button className="button-cv" onClick={handleDownload}>
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
