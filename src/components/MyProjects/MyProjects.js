import React from "react";
import CardProject from "../CardProject/CardProject";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <div className="projects">
      <h2>Mis proyectos</h2>
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
          img="\Logos\pagina cabalgatas.png"
          title="Pagina Cabalgatas"
          description="Pagina para venta de cabalgatas"
          onClick={() => window.open("https://cabalgatas.surge.sh/")}
        ></CardProject>
        <CardProject
          img="\Logos\carro de compras.png"
          title="Carro de compras"
          description="Ejecicio de carro de compras"
          onClick={() => window.open("https://carro-compras.surge.sh/")}
        ></CardProject>
        <CardProject
          img="\Logos\calculadora.png"
          title="Calculadora"
          description="Calculadora - React app"
          onClick={() => window.open("https://calculadora-test-react.surge.sh/")}
        ></CardProject>
        <CardProject
          img="\Logos\buscador de imagenes.png"
          title="Buscardor de imagenes"
          description="Buscador de imagenes - React app "
          onClick={() => window.open("https://buscador-de-imagenes.surge.sh/")}
        ></CardProject>
        <CardProject
          img="\Logos\juego de la vida.png"
          title="Juego de la vida"
          description="Juego de la vida - React app"
          onClick={() => window.open("https://juego-de-la-vida.surge.sh/")}
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
          onClick={() => window.open("https://buscar-carta-yu-gi-oh.surge.sh/")}
        ></CardProject>
        <CardProject
          img="\Logos\pokemon.png"
          title="Juego Pokemon"
          description="Juego de pokemon en javascript"
          onClick={() => window.open("https://github.com/androettojuan/juego_pokemon")}
        ></CardProject>
      </div>
    </div>
  );
};

export default MyProjects;
