import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/index";
import Projects from "./pages/Projects/index";
import Market from "./pages/Market/index";
import Donations from "./pages/Donations/index";
import AboutUs from "./pages/AboutUs/index";

const Routes:React.FC = () => {
    return (
            <BrowserRouter>
                    <Route component={Home} path="/" exact/>
                    <Route component={Projects} path="/projects" exact/>
                    <Route component={Market} path="/market" exact/>
                    <Route component={Donations} path="/donations" exact/>
                    <Route component={AboutUs} path="/about-us" exact/>
            </BrowserRouter>
    );
}

export default Routes;