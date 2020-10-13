import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import user from '../../userData';
import './styles.css';

import perfilPreview2x from '../../assets/perfilPreview-2x.png'
import quit from '../../assets/quit.png'
import ChangeImageIcon from '../../assets/ChangeImageIcon.png'

function PerfilEditModal(props){

    const [perfilImage, setPerfilImage] = useState(user.Image)
    const [userName, setUserName] = useState(user.name)
    const [userSurname, setUserSurname] = useState(user.surname)
    const [userMail, setUserMail] = useState(user.mail)

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

    function confirmEdit(){
        user.Image = perfilImage
        user.name = userName
        user.surname = userSurname
        user.mail = userMail
        props.onClose()
    }

    return ReactDOM.createPortal(
        <div className='perfilEditModalOverlay' id={props.id} onClick={closeHandler} >
            <div className='perfilEditModal'>
                <div className='FormsModal'>
                    <div className='perfilEditPartA'>
                        <label for='fileInput'><div className='imageCropper'><img src={perfilImage} alt='IconChangePerfil' className='perfilEditImage'></img></div><img className='ChangeImageIcon' src={ChangeImageIcon}></img></label>
                        <input id='fileInput' type='file' accept='image/*' onChange={(e) => {
                            const File = e.target.files[0];
                            const ImageFile = window.URL.createObjectURL(File)
                            setPerfilImage(ImageFile)
                        }}></input>
                        <b className='perfilEditNome'>{userName}</b>
                        <b className='perfilEditMail'>{userMail}</b>
                    </div>
                    <div className='perfilEditLine'></div>
                    <ul className='perfilEditPartB'>
                        <li><div><b>Nome</b><input type='text' value={userName} onChange={(e) => {setUserName(e.target.value)}}></input></div></li>
                        <li><div><b>Sobrenome</b><input type='text' value={userSurname} onChange={(e) => {setUserSurname(e.target.value)}}></input></div></li>
                        <li><div><b>E-mail</b><input type='email' value={userMail} onChange={(e) => {setUserMail(e.target.value)}}></input></div></li>
                        <li><div><b>Senha</b><input type='password' placeholder=''></input></div></li>
                        <button onClick={confirmEdit}>CONFIRMAR</button>
                    </ul>
                </div>
            </div>
        </div>,
        portalRoot,
    )
}

export default PerfilEditModal;