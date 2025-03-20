import React from "react";
import Description from "../Description/Description";
import Skills from "../Skills/Skills";
import MyResume from "../MyResume/MyResume";
import MyProjects from "../MyProjects/MyProjects";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <Description></Description>
      </div>
      <div id="portfolio">
        <MyProjects></MyProjects>
      </div>
      <Skills></Skills>
      <div id="experience">
        <MyResume></MyResume>
      </div>
    </div>
  );
};

export default About;
