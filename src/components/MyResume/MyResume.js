import React from "react";
import "./MyResume.css";
import Experience from "../Experience/Experience";

const MyResume = () => {
  return (
    <div className="container">
      <div className="container-details">
        <h1 className="title">Experience</h1>
        <Experience
          year={"May 2022 - Actualidad"}
          academy={"Loops"}
          role={"Full Stack Developer"}
          details={"React - Typescript - Firebase - PWA"}
        />
      </div>
      <div className="container-details">
        <h1 className="title">Education</h1>
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
