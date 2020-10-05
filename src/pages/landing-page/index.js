import React from 'react';
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
			<div className="LandingPagePart1">
				<div className="navbarMenu">
					<li><button>MODELO DENVER</button></li>
					<li><button>EFICÁCIA DO MODELO</button></li>
					<li><button>SOBRE O PROJETO</button></li>
					<li><button>QUEM SOMOS</button></li>
					<li><button>ENTRAR</button></li>
					<li><div className="Registrar"><button>REGISTRO</button></div></li>
				</div>
				
				<img src={Logo} className='header'></img>
				
				<div className='texto'>
					Plataforma para ensinar pais de crianças
					autistas a realizar terapia ocupacional utilizando
					o Modelo Denver de Intervenção Precoce
				</div>
			
				<div className='botao' ><button href="#eficacia">SAIBA MAIS <div><img src={Seta}></img></div></button></div>
				
			</div>
			
			<div id="eficacia" className="eficacia">
				<div className="paddinga">
					EFICACIA DO MODELO
					<div className="texto1">
						Segundo um estudo controlado randomizado do ESDM com crianças entre 18 e 30 meses realizado por Dawson, 
						o ESDM demonstrou efeitos significativos no grupo relativos ao QI, linguagem e comportamento adaptativo das crianças. 
						As crianças receberam intervenção em suas casas de 15 a 20 horas por semana durante dois anos, por terapeutas 
						treinados.
					</div>
				</div>
				<img src={imagemKid1}></img>
			</div>
			
					
			<div className="eficacia">
				<img src={imagemKid2}></img>
				<div className="paddingb">
					SOBRE O PROJETO
					<div className="texto1">
						O projeto tem como alvo pais ou responsáveis de crianças do Transtorno do Espectro Autista (TEA) que possuem 
						difícil acesso à terapia no Modelo Denver de Intervenção Precoce, por morarem em países poucos desenvolvidos, 
						ensinando-os como realizar terapia em seus próprios filhos a partir de um ambiente gamificado e intuitivo, que
						possui vídeos, jogos e um sistema progressão a cada aula.
					</div>
				</div>
			</div>

			<div className="LandingPagePart2">
				<div className="rodapeHeader">
					QUEM SOMOS
				</div>
				<div className="rodapeTexto">
					<div>O projeto é baseado na Tese de Doutorado da Psicóloga Cláudia Nogueira, e foi desenvolvido computacionalmente pelo</div>
					<div>Grupo de Estudos em Tecnologia Assistiva (GETA) do Centro Universitário do Estado do Pará (CESUPA) em parceria com o</div>
					<div>APRENDE (Atendimento e Pesquisa sobre Aprendizagem e Desenvolvimento), que é uma iniciativa da Universidade Federal</div>
					<div>do Pará.</div>
				</div>
			
				
				
				<div className="rodapeBloco">
					<div className="displayFlex">
					
						<a href="https://www.cesupa.br/"><button><img src={LogoCesupa}></img></button></a>
						<a href="https://getacesupa.github.io/sitegeta/"><button><img src={LogoGETA}></img></button></a>
					
					</div>
					<div>
						<a href="http://www.aprende.ufpa.br/"><button><img src={LogoAprende}></img></button></a>
					</div>
					<div>
						<a href="https://portal.ufpa.br/"> <button><img src={LogoUFPA}></img></button></a>
					</div>
				</div>
				
			
			</div>		
		</div>    
    );
}

export default LandingPage;