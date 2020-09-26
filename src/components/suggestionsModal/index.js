import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import data from '../../data'
import './styles.css';

function SuggestionsModal(props){

    const portalRoot = document.getElementById("portal-root");
    const page = document.getElementById("root");
    
    page.addEventListener('click', function(){
        props.onClose();
    })

    function handleMouseOver(e){
        e.target.style.background = 'rgba(0, 0, 0, 0.05)';
    }

    function handleMouseOut(e){
        e.target.style.background = 'white'
    }

    return ReactDOM.createPortal(
        <div className='SuggestionsModalOverlay'>
            <div className='SuggestionsModal'>
                <Link to='/video' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Aula 1</Link>
                {data.map(video => <Link key={video.id} to='/video' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{video.title}</Link>)}
            </div>
        </div>,
        portalRoot,
    )
}

export default SuggestionsModal;