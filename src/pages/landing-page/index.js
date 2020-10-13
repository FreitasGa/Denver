import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Logo from '../../assets/Logo-Landing.png';
import Seta from '../../assets/Seta para baixo.png';
import imagemKid1 from '../../assets/image2.png';
import imagemKid2 from '../../assets/image3.png';
import LogoCesupa from '../../assets/LOGO CESUPA.png';
import LogoGETA from '../../assets/LOGO GETA.png';
import LogoAprende from '../../assets/LOGO APRENDE.png';
import LogoUFPA from '../../assets/LOGO UFPA.png';

function LandingPage(){
    return(
		<div className="LandingPage">
			<div className='landingPage_PartA'>
				<ul className='landingPage_navbar'>
					<li><a href="#modelo">MODELO DENVER</a></li>
					<li><a href="#eficacia">EFICÁCIA DO MODELO</a></li>
					<li><a href="#sobre">SOBRE O PROJETO</a></li>
					<li><a href="#quem-somos">QUEM SOMOS</a></li>
					<li><Link to='/login'>ENTRAR</Link></li>
					<li><Link to='/register' className='landingPage_navlink'>REGISTRO</Link></li>
				</ul>
				<div className='landingPage_presentation'>
					<img src={Logo} alt='DenverLogo'></img>
					<b> Plataforma para ensinar pais de crianças 
						autistas a realizar terapia ocupacional utilizando 
						o Modelo Denver de Intervenção Precoce </b>
				</div>
				<div className='landingPage_scroller'>
					<a href="#modelo">SAIBA MAIS <img src={Seta}></img> </a>
					
				</div>
			</div>
			<div className='landingPage_PartB' id='modelo'>
				<b className='landingPage_whatDenver'>O QUE É O MODELO DENVER?</b>
				<b className='landingPage_whatDenverRes'> O Modelo Denver de Intervenção Precoce (ESDM) é um modelo naturalista e empiracamente 
														comprovado, aplicado em crianças do Transtorno do Espectro Autista (TEA) de 2 até 4 anos 
														de idade, com o fim de promover o aprendizado das habilidades de comunicação social. O 
														ESDM não está vinculado a uma configuração ou organização específica do ambiente, e pode 
														ser fornecido por equipes de terapia e/ou pais em uma clínica ou na casa da criança. </b>
			</div>
			<div className='landingPage_PartC' id='eficacia'>
				<div className='landingPage_efficiency'>
					<b className='landingPage_efficiencyTittle'>EFICÁCIA DO MODELO</b>
					<b className='landingPage_efficiencyRes'> Segundo um estudo controlado randomizado do ESDM com crianças entre 18 e 30 meses realizado por Dawson, 
															o ESDM demonstrou efeitos significativos no grupo relativos ao QI, linguagem e comportamento adaptativo das crianças.
															As crianças receberam intervenção em suas casas de 15 a 20 horas por semana durante dois anos, por terapeutas treinados.</b>
				</div>
				<img src={imagemKid1}></img>
			</div>
			<div className='landingPage_PartD' id='sobre'>
				<img src={imagemKid2}></img>
				<div className='landingPage_about'>
					<b className='landingPage_aboutTittle'>SOBRE O PROJETO</b>
					<b className='landingPage_aboutRes'> O projeto tem como alvo pais ou responsáveis de crianças do 
														Transtorno do Espectro Autista (TEA) que possuem difícil acesso à terapia no 
														Modelo Denver de Intervenção Precoce, por morarem em países poucos desenvolvidos, 
														ensinando-os como realizar terapia em seus próprios filhos a partir de um ambiente 
														gamificado e intuitivo, que possui vídeos, jogos e um sistema progressão a cada aula.</b>
				</div>
			</div>
			<div className='landingPage_PartE' id='quem-somos'>
				<div className='landingPage_whoWe'>
					<b className='landingPage_whoWeTittle'>QUEM SOMOS</b>
					<b className='landingPage_whoWeRes'>O projeto é baseado na Tese de Doutorado da Psicóloga Cláudia Nogueira, e foi desenvolvido computacionalmente pelo 
														Grupo de Estudos em Tecnologia Assistiva (GETA) do Centro Universitário do Estado do Pará (CESUPA) em parceria com o 
														APRENDE (Atendimento e Pesquisa sobre Aprendizagem e Desenvolvimento), que é uma iniciativa da Universidade Federal 
														do Pará.</b>
				</div>
				<div className='landingPage_whoWeImagesOverlay'>
					<div className='landingPage_whoWeImagesPartA'>
						<img src={LogoGETA}></img>
						<img src={LogoCesupa} className='landingPage_whoWeImage2'></img>
					</div>
					<div className='landingPage_whoWeImagesPartB'>
						<img src={LogoAprende}></img>
						<img src={LogoUFPA} className='landingPage_whoWeImage4'></img>
					</div>
				</div>

			</div>
		</div>    
    );
}

export default LandingPage;