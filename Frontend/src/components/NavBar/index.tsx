import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo  from "../../assets/logo.png";

import "./styles.css";

const Navbar:React.FC = (props) => {

    const [pageHome, setPageHome] = useState({});
    const [pageProjects, setPageProjects] = useState({});
    const [pageMarket, setPageMarket] = useState({});
    const [pageDonations, setPageDonations] = useState({});
    const [pageAboutUs, setPageAboutUs] = useState({});

    function activatePage(n:number){
        switch(n){
        case 1:
            setPageHome({
                fontWeight: 700,
                borderRadius: 10,
                background: "#6eabf0",
                transitionDelay: "10ms",
            });
                break;
        case 2:
            setPageProjects({
                fontWeight: 700,
                borderRadius: 10,
                background: "#6eabf0",
                transitionDelay: "10ms",
            });
                break;
        case 3:
            setPageMarket({
                fontWeight: 700,
                borderRadius: 10,
                background: "#6eabf0",
                transitionDelay: "10ms",
            });
                break;
        case 4:
            setPageDonations({
                fontWeight: 700,
                borderRadius: 10,
                background: "#6eabf0",
                transitionDelay: "10ms",
            });
                break;
        case 5:
            setPageAboutUs({
                fontWeight: 700,
                borderRadius: 10,
                background: "#6eabf0",
                transitionDelay: "10ms",
            });
                break;
        default:

        }
    }

    return(
            <div className="container-navbar">

                <img className="img" src={logo} alt="/"/>

                <div className="links-navbar">
                    <ul>
                        <li><Link onClick={() => activatePage(1)} style={pageHome} to="/" >Home</Link></li>
                        <li><Link onClick={() => activatePage(2)} style={pageProjects} to="/projects"  >Projetos</Link></li>
                        <li><Link onClick={() => activatePage(3)} style={pageMarket} to="/market" >Loja</Link></li>
                        <li><Link onClick={() => activatePage(4)} style={pageDonations} to="/donations" >Doações</Link></li>
                        <li><Link onClick={() => activatePage(5)} style={pageAboutUs} to="/about-us" >Sobre nós</Link></li>
                    </ul>
                </div>

                <div className="access-navbar">
                    <p>É um interactiano? Acesse</p>
                    <div className="inputs-navbar">
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                        <button>OK</button>
                    </div>
                    <p className="text-dont">Não possui cadastro?<a href="">Registre-se aqui</a></p>
                </div>


            </div>

    );   
}

export default Navbar;