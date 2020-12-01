import React, { useState } from "react";
import ReactDOM from "react-dom";
import user from "../../userData";
import "./styles.css";

import perfilPreview2x from "../../assets/perfilPreview-2x.png";
import quit from "../../assets/quit.png";
import ChangeImageIcon from "../../assets/ChangeImageIcon.png";

function PerfilEditModal(props) {
  const [perfilImage, setPerfilImage] = useState(user.Image);
  const [userName, setUserName] = useState(props.name);
  const [userMail, setUserMail] = useState(props.mail);

  const portalRoot = document.getElementById("portal-root");

  function closeHandler(e) {
    if (e.target.id === props.id) {
      props.onClose();
    }
  }

  function buttonCloceHanlder(e) {
    if (e.target.className === "exitEmailModal") {
      props.onClose();
    }
  }

  function confirmEdit() {
    user.Image = perfilImage;
    userName !== "" ? (user.name = userName) : (user.name = user.name);
    userMail !== "" ? (user.mail = userMail) : (user.mail = user.mail);
    props.onClose();
  }

  return ReactDOM.createPortal(
    <div
      className="perfilEditModalOverlay"
      id={props.id}
      onClick={closeHandler}
    >
      <div className="perfilEditModal">
        <div className="FormsModal">
          <div className="perfilEditPartA">
            <label for="fileInput">
              <div className="imageContainer">
                <div className="imageCropper">
                  <img
                    src={perfilImage}
                    alt="IconChangePerfil"
                    className="perfilEditImage"
                  ></img>
                </div>
                <img className="ChangeImageIcon" src={ChangeImageIcon}></img>
              </div>
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const File = e.target.files[0];
                const ImageFile = window.URL.createObjectURL(File);
                setPerfilImage(ImageFile);
              }}
            ></input>
            <b className="perfilEditNome">{userName}</b>
            <b className="perfilEditMail">{userMail}</b>
          </div>
          <div className="perfilEditLine"></div>
          <ul className="perfilEditPartB">
            <li>
              <div>
                <b>Nome</b>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  maxlength="20"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                ></input>
              </div>
            </li>
            <li>
              <div>
                <b>E-mail</b>
                <input
                  type="email"
                  value={userMail}
                  onChange={(e) => {
                    setUserMail(e.target.value);
                  }}
                ></input>
              </div>
            </li>
            <li>
              <div>
                <b>Senha</b>
                <input type="password" placeholder=""></input>
              </div>
            </li>
            <button onClick={confirmEdit}>CONFIRMAR</button>
          </ul>
        </div>
      </div>
    </div>,
    portalRoot
  );
}

export default PerfilEditModal;
