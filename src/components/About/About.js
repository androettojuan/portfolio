import React from "react";
import Description from "../Description/Description";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";

const About = () => {
  return (
    <div className="about" id="about">
      <Description></Description>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  );
};

export default About;
