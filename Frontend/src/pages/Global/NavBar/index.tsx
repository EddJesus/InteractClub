import React from "react";
import { Link } from "react-router-dom"
import logo  from "../../../assets/logo.png"

import "./styles.css";

const NavBar:React.FC = () => {
    return(
            <div className="container-navbar">

                <img className="img" src={logo} alt="/"/>

                <div className="links-navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Projetos</Link></li>
                        <li><Link to="/store">Loja</Link></li>
                        <li><Link to="/">Doações</Link></li>
                        <li><Link to="/">Sobre nós</Link></li>
                    </ul>
                </div>

                <div className="access-navbar">
                    <p>É um interactiano? Acesse</p>
                    <div className="inputs-navbar">
                        <input type="email"/>
                        <input type="password"/>
                        <button>OK</button>
                    </div>
                    <p>Não possui cadastro?<a href=""> Registre-se aqui</a></p>
                </div>


            </div>

    );   
}

export default NavBar;