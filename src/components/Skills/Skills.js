import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-container">
        <span className="skills-title">My Skills</span>
        <div className="skills-list">
          <div className="skills-list-item">
            <div className="logos">
              <img src="\Logos\React-icon.svg.png" alt="react" />
              <img src="\Logos\HTML5_oval_logo.png" alt="html" />
              <img src="\Logos\CSS3_logo_and_wordmark.svg.png" alt="css" />
              <img src="\Logos\JavaScript_logo_2.svg.png" alt="javascript" />
              <img src="\Logos\Bootstrap_logo.svg.png" alt="bootstrap" />
              <img src="\Logos\Node.js_logo.svg.png" alt="node" />
              <img src="\Logos\Expressjs.png" alt="express" />
              <img src="\Logos\SQLite_Logo_4.png" alt="sqlite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
