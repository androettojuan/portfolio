import React from "react";
import Description from "../Description/Description";
import Skills from "../Skills/Skills";
import MyResume from "../MyResume/MyResume";

const About = () => {
  return (
    <div className="about" id="about">
      <Description></Description>
      <Skills></Skills>
      <MyResume></MyResume>
    </div>
  );
};

export default About;
