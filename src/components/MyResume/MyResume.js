import React from "react";
import "./MyResume.css";

const MyResume = () => {
  return (
    <div className="container">
      <div className="container-details">
        <h1 className="title">Experience</h1>
        <ul>
          <li>
            <div className="content">
              <h5>Full Stack Developer</h5>
              <span className="academy">Loops</span>
              <span className="date">May 2022 - Actualidad</span>
              <p>React - Typescript - Firebase - PWA</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="container-details">
        <h1 className="title">Education</h1>
        <ul className="ul-edu">
          <li>
            <div className="content">
              <h5>Curso de Python</h5>
              <span className="academy">mastermind.ac</span>
              <span className="date">2021</span>
              <p>Fundamentos de la programación</p>
            </div>
          </li>
          <li>
            <div className="content">
              <h5>Curso de Javascript, HTML y CSS</h5>
              <span className="academy">mastermind.ac</span>
              <span className="date">2021</span>
              <p>Javascript Básico - Maquetado con HTML - CSS</p>
            </div>
          </li>
          <li>
            <div className="content">
              <h5>Curso de Backend con Node.js</h5>
              <span className="academy">Platzi</span>
              <span className="date">2022</span>
              <p>API REST con Express.js</p>
            </div>
          </li>
          <li>
            <div className="content">
              <h5>Curso de React</h5>
              <span className="academy">Udemy</span>
              <span className="date">2022</span>
              <p>
                Componentes funcionales y de clases - Hooks - React Router -
                Context - Redux - Testing
              </p>
            </div>
          </li>
          <li>
            <div className="content">
              <h5>Curso de bases de datos (SQL)</h5>
              <span className="academy">youtube.com/@soydalto</span>
              <span className="date">2023</span>
              <p>SQLite - MySQL</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyResume;
