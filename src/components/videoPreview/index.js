import React from 'react';
import './styles.css';

function VideoPreview(props){
    return(
        <li className='VideoPreview'>
            <div className='videoOverlay_video'>
                <button style={{backgroundImage: 'url(' + props.image + ')' }}>
                    <img alt="PlayButton" id='lock' src={props.button}></img>
                </button>
                <div className='videoInfo_video'>
                    <div className='videoInfoA_video'>
                        <b className='videoTitle_video'> {props.title} </b>
                        <b className='videoDescription_video'> {props.description} </b>
                    </div>
                    <b className='videoPercentage_video'> {props.percentage}% </b>
                </div>
                
            </div>
        </li>
    )
}

export default VideoPreview;