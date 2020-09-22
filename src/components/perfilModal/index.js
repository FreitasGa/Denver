import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import './styles.css';

import perfilPreview from '../../assets/perfilPreview.png'
import quit from '../../assets/quit.png'

function PerfilModal(props){

    const portalRoot = document.getElementById("portal-root");

    return ReactDOM.createPortal(
        <div className='modalOverlay'>
            <div className='modal'>
                <div className='texts'>
                    <b>VOCÊ ESTÁ LOGADO COMO</b>
                    <b className='username'>Usuário</b>
                    <div><img src={quit}></img><button className='quit'>SAIR</button></div>
                </div>
                <img src={perfilPreview}></img>
                {props.children}
            </div>
        </div>,
        portalRoot,
    )
}

export default PerfilModal;