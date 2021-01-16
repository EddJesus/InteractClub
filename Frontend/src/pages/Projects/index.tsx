import React from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import QRCode from "qrcode.react";

import img from "../../assets/caridade.jpg"
import whatsapp from "../../assets/whatsapp.png"

import "./styles.css";

const Projects:React.FC = () => {

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="container-left">
                        <div className="form-group-became-interactian">
                            <div className="text-became-interactian">
                                <h2>TORNE-SE UM INTERACTIANO</h2>
                            </div>
    
                            <form className="form-became-interactian" action="">
                                <input type="text" placeholder="Nome"/>
                                <input type="tel" placeholder="Whatsapp"/>
                            </form>
                        </div>

                        <div className="QRCode">
                            <QRCode value="http://facebook.github.io/react/" />
                            <h4>Faça uma doação</h4>
                        </div>

                        <div className="Whatsapp">
                            <img src={whatsapp} alt=""/>
                            <h4>Entre em contato conosco</h4>
                        </div>


                </div>
                <div className="container-right">
                    <div className="text-know-our-projects"></div>
                    <div className="carousel-projects">
                            <img src={img} alt=""/> 
                    </div>
                </div> 
            </div>

            <Footer/>
        </>
    );
}

export default Projects;