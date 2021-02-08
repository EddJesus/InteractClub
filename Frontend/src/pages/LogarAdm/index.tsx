import React from 'react'

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './styles.css'

const LogarAdm: React.FC = () => {
	return (
		<>
			<Navbar />

			<div className="flex-box container-box">
				<form action="" method="Post">
					<div className="content-box">
						<h2>Logue como administrador Interactiano</h2>

						<input className="titulo" type="text" placeholder="Nome"></input>
						<input className="titulo" type="email" placeholder="Email"></input>
						<input className="titulo" type="password" placeholder="Senha"></input>
						
						<select id="" className="titulo titulo2">
							<option value="" disabled selected hidden>
								Selecione seu Cargo
							</option>
							<option value="president" className="a2">
								Presidente
							</option>
							<option value="intern_services_director" className="a2">
								Diretor de serviços internos
							</option>
							<option value="projects_director" className="a2">
								Diretor de projetos
							</option>
							<option value="public_image_director" className="a2">
								Diretor de imagem publica
							</option>
							<option value="site_administrator" className="a2">
								Administrador do site
							</option>
							<option value="rotariano" className="a2">
								Rotariano patrocinador
							</option>
						</select>
					</div>
					<div className="content">
						<button className="btnEnviar" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>

			<Footer />
		</>
	)
}

export default LogarAdm
