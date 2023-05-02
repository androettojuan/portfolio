import React, { useState } from "react";
import "./Header.css";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="Header">
      <div className="container-header">
        <div>
          <a className="link" href="#home">
            Inicio
          </a>
          <a className="link" href="#about">
            Sobre mi
          </a>          
          <a className="link" href="#portfolio">
            Proyectos
          </a>
          <a className="link" href="#contact">
            Contacto
          </a>
        </div>
        <button className="button-header">Es</button>
        <button className="button-menu" onClick={() => setShowMenu(!showMenu)}>
          <FiAlignJustify />
        </button>
      </div>
      {showMenu && (
        <div className="div-menu">
          <div className="link-container">
            <a className="link-menu" href="#home">
              Home
            </a>
            <a className="link-menu" href="#about">
              About
            </a>
            <a className="link-menu" href="#portfolio">
              Portfolio
            </a>
            <a className="link-menu" href="#contact">
              Contact
            </a>
          </div>
          <button className="button-header">Es</button>
        </div>
      )}
    </div>
  );
};

export default Header;
