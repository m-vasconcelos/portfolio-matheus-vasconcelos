import React from "react";
import "./Skills.css";

import Html5 from "../img/html5.png";
import Css3 from "../img/css3.png";
import JavaScript from "../img/js.png";
import Reactjs from "../img/reactjs.png";
import GitHub from "../img/github.png";

export default () => 
    <section id="skills" className="skills">
        <h1>Skills</h1>
        <div className="skills-list">
            <div className="skills-item">
                <img src={Html5} alt="html5" />
                <div>
                    <h2>HTML5</h2>
                </div>
            </div>
            <div className="skills-item">
                <img src={Css3} alt="CSS3" />
                <div>
                    <h2>CCC3</h2>
                </div>
            </div>
            <div className="skills-item">
                <img src={JavaScript} alt="JavaScript" />
                <div>
                    <h2>JavaScript</h2>
                </div>
            </div>
            <div className="skills-item">
                <img src={Reactjs} alt="React.js" />
                <div>
                    <h2>React.js</h2>
                </div>
            </div>
            <div className="skills-item">
                <img src={GitHub} alt="GitHub" />
                <div>
                    <h2>GitHub</h2>
                </div>
            </div>
        </div>
    </section>
