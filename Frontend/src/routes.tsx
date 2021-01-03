import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Global components
import NavBar from "./pages/Global/NavBar";
import Footer from "./pages/Global/Footer";

//Pages
import Home from "./pages/Home/index";
import Market from "./pages/Market/index";

const Routes:React.FC = () => {
    return (
            <BrowserRouter>
                    <NavBar/>
                    <Route component={Home} path="/" exact/>
                    <Route component={Market} path="/market" exact/>
                    <Footer/>
            </BrowserRouter>
    );
}

export default Routes;