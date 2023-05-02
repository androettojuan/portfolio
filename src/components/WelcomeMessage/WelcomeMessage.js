import React from "react";
import "./WelcomeMessage.css";

const WelcomeMessage = () => {
    return (
        <div className="container-message">
            <span className="welcome">Bienvenido</span>
            <span className="my-name">Soy Juan Manuel Androetto</span>
            <span className="dev">Full Stack Developer</span>
        </div>
    );
}

export default WelcomeMessage;