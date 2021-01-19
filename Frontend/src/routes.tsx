import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home/index'
import Projects from './pages/Projects/index'
import Market from './pages/Market/index'
import Donations from './pages/Donations/index'
import AboutUs from './pages/AboutUs/index'
import AddNews from './pages/AddNews/index'
import LogarAdm from './pages/LogarAdm/index'
import Cadastro from './pages/Cadastro/index'

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route component={Home} path="/" exact />
			<Route component={Projects} path="/projects" exact />
			<Route component={Market} path="/market" exact />
			<Route component={Donations} path="/donations" exact />
			<Route component={AboutUs} path="/about-us" exact />
			<Route component={AddNews} path="/addnews" exact />
			<Route component={LogarAdm} path="/logaradm" exact />
			<Route component={Cadastro} path="/cadastro" exact />
		</BrowserRouter>
	)
}

export default Routes
