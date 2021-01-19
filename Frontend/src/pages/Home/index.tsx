import React from 'react'

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import QRCode from 'qrcode.react'

import img from '../../assets/nature.jpg'
import whatsapp from '../../assets/whatsapp.png'
import onk from '../../assets/arvoredenatalEDITADA.png'
import agasalho from '../../assets/agasalhoEDITADA.png'
import imigrantes from '../../assets/imigrantesEDITADA.png'

import './styles.css'

const Home: React.FC = () => {
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
						<div>
							<img src={onk} alt="" />
						</div>
						<div>
							<img src={agasalho} alt="" />
						</div>
						<div>
							<img src={imigrantes} alt="" />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Home
