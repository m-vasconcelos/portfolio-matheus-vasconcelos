import React from "react";
import "./Header.css";

import Logo from "../img/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faStar, faFolder, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'

export default () => 
    <header id="header" className="header">
        <img src={Logo} alt="Logo"/>
        <nav>
            <ul>
                <li><a href="#home"><FontAwesomeIcon className="iconMenuLink" icon={faHouse}/>Home</a></li>
                <li><a href="#skills"><FontAwesomeIcon className="iconMenuLink" icon={faStar}/>Skills</a></li>
                <li><a href="#projects"><FontAwesomeIcon className="iconMenuLink" icon={faFolder}/>Projetos</a></li>
                <li><a href="#about-me"><FontAwesomeIcon className="iconMenuLink" icon={faUser}/>Sobre mim</a></li>
                <li><a href="#contact"><FontAwesomeIcon className="iconMenuLink" icon={faPhone}/>Contato</a></li>
            </ul>
        </nav>
        <p className="menuIcon"><FontAwesomeIcon icon={faBars}/></p>
    </header>