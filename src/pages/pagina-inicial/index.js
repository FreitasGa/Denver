import React from 'react';
import Header from '../../components/header';
import VideoPreviewMainPage from '../../components/videoPreviewMainPage';
import data from '../../data'
import './styles.css';

import image from '../../assets/image.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import playButton from '../../assets/playButton.png';
import lockButton from '../../assets/lockButton.png';


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
                    <VideoPreviewMainPage title='Aula 1' description='Descrição da aula' percentage='60' button={lockButton} image={null} />
                    {data.map(video => <VideoPreviewMainPage key={video.id} title={video.title} description={video.description} percentage={video.percentage} button={video.isLocked ? lockButton : playButton}/>)}
                </ul>
                <button id='slideRight' className='slideRight' onClick={scrollRight}><img alt='next' src={rightArrow}></img></button>
            </div>

        </div>
    )
}

export default MainPage;