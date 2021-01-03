import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./pages/Global/NavBar";
import Footer from "./pages/Global/Footer";

import Home from "./pages/Home/index";
import Store from "./pages/Store/index";

const Routes:React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Route component={Home} path="/" exact/>
            <Route component={Store} path="/store" exact/>
            <Footer/>
        </BrowserRouter>

    );
}

export default Routes;