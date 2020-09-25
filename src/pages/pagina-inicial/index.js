import React from 'react';
import Header from '../../components/header';
import './styles.css';

import image from '../../assets/image.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import playButton from '../../assets/playButton.png'

function MainPage(){
    
    function scrollLeft (e) {
        if (e.button === 0) {
            document.getElementById('videoContainer').scrollLeft -= 20;
        }
    }

    function scrollRight (e) {
        if (e.button === 0) {
            document.getElementById('videoContainer').scrollLeft += 20;
        }
    }

    return(
        <div className='MainPage'>
            <Header />
            <div className='MainPageBody'>
                <div className='greetings'>
                    <b className='greet'>Bem vindo, Usuário.</b>
                    <b className='mainText'>Seja o próprio terapeuta do seu filho!</b>
                    <b className='subText'>Aprenda como realizar terapia ocupacional utilizando o Modelo Denver para o desenvolvimento cognitivo da criança autista.</b>
                </div>
                <div className='images'>
                    <img className='image' alt='kids' src={image}></img>
                </div>
            </div>
            <div className='videoBack'>
                <button id='slideLeft' className='slideLeft' onClick={scrollLeft}><img alt='previous' src={leftArrow}></img></button>
                <ul id='videoContainer'>
                    <li><div><button><img alt="PlayButton" src={playButton}></img></button><b className='videoTitle'>Aula 01</b><div><b className='videoDescription'>Descrição da Aula</b><b className='videoPercentage'>60%</b></div></div></li>
                    <li><div><button><img alt="PlayButton" src={playButton}></img></button><b className='videoTitle'>Aula 01</b><div><b className='videoDescription'>Descrição da Aula</b><b className='videoPercentage'>60%</b></div></div></li>
                    <li><div><button><img alt="PlayButton" src={playButton}></img></button><b className='videoTitle'>Aula 01</b><div><b className='videoDescription'>Descrição da Aula</b><b className='videoPercentage'>60%</b></div></div></li>
                    <li><div><button><img alt="PlayButton" src={playButton}></img></button><b className='videoTitle'>Aula 01</b><div><b className='videoDescription'>Descrição da Aula</b><b className='videoPercentage'>60%</b></div></div></li>
                    <li><div><button><img alt="PlayButton" src={playButton}></img></button><b className='videoTitle'>Aula 01</b><div><b className='videoDescription'>Descrição da Aula</b><b className='videoPercentage'>60%</b></div></div></li>
                    <li><div><button><img alt="PlayButton" src={playButton}></img></button><b className='videoTitle'>Aula 01</b><div><b className='videoDescription'>Descrição da Aula</b><b className='videoPercentage'>60%</b></div></div></li>
                    <li><div><button><img alt="PlayButton" src={playButton}></img></button><b className='videoTitle'>Aula 01</b><div><b className='videoDescription'>Descrição da Aula</b><b className='videoPercentage'>60%</b></div></div></li>
                </ul>
                <button id='slideRight' className='slideRight' onClick={scrollRight}><img alt='next' src={rightArrow}></img></button>
            </div>

        </div>
    )
}

export default MainPage;