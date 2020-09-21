import React from 'react';
import Header from '../../components/header';
import './styles.css';

import image from '../../assets/image.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'

function MainPage(){
    return(
        <div className='MainPage'>
            <Header />
            <div className='body'>
                <div className='greetings'>
                    <b className='greet'>Bem vindo, Usuário.</b>
                    <b className='mainText'>Seja o próprio terapeuta do seu filho!</b>
                    <b className='subText'>Aprenda como realizar terapia ocupacional utilizando o Modelo Denver para o desenvolvimento cognitivo da criança autista.</b>
                </div>
                <div className='images'>
                    <img className='image' src={image}></img>
                </div>
            </div>
            <div className='videoBack'>
                <button><img src={leftArrow}></img></button>
                <ul>
                    <li><div><button>play</button><b>Aula 01</b><span>Descrição da Aula</span></div></li>
                    <li><div><button>play</button><b>Aula 01</b><span>Descrição da Aula</span></div></li>
                    <li><div><button>play</button><b>Aula 01</b><span>Descrição da Aula</span></div></li>
                    <li><div><button>play</button><b>Aula 01</b><span>Descrição da Aula</span></div></li>
                    <li><div><button>play</button><b>Aula 01</b><span>Descrição da Aula</span></div></li>
                </ul>
                <button><img src={rightArrow}></img></button>
            </div>

        </div>
    )
}

export default MainPage;