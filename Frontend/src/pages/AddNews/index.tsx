import React from 'react'

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './styles.css'

const AddNews: React.FC = () => {
	return (
		<>
			<Navbar />

			<div className="flex-box container-box">
				<form action="" method="Post">
					<div className="content-box">
						<h2>Adicionar Notícia</h2>

						<input
							className="titulo"
							type="text"
							placeholder="Titulo da Matéria"
						></input>
						<div className="content2">
							<button className="btnEdit">Adicionar Imagem</button>
							<button className="btnEdit2">Adicionar Campo de texto</button>
						</div>
					</div>
					<div className="content">
						<button className="btnEnviar" type="submit">
							Criar Notícia
						</button>
					</div>
				</form>
			</div>

			<Footer />
		</>
	)
}

export default AddNews
