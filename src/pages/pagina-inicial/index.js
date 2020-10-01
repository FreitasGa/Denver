import React from 'react';
import Header from '../../components/header';
import VideoPreviewMainPage from '../../components/videoPreviewMainPage';
import data from '../../videoData';
import user from '../../userData';
import './styles.css';

import image from '../../assets/image.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import playButton from '../../assets/playButton.png';
import lockButton from '../../assets/lockButton.png';


function MainPage(){
    
    let intervalID = null;
  
    function scrollRight(e) {
        (e.type === "mousedown" ? holdAdd(this) : letGoAdd());
        const button = e.button;
        const maxScroll = document.getElementById('videoContainer').scrollWidth - document.getElementById('videoContainer').clientWidth;
        function holdAdd(s) {
            intervalID = setInterval(function() {
                if (button === 0) {
                    document.getElementById('videoContainer').scrollLeft += 20;
                }
                if (document.getElementById('videoContainer').scrollLeft === maxScroll) {
                    letGoAdd()
                }
            }, 25);
        }
        function letGoAdd() {
            clearInterval(intervalID);
            intervalID = null;
        }
    }

    function scrollLeft(e) {
        (e.type === "mousedown" ? holdAdd(this) : letGoAdd());
        const button = e.button;

        function holdAdd(s) {
            intervalID = setInterval(function() {
                if (button === 0) {
                    document.getElementById('videoContainer').scrollLeft -= 20;
                }
                if (document.getElementById('videoContainer').scrollLeft === 0) {
                    letGoAdd()
                }
            }, 25);
        }
        function letGoAdd() {
            clearInterval(intervalID);
            intervalID = null;
        }
    }

    const VideosMainPage = data.map(video => <VideoPreviewMainPage key={video.id} title={video.title} description={video.description} percentage={video.percentage} button={video.isLocked ? lockButton : playButton} image={null}/>)

    return(
        <div className='MainPage'>
            <Header />
            <div className='MainPageBody'>
                <div className='greetings'>
                    <b className='greet'>Bem vindo, {user.name}.</b>
                    <b className='mainText'>Seja o próprio terapeuta do seu filho!</b>
                    <b className='subText'>Aprenda como realizar terapia ocupacional utilizando o Modelo Denver para o desenvolvimento cognitivo da criança autista.</b>
                </div>
                <div className='images'>
                    <img className='image' alt='kids' src={image}></img>
                </div>
            </div>
            <div className='videoBack'>
                <button id='slideLeft' className='slideLeft' onMouseDown={scrollLeft} onMouseUp={scrollLeft}><img alt='previous' src={leftArrow}></img></button>
                <ul id='videoContainer'>
                    {VideosMainPage}
                </ul>
                <button id='slideRight' className='slideRight' onMouseDown={scrollRight} onMouseUp={scrollRight} ><img alt='next' src={rightArrow}></img></button>
            </div>

        </div>
    )
}

export default MainPage;