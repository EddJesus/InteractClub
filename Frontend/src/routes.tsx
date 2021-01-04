import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Global components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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