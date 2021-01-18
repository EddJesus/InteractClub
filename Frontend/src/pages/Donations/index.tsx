import React from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import QRCode from "qrcode.react";

import whatsapp from "../../assets/whatsapp.png"

import logopreto from "../../assets/logopreto.png";

import "./styles.css";


const Donations:React.FC = () => {
    return(
        <>
            <Navbar/>
                <div className="main-cointainer-donations">
                    <div className="aside-container">
                    <div className="QRCode">
                            <QRCode value="http://facebook.github.io/react/" />
                            <h4>Faça uma doação</h4>
                        </div>

                        <div className="Whatsapp">
                            <img src={whatsapp} alt=""/>
                            <h4>Entre em contato conosco</h4>
                        </div>

                    </div>
                    <div className="container-donations">
                        <img src={logopreto} alt=""/>
                        <h1>Nos ajude a tornar o mundo um lugar melhor</h1>
                        <form action="">
                            <div>
                                <h2>Faça uma doação</h2>
                                <input type="text" placeholder="Nome" name="" id=""/>
                                <input type="number" placeholder="Valor em R$" name="" id=""/>
                                <input type="text" placeholder="Selecionar método de pagamento" name="" id=""/>
                            </div>
                            <button type="submit">Enviar doação</button>
                        </form>
                    </div>
                    <div className="certification-container"></div>
                </div>
            <Footer/>
        </>
    );
}

export default Donations;