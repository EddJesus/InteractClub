import React from "react";

import { Teste } from "./styled";

import "./styles.css";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";


const Home:React.FC = () => {
    return(
        <>
            <Navbar/>

            <Footer/>
        </>
    );
}

export default Home;