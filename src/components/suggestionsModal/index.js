import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import data from '../../videoData'
import './styles.css';

function SuggestionsModal(props){

    const portalRoot = document.getElementById("portal-root");
    const page = document.getElementById("root");

    const Suggestions = data.filter(items => (
        items.title.toLowerCase().includes(props.search.toLowerCase())
    ))
    const filteredSuggestions = Suggestions.map(video => <Link key={video.id} to='/video'>{video.title}</Link>)

    page.addEventListener('click', function(){
        props.onClose();
    })

    return ReactDOM.createPortal(
        <div className='SuggestionsModalOverlay'>
            <div className='SuggestionsModal'>
                {filteredSuggestions}
            </div>
        </div>,
        portalRoot,
    )
}

export default SuggestionsModal;