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
          description="Una aplicación para la reserva de canchas de manera eficiente."
          onClick={() => window.open("https://www.jugaya.ar")}
        ></CardProject>
        <CardProject
          img="\Logos\landing-page.png"
          title="Landing Page para JugaYa"
          description="Página de inicio diseñada para unirse a la comunidad de Jugaya."
          onClick={() => window.open("https://clubes.jugaya.ar/")}
        ></CardProject>
        <CardProject
          img="\Logos\qr-jugaya.png"
          title="Pagina de descarga de la app jugaya"
          description="Escaneando el qr te lleva a la pagina de descarga de la app jugaya."
          onClick={() => window.open("https://qr.jugaya.ar/")}
        ></CardProject>
        <CardProject
          img="\Logos\Pagina-cabalgatas.png"
          title="Pagina Web para Cabalgatas y dias de campo"
          description="Plataforma para la venta y reserva de experiencias de cabalgatas."
          onClick={() =>
            window.open("https://github.com/androettojuan/web-cabalgatas2")
          }
        ></CardProject>
        <CardProject
          img="\Logos\qr-cabalgatas.png"
          title="Pagina intermediaria para redes sociales"
          description="Página intermediaria para redes sociales."
          onClick={() =>
            window.open("https://github.com/androettojuan/mini-web-cabalgatas")
          }
        ></CardProject>
        <CardProject
          img="\Logos\calculadora.png"
          title="Calculadora"
          description="Calculadora desarrollada con React para una experiencia intuitiva."
          onClick={() =>
            window.open("https://github.com/androettojuan/calculadora")
          }
        ></CardProject>
        <CardProject
          img="\Logos\buscador de imagenes.png"
          title="Buscardor de imagenes"
          description="Aplicación de búsqueda de imágenes desarrollada en React. "
          onClick={() =>
            window.open("https://github.com/androettojuan/buscador-imagenes")
          }
        ></CardProject>
        <CardProject
          img="\Logos\Juego de la vida.png"
          title="Juego de la vida"
          description="Aplicación del Juego de la Vida desarrollada en React."
          onClick={() =>
            window.open("https://github.com/androettojuan/juego-de-la-vida")
          }
        ></CardProject>
        <CardProject
          img="\Logos\calculadora en react-native.png"
          title="Calculadora"
          description="Calculadora funcional en React Native para dispositivos móviles."
          onClick={() =>
            window.open(
              "https://github.com/androettojuan/calculadora-react-native"
            )
          }
        ></CardProject>
        <CardProject
          img="\Logos\buscador de cartas.png"
          title="Buscador de cartas"
          description="Buscador de cartas yu-gi-oh - React app"
          onClick={() => window.open("https://github.com/androettojuan/yugioh")}
        ></CardProject>
        <CardProject
          img="\Logos\Pokemon.png"
          title="Juego Pokemon"
          description="Juego de pokemon en javascript"
          onClick={() =>
            window.open("https://github.com/androettojuan/juego_pokemon")
          }
        ></CardProject>
      </div>
    </div>
  );
};

export default MyProjects;
