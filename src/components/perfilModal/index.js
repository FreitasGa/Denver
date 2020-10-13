import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import './styles.css';

import perfilPreview from '../../assets/perfilPreview.png'
import quit from '../../assets/quit.png'

function PerfilModal(props){

    const portalRoot = document.getElementById("portal-root");
    const page = document.getElementById("root");

    page.addEventListener('click', function(){
        props.onClose();
    })

    return ReactDOM.createPortal(
        <div className='modalOverlay'>
            <div className='modal'>
                <div className='texts'>
                    <b>VOCÊ ESTÁ LOGADO COMO</b>
                    <b className='username'> {props.username} </b>
                    <button className='quit'><img alt='QuitButton' src={quit}></img>SAIR</button>
                </div>
                <Link to='/perfil'><div className='ImagePreviewCropper'><img alt='ImagePreview' src={props.profile}></img></div></Link>
            </div>
        </div>,
        portalRoot,
    )
}

export default PerfilModal;