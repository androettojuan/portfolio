import React, { useState } from "react";
import "./Header.css";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="Header">
      <div className="container-header">
        <div>
          <a className="link" href="#about">
            Sobre mi
          </a>
          <a className="link" href="#portfolio">
            Proyectos
          </a>
          <a className="link" href="#experience">
            Experiencia
          </a>
          <a className="link" href="#contact">
            Contacto
          </a>
        </div>
        <button className="button-menu" onClick={() => setShowMenu(!showMenu)}>
          <FiAlignJustify />
        </button>
      </div>
      {showMenu && (
        <div className="div-menu">
          <div className="link-container">
            <a className="link-menu" href="#about">
              Sobre mi
            </a>
            <a className="link-menu" href="#portfolio">
              Proyectos
            </a>
            <a className="link-menu" href="#experience">
              Experiencia
            </a>
            <a className="link-menu" href="#contact">
              Contacto
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
