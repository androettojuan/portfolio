import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <WelcomeMessage />
    </div>
  );
};

export default Home;
