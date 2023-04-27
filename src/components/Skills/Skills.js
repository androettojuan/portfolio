import React from "react";
import "./Skills.css";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiPython, SiSqlite, SiFirebase } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <span className="skills-title">My Skills</span>
      <div className="container-icons">
        <div className="container-icon">
          <IoLogoHtml5 className="icon"></IoLogoHtml5>
          <span className="icon-title">HTML</span>
        </div>
        <div className="container-icon">
          <IoLogoCss3 className="icon"></IoLogoCss3>
          <span className="icon-title">CSS</span>
        </div>
        <div className="container-icon">
          <FaReact className="icon"></FaReact>
          <span className="icon-title">React</span>
        </div>
        <div className="container-icon">
          <FaBootstrap className="icon"></FaBootstrap>
          <span className="icon-title">Bootstrap</span>
        </div>
        <div className="container-icon">
          <IoLogoJavascript className="icon"></IoLogoJavascript>
          <span className="icon-title">JavaScript</span>
        </div>
        <div className="container-icon">
          <SiTypescript className="icon"></SiTypescript>
          <span className="icon-title">TypeScript</span>
        </div>
        <div className="container-icon">
          <SiPython className="icon"></SiPython>
          <span className="icon-title">Python</span>
        </div>
        <div className="container-icon">
          <SiSqlite className="icon"></SiSqlite>
          <span className="icon-title">SQLite</span>
        </div>
        <div className="container-icon">
          <FaNodeJs className="icon"></FaNodeJs>
          <span className="icon-title">Node.js</span>
        </div>
        <div className="container-icon">
          <span className="icon-express">express</span>
          <span className="icon-title">Express</span>
        </div>
        <div className="container-icon">
          <SiFirebase className="icon"></SiFirebase>
          <span className="icon-title">Firebase</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
