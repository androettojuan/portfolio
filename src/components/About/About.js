import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="description">
        <img className="img-description" src="/fotoJuan.png" alt="about" />
        <div className="text-description">
          <span className="name">Juan Manuel Androetto</span>
          <span className="role">Full Stack Developer</span>
          <p className="role-description">
            I am a Full Stack Developer with a passion for learning and
            improving my skills. I am a fast learner and I am always looking for
            new challenges. I am a team player and I am always willing to help
            my teammates. I am a very responsible person and I always try to
            give my best in everything I do.
          </p>
          <ul className="list">
            <li className="list-li">
              <b className="b">From: </b>General Levalle, Córdoba, Argentina
            </li>
            <li className="list-li">
              <b className="b">Lives in:</b>Rio Cuarto, Córdoba, Argentina
            </li>
            <li className="list-li">
              <b className="b">Age:</b>27
            </li>
          </ul>
          <button className="button-cv">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
