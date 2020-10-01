import React from 'react';
import Header from '../../components/header';
import VideoPreview from '../../components/videoPreview';
import data from '../../videoData'
import './styles.css';

import playButton from '../../assets/playButton.png';
import lockButton from '../../assets/lockButton.png';

function Video(){

    const Videos = data.map(video => <VideoPreview key={video.id} title={video.title} description={video.description} percentage={video.percentage} button={video.isLocked ? lockButton : playButton} image={null}/>)

    return(
        <div className='Video' >
            <Header/>
            <div className='VideoBody'>
                <div className='PlayerOverlay'>
                    <b className='PlayerVideoAula'>Aula 01</b>
                    <b className='PlayerVideoTitle'>TITULO DA AULA</b>
                    <video className='Player' controls>
                        <source type='video/mp4'></source>
                    </video>
                </div>
                <div className='VideoListOverlay'>
                    <b className='VideoListTitle'>Aulas</b>
                    <ul className='VideoListBack'>
                        {Videos}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Video;