import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="icons-c">
        <div
          className="icon-c"
          onClick={() =>
            window.open("https://www.linkedin.com/in/juan-androetto/")
          }
        >
          <AiFillLinkedin className="contact-icon"></AiFillLinkedin>
          <span className="contact-title">Linkedin</span>
        </div>
        <div
          className="icon-c"
          onClick={() => window.open("https://github.com/androettojuan")}
        >
          <AiFillGithub className="contact-icon"></AiFillGithub>
          <span className="contact-title">Github</span>
        </div>
      </div>
      <div className="contact-details">
        <div className="container-details-contact">
          <FiMail />
          <span className="email">juan.androetto36@gmail.com</span>
        </div>
        <div className="container-details-contact">
          <GoLocation />
          <span className="address">Río cuarto, Córdoba, Argentina</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
