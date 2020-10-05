import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import user from '../../userData';
import './styles.css';

import perfilPreview2x from '../../assets/perfilPreview-2x.png'
import quit from '../../assets/quit.png'

function EmailModal(props){

    const portalRoot = document.getElementById("portal-root");
        
    function closeHandler(e){
        if (e.target.id === props.id) {
            props.onClose();
        }
    }

    function buttonCloceHanlder(e){
        if (e.target.className === 'exitEmailModal') {
            props.onClose();
        }
    }

    return ReactDOM.createPortal(
        <div className='emailModalOverlay' id={props.id} onClick={closeHandler} >
            <div className='emailModal'>
                <div className='FormsModal'>
                    <b>VOCÊ ESTÁ LOGADO COMO</b>
                    <button className='exitEmailModal' onClick={buttonCloceHanlder} >x</button>
                    <input className='fileEmailModal' accept='image/*' type='file'></input>
                    <button className='chageProfilePicModal'> Change Image </button>
                </div>
            </div>
        </div>,
        portalRoot,
    )
}

export default EmailModal;