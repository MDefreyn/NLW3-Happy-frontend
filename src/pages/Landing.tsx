import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';

export default function Landing() {
	return (
		<div id="page-landing">
			<div className="content-wrapped">
				<img src={logoImg} alt="Happy" />
				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças.</p>
				</main>
				<div className="location">
					<strong>Cascavel</strong>
					<span>Paraná</span>
				</div>
				<Link to="/app" className="enter-app">
					<FaArrowRight size={26} color="rgba(0,0,0,0.6)" />
				</Link>
			</div>
		</div>
	);
}