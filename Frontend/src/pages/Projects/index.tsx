import React from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

import img from "../../assets/caridade.jpg"

import "./styles.css";

const Projects:React.FC = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="container-top">
                        <div className="form-group-became-interactian">
                            <div className="text-became-interactian">
                                <h2>TORNE-SE UM INTERACTIANO</h2>
                            </div>
    
                            <form className="form-became-interactian" action="">
                                <input type="text" placeholder="Nome"/>
                                <input type="tel" placeholder="Whatsapp"/>
                            </form>
                        </div>
                        <div className="carousel-projects">
                            <div>ola</div>
                        </div>
                    </div>
                    <div className="bottom-container">
                </div> 
            </div>

            <Footer/>
        </>
    );
}

export default Projects;