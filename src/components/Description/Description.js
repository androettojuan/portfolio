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
  };

  return (
    <div className="description-container">
      <div className="description">
        <img className="img-description" src="/fotoJuan.jpg" alt="about" />
        <div className="text-description">
          <span className="name">Juan Manuel Androetto</span>
          <span className="role">Full Stack Developer</span>
          <p className="role-description">
            Soy desarrollador frontend con experiencia en React. Hace tres años
            me inicié en la programación gracias a mi hermano, quien ya
            trabajaba en el rubro. Siempre me interesó el desarrollo, pero no
            fue hasta un viaje a Italia que aproveché el tiempo libre para
            comenzar a estudiar. Poco después surgió la oportunidad de crear
            JugaYa, una app para gestionar reservas en la cancha de pádel de mi
            familia. Inicialmente era un proyecto interno, pero luego lo
            expandimos para que otros clubes pudieran administrar sus horarios.
            Tras su lanzamiento, la app me permitió corregir errores y mejorar
            sus funciones. Actualmente, sigo mejorando JugaYa, trabajando en
            proyectos personales y buscando oportunidades en una empresa.
          </p>
          <ul className="list">
            <li className="list-li">
              <b className="b">De: </b>General Levalle, Córdoba, Argentina
            </li>
            <li className="list-li">
              <b className="b">Vivo en:</b>Rio Cuarto, Córdoba, Argentina
            </li>
            <li className="list-li">
              <b className="b">Edad:</b> {calcularEdad("1995/08/03")}
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
