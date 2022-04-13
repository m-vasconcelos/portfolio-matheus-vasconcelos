import React from "react";
import "./Projects.css";

import MocaBonita from "../img/moca-bonita.png"
import PsiAnaBeatriz from "../img/psi-ana-beatriz.png"
import Codando from "../img/codando.png"

export default () => 
    <section id="projects" className="projects">
        <h1>Projetos</h1>
        <div className="projects-list">
            <div className="projects-item">
                <img src={MocaBonita} alt="Studio Moça Bonita" />
                <h2>Studio Moça Bonita</h2>
                <div className="buttons">
                    <button><a href="https://studio-moca-bonita.vercel.app/" target="_blank">Abrir site</a></button>
                    <button><a href="https://github.com/m-vasconcelos/studio-moca-bonita" target="_blank">Repositório</a></button>
                </div>
            </div>
            <div className="projects-item">
                <img src={PsiAnaBeatriz} alt="Psicóloga Ana Beatriz" />
                <h2>Psicóloga Ana Beatriz</h2>
                <div className="buttons">
                    <button><a href="https://clinica-psicologica.vercel.app/" target="_blank">Abrir site</a></button>
                    <button><a href="https://github.com/m-vasconcelos/clinica-psicologica" target="_blank">Repositório</a></button>
                </div>
            </div>
            <div className="projects-item">
                <img src={Codando} alt="Codando - Cursos Web" />
                <h2>Codando - Cursos Web</h2>
                <div className="buttons">
                    <button><a href="https://codando-cursos-web.vercel.app/" target="_blank">Abrir site</a></button>
                    <button><a href="https://github.com/m-vasconcelos/codando-cursos-web" target="_blank">Repositório</a></button>
                </div>
            </div>
        </div>
    </section>