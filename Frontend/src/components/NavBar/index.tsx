import React, {useState} from "react";
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";

import logo  from "../../assets/logo.png";

import "./styles.css";

const NavBar:React.FC = (props) => {

    const [tab, setTab] = useState("");

    let activatedPage ={
        activatedHome: {
            fontWeight: 400,
            borderRadius: 0,
            background: "none",
            transitionDelay: "0ms"
        },
    
        activatedProjects: {
            fontWeight: 400,
            borderRadius: 0,
            background: "none",
            transitionDelay: "0ms"
        },
    
        activatedMarket: {
            fontWeight: 400,
            borderRadius: 0,
            background: "none",
            transitionDelay: "0ms"
        },
    
        activatedDonations: {
            fontWeight: 400,
            borderRadius: 0,
            background: "none",
            transitionDelay: "0ms"
        },
    
        activatedAboutUS: {
            fontWeight: 400,
            borderRadius: 0,
            background: "none",
            transitionDelay: "0ms"
        }
    }


    function setActiveTab(n:number){
        setTab("link"+n)
    }

    switch(tab){
        case "link1":
            activatedPage.activatedHome.fontWeight = 700;
            activatedPage.activatedHome.borderRadius = 10;
            activatedPage.activatedHome.background = "#6eabf0";
            activatedPage.activatedHome.transitionDelay = "10ms";
                break;
        case "link2":
            activatedPage.activatedProjects.fontWeight = 700;
            activatedPage.activatedProjects.borderRadius = 10;
            activatedPage.activatedProjects.background = "#6eabf0";
            activatedPage.activatedProjects.transitionDelay = "10ms";
                break;
        case "link3":
            activatedPage.activatedMarket.fontWeight = 700;
            activatedPage.activatedMarket.borderRadius = 10;
            activatedPage.activatedMarket.background = "#6eabf0";
            activatedPage.activatedMarket.transitionDelay = "10ms";
               break;
        case "link4":
            activatedPage.activatedDonations.fontWeight = 700;
            activatedPage.activatedDonations.borderRadius = 10;
            activatedPage.activatedDonations.background = "#6eabf0";
            activatedPage.activatedDonations.transitionDelay = "10ms";
                break;
        case "link5":
            activatedPage.activatedAboutUS.fontWeight = 700;
            activatedPage.activatedAboutUS.borderRadius = 10;
            activatedPage.activatedAboutUS.background = "#6eabf0";
            activatedPage.activatedAboutUS.transitionDelay = "10ms";
                break;
        default:
                break;
    }

    return(
            <div className="container-navbar">

                <img className="img" src={logo} alt="/"/>

                <div className="links-navbar">
                    <ul>
                        <li><Link className="link1" onClick={() => {setActiveTab(1)}} to="/" style={{fontWeight: activatedPage.activatedHome.fontWeight, borderRadius: activatedPage.activatedHome.borderRadius, background: activatedPage.activatedHome.background, transitionDelay: activatedPage.activatedHome.transitionDelay}} >Home</Link></li>
                        <li><Link className="link2" onClick={() => {setActiveTab(2)}} to="/projects" style={{fontWeight: activatedPage.activatedProjects.fontWeight, borderRadius: activatedPage.activatedProjects.borderRadius, background: activatedPage.activatedProjects.background, transitionDelay: activatedPage.activatedProjects.transitionDelay}} >Projetos</Link></li>
                        <li><Link className="link3" onClick={() => {setActiveTab(3)}} to="/market" style={{fontWeight: activatedPage.activatedMarket.fontWeight, borderRadius: activatedPage.activatedMarket.borderRadius, background: activatedPage.activatedMarket.background, transitionDelay: activatedPage.activatedMarket.transitionDelay}} >Loja</Link></li>
                        <li><Link className="link4" onClick={() => {setActiveTab(4)}} to="/donations" style={{fontWeight: activatedPage.activatedDonations.fontWeight, borderRadius: activatedPage.activatedDonations.borderRadius, background: activatedPage.activatedDonations.background, transitionDelay: activatedPage.activatedDonations.transitionDelay}} >Doações</Link></li>
                        <li><Link className="link5" onClick={() => {setActiveTab(5)}} to="/about-us" style={{fontWeight: activatedPage.activatedAboutUS.fontWeight, borderRadius: activatedPage.activatedAboutUS.borderRadius, background: activatedPage.activatedAboutUS.background, transitionDelay: activatedPage.activatedAboutUS.transitionDelay}} >Sobre nós</Link></li>
                    </ul>
                </div>

                <div className="access-navbar">
                    <p>É um interactiano? Acesse</p>
                    <div className="inputs-navbar">
                        <input type="email" placeholder="E-mail"/>
                        <input type="password" placeholder="Senha"/>
                        <button>OK</button>
                    </div>
                    <p>Não possui cadastro?<a href=""> Registre-se aqui</a></p>
                </div>


            </div>

    );   
}

const mapState = (state:any) => ({
    navigation: state.navigation
});

const connector = connect(mapState);

export default connector(NavBar);