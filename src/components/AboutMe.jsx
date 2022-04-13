import React from "react";
import "./AboutMe.css";

import imgFace from "../img/face.png";

export default () =>
    <section id="about-me" className="about-me">
        <h1>Sobre mim</h1>
        <div className="photoPresentation">
            <img src={imgFace} alt="Matheus Vasconcelos" />
            <div className="presentation">
                <h2>Olá, me chamo Matheus Vasconcelos!</h2>
                <p>Tenho 20 anos e sou Desenvolvedor Web Front End. Tenho curso técnico em Redes de Computadores, sou formado em Análise e Desenvolvimento de Sistemas e pós-graduando em Desenvolvimento de Aplicações Web.</p>
            </div>
        </div>
    </section>