import React from "react";
import CardProject from "../CardProject/CardProject";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <div className="projects">
      <span className="projects-title">Mis proyectos</span>
      <div className="projects__container">
        <CardProject
          img="\Logos\jugaya.png"
          title="jugaya.ar"
          description="App para reservas de canchas"
          onClick={() => window.open("https://www.jugaya.ar")}
        ></CardProject>
        <CardProject
          img="\Logos\landing-page.png"
          title="Laning Page"
          description="Landing page para unirse a jugaya"
          onClick={() => window.open("https://clubes.jugaya.ar/")}
        ></CardProject>
        <CardProject
          img="\Logos\qr-jugaya.png"
          title="Qr Jugaya"
          description="Qr para descargar la app jugaya"
          onClick={() => window.open("https://qr.jugaya.ar/")}
        ></CardProject>
        <CardProject
          img="\Logos\Pagina-cabalgatas.png"
          title="Pagina Cabalgatas"
          description="Pagina para venta de cabalgatas"
          onClick={() => window.open("https://github.com/androettojuan/web-cabalgatas")}
        ></CardProject>
        <CardProject
          img="\Logos\carro de compras.png"
          title="Carro de compras"
          description="Ejecicio de carro de compras"
          onClick={() => window.open("https://github.com/androettojuan/carro-de-compras")}
        ></CardProject>
        <CardProject
          img="\Logos\calculadora.png"
          title="Calculadora"
          description="Calculadora - React app"
          onClick={() => window.open("https://github.com/androettojuan/calculadora")}
        ></CardProject>
        <CardProject
          img="\Logos\buscador de imagenes.png"
          title="Buscardor de imagenes"
          description="Buscador de imagenes - React app "
          onClick={() => window.open("https://github.com/androettojuan/buscador-imagenes")}
        ></CardProject>
        <CardProject
          img="\Logos\Juego de la vida.png"
          title="Juego de la vida"
          description="Juego de la vida - React app"
          onClick={() => window.open("https://github.com/androettojuan/juego-de-la-vida")}
        ></CardProject>
        <CardProject
          img="\Logos\calculadora en react-native.png"
          title="Calculadora"
          description="Calculadora - React native app"
          onClick={() => window.open("https://github.com/androettojuan/calculadora-react-native")}
        ></CardProject>
        <CardProject
          img="\Logos\buscador de cartas.png"
          title="Buscador de cartas"
          description="Buscador de cartas - React app"
          onClick={() => window.open("https://github.com/androettojuan/yugioh")}
        ></CardProject>
        <CardProject
          img="\Logos\Pokemon.png"
          title="Juego Pokemon"
          description="Juego de pokemon en javascript"
          onClick={() => window.open("https://github.com/androettojuan/juego_pokemon")}
        ></CardProject>
      </div>
    </div>
  );
};

export default MyProjects;
