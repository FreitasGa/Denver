import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
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
                <Link to='/' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Aula 1</Link>
            </div>
        </div>,
        portalRoot,
    )
}

export default SuggestionsModal;