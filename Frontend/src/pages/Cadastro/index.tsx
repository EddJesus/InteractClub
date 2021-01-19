import React from 'react'

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './styles2.css'

const Cadastro: React.FC = () => {
	return (
		<>
			<Navbar />
			<div className="flex-box1 container-box1">
				<form action="" method="Post">
					<div className="content-box1">
						<h1 className="color">Criar Conta</h1>
						<h4 className="color">Começar com conta existente</h4>
						<button className="logue-fc">Logue com Facebook</button>
						<br></br>
						<button className="logue-gg">Logue com Twitter</button>
						<br></br>
						<b>
							<p className="ou">OU</p>
						</b>

						<input
							className="caixas"
							type="text"
							placeholder="Nome completo"
						></input>
						<input className="caixas" type="email" placeholder="Email"></input>
						<input
							className="caixas"
							type="number"
							placeholder="Número de celular"
						></input>
						<input
							className="caixas"
							type="password"
							placeholder="Digite a senha"
						></input>
						<input
							className="caixas"
							type="password"
							placeholder="Repita a senha"
						></input>
					</div>
					<div className="content3">
						<button type="submit" className="btnesse">
							Cadastrar
						</button>
					</div>
				</form>
			</div>

			<Footer />
		</>
	)
}

export default Cadastro
