import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="fondo">
        <img src="\fondo.avif" alt="fondo" className="fondo" />
      </div>
      <Header />
      <WelcomeMessage />
    </div>
  );
};

export default Home;
