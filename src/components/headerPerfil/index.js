import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";
import cors from "cors";
import "./styles.css";


import perfilPreview from "../../assets/perfilPreview.png";
import quit from "../../assets/quit.png";
import api from "../../services/api";

function PerfilModal(props) {
  const portalRoot = document.getElementById("portal-root");
  const page = document.getElementById("root");
  const [state, setState] = useState(false)

  page.addEventListener("click", function () {
    props.onClose();
  });

  function logout(){
    localStorage.clear()
    setState(true)
  }

  return ReactDOM.createPortal(
    <div className="modalOverlay">
      <div className="modal">
        <div className="texts">
          <b>VOCÊ ESTÁ LOGADO COMO</b>
          <Link to="/perfil"><b className="username"> {props.username} </b></Link>
          <button className="quit" onClick={logout}>
            <img alt="QuitButton" src={quit}></img>SAIR
          </button>
          {state ? <Redirect to="/login"/> : null}
        </div>
        <Link to="/perfil">
          <div className="ImagePreviewCropper">
            <img alt="ImagePreview" src={props.profile}></img>
          </div>
        </Link>
      </div>
    </div>,
    portalRoot
  );
}

export default PerfilModal;
