import React, { useState, useEffect } from 'react'

import api from "../../services/Api";
import ProjectInterface from "../../interfaces/projectsInterface";

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import QRCode from 'qrcode.react'

import img from '../../assets/nature.jpg'
import whatsapp from '../../assets/whatsapp.png'

import './styles.css'

const Home: React.FC = () => {

	const [projects, setProjects] = useState<ProjectInterface[]>([]);

	useEffect(()=>{
		api.get("/projects")
		.then(res => {
			setProjects(res.data);
		})
	}, []);

	projects.map(project => {
		return project.img.replace(/".jpeg+"/, "");
	})
	
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="container-left">
					<div className="form-group-became-interactian">
						<div className="text-became-interactian">
							<h2>TORNE-SE UM INTERACTIANO</h2>
						</div>

						<form className="form-became-interactian" action="">
							<input type="text" placeholder="Nome" />
							<input type="tel" placeholder="Whatsapp" />
							<button type="submit">Enviar</button>
						</form>

					</div>

					<div className="QRCode">
						<QRCode value="http://facebook.github.io/react/" />
						<h4>Faça uma doação</h4>
					</div>

					<div className="Whatsapp">
						<img src={whatsapp} alt="" />
						<h4>Entre em contato conosco</h4>
					</div>
				</div>
				<div className="container-right">
					<div className="carousel-news">
						<img src={img} alt="" />
					</div>
					<div className="text-know-our-projects">
						<h1>Conheça nossos projetos</h1>
					</div>

					<div className="grid-projects">
						{projects.map(project => (
								<div>
									<img src={project?.url} alt="" />
								</div>
							))
						}
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Home
