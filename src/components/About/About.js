import React from "react";
import "./About.css";
import Description from "../Description/Description";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <div className="about" id="about">
      <Description></Description>
      <Skills></Skills>
    </div>
  );
};

export default About;
