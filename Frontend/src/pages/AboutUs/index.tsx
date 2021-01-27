import React from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

import logo from "../../assets/logopreto.png"
import interactians from "../../assets/interactians.jpeg"
import rotarylogo from "../../assets/logorotary.png"
import mail from "../../assets/mail.svg"
import phone from "../../assets/phone.svg"
import calendar from "../../assets/calendar.svg"


import "./styles.css"


const AboutUs:React.FC = () => {
    return(
        <>
            <Navbar/>
                <div className="main-aboutus">
                    <div className="left-aboutus">
                        <div className="form-group-became-interactian-aboutus">
						    <div className="text-became-interactian-aboutus">
							    <h2>TORNE-SE UM INTERACTIANO</h2>
						    </div>

						    <form className="form-became-interactian-aboutus" action="">
							    <input type="text" placeholder="Nome" />
							    <input type="tel" placeholder="Whatsapp" />
						    </form>
					    </div>
                    </div>

                    <div className="center-aboutus">
                        <img src={logo} alt=""/>
                        <div className="text-center-aboutus"> 
                            <p>
                                Somos uma instituição de trabalho voluntário patrocinada pelo Rotary Club São Paulo 
                                Zona Norte que realiza ações para tornar o mundo um lugar melhor
                            </p>    
                        </div>
                        <div className="carrousel-aboutus">
                            <img src={interactians} alt=""/>
                        </div>
                        
                    </div>

                    <div className="right-aboutus">
                        <div className="right-aboutus-contact">
                            <div><p><img src={mail} alt=""/> icparquedajuventude@gmail.com</p></div>
                            <div><p><img src={phone} alt=""/> (11) 99999-9999</p></div> 
                            <div><p><img src={calendar} alt=""/> Reuniões todos os domingos as 15h</p></div> 
                        </div>
                        <img src={rotarylogo} alt=""/>
                    </div>
                </div>
            <Footer/>
        </>
    );
}

export default AboutUs;