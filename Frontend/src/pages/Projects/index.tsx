import React from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { Link } from 'react-router-dom'
import NavLink from '../../components/NavBar/NavLink/index';

import "./styles.css";

const Projects:React.FC = () => {

    return(
        <>
            <Navbar/>
                <Link to="/create-project">oi</Link >
            <Footer/>
        </>
    );
}

export default Projects;