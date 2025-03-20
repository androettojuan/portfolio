import React from "react";
import "./MyResume.css";
import Experience from "../Experience/Experience";

const MyResume = () => {
  return (
    <div className="container">
      <div className="container-details">
        <span className="title">Experiencia</span>
        <Experience
          year={"May 2022 - Actualidad"}
          academy={"Loops"}
          role={"Full Stack Developer"}
          details={"React - Typescript - Firebase - PWA"}
        />
        <Experience
          year={"May 2022 - Actualidad"}
          academy={"Freelance"}
          role={"Frontend Developer"}
          details={"React - Typescript - PWA"}
        />
      </div>
      <div className="container-details">
        <span className="title">Educación</span>
        <Experience
          year={"2021"}
          academy={"mastermind.ac"}
          role={"Curso de Python"}
          details={"Fundamentos de la programación"}
        />
        <Experience
          year={"2021"}
          academy={"mastermind.ac"}
          role={"Curso de Javascript, HTML y CSS"}
          details={"Javascript Básico - Maquetado con HTML - CSS"}
        />
        <Experience
          year={"2022"}
          academy={"Platzi"}
          role={"Curso de Backend con Node.js"}
          details={"API REST con Express.js"}
        />
        <Experience
          year={"2022"}
          academy={"Udemy"}
          role={"Curso de React"}
          details={
            "Componentes funcionales y de clases - Hooks - React Router - Context - Redux - Testing"
          }
        />
        <Experience
          year={"2023"}
          academy={"youtube.com/@soydalto"}
          role={"Curso de bases de datos (SQL)"}
          details={"SQLite - MySQL"}
        />
      </div>
    </div>
  );
};

export default MyResume;
