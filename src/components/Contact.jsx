import React from "react";
import "./Contact.css";

import Logo from "../img/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faArrowUp19 } from '@fortawesome/free-solid-svg-icons'

export default () =>
    <section id="contact" className="contact">
        <h1>Contato</h1>
        <div className="imgSocial">
            <img src={Logo} alt="Logo"/>
            <div className="social">
                <a href="https://www.linkedin.com/in/m-vasconcelos/" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faLinkedin}/><p>LinkedIn</p></a>
                <a href="https://wa.me/5585986275809" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faWhatsapp}/><p>Whatsapp</p></a>
                <a href="https://github.com/m-vasconcelos" target="_blank"><FontAwesomeIcon className="socialIcons" icon={faGithub}/><p>GitHub</p></a>
            </div>
        </div>
        <a href="#home" className="arrow"><FontAwesomeIcon icon={faArrowUp}/></a>
    </section>